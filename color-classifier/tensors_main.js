let loading;
$(document).ready(function(){
  $("#predict").click(function(){

   let red = $("#red").val();
   let green = $("#green").val();
   let blue = $("#blue").val();
   const inputs = tf.tensor2d([[red/255,green/255,blue/255]]);
   predict(inputs);
});


$("#change_color").click(function(){
  changeBackground();
});

$("#train_model").click(function(){
  training();
});
//
// $("#saveModel").click(function(){
//   saveModel();
// });
//
//
// $("#loadModel").click(function(){
//   uploadModel().then(() => console.log('files uploaded successfully'));
// });

});


let data;
let model;
let labelList = [
  'red-ish',
  'green-ish',
  'blue-ish',
  'orange-ish',
  'yellow-ish',
  'pink-ish',
  'purple-ish',
  'brown-ish',
  'grey-ish'
];




// loading data
function loadData(){
  $.ajax({
    url: 'tensors_color_data.json',
    dataType: 'json',
    async: false,
    success: function(d) {
      data = d
    }
  });
}

function setup(){
  var canvas = createCanvas(250,250);
  background(255,212,111);
  canvas.parent('sketch_holder');
  buildModel();
}


function buildModel(){
  model = tf.sequential();
  const hidden1 = tf.layers.dense({
       units : 8,
       inputShape : [3],
       activation : 'relu'
  });


  const hidden2 = tf.layers.dense({
       units : 8,
       activation : 'relu'
  });

  const output = tf.layers.dense({
      units : 9,
      activation : 'sigmoid',
  });


  const config = {
    optimizer : tf.train.adam(0.01),
    loss : tf.losses.meanSquaredError
  }

  model.add(hidden1);
  model.add(hidden2);
  model.add(output);
  model.compile(config);
}





function training(){

  loadData();

  let batchInputs = [];
  let batchTargets = [];

    for(let i =0; i < 5000; i++){
      let input = [];
      let targets = [];
      let red = data.entries[i].r;
      let green = data.entries[i].g;
      let blue = data.entries[i].b;
      input.push(red/255);
      input.push(green/255);
      input.push(blue/255);
      let label = data.entries[i].label;
      batchInputs.push(input);

      let oneHotTemplate = [0,0,0,0,0,0,0,0,0];
      let result = labelList.indexOf(label);
      oneHotTemplate[result] = 1;
      targets = oneHotTemplate;
      batchTargets.push(targets);
  }


   const xs = tf.tensor2d(batchInputs);
   const ys = tf.tensor2d(batchTargets);

   callingTrainingAsync(xs,ys).then(() => {
     console.log('trainig completed');
     alert('training completed')

   });
}


async function callingTrainingAsync(xs,ys){
  console.log('training started');
  for(let i =0; i < 20; i++){
    const response =  await model.fit(xs,ys);
    console.log(response.history.loss[0])
  }
}


async function predict(inputs){
   let resultArray = model.predict(inputs).dataSync();
   let arr = [];
   for(let i = 0 ; i < resultArray.length; i++){
     arr.push(resultArray[i]);
   }
   $(".alert").html('The color is : ' + labelList[arr.indexOf(max(arr))]);
}


















//
// async function saveModel(inputs){
//   const saveResult = await model.save('downloads:///tmp/my-model-1');
// }
//
//
//





// async function uploadModel(){
//    const jsonUpload = document.getElementById('json-upload');
//    const weightsUpload = document.getElementById('weights-upload');
//
//
//
//    const model = await tf.loadModel(
//        tf.io.browserFiles([jsonUpload.files[0], weightsUpload.files[0]]));
// }
