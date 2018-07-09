let rainbows;
let data;



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




function preload(){
  data = loadJSON('./colorData.json');
}

function setup(){

let x = 0;
let y=0;



let nn = new NeuralNetwork(3,8,9);
let len = data.entries.length;


let array = [1,4,2332,3434,53453];

console.log('hello')
for(let i =0; i < 5000; i++){
   let inputs = [];
   let targets = [];
   let red = data.entries[i].r;
   let green = data.entries[i].g;
   let blue = data.entries[i].b;
   let label = data.entries[i].label;
   inputs.push(red);
   inputs.push(green);
   inputs.push(blue);
   let oneHotTemplate = [0,0,0,0,0,0,0,0,0];
   let result = labelList.indexOf(label);
   oneHotTemplate[result] = 1;
   targets = oneHotTemplate;
   nn.train(inputs,targets);
}
console.log('training complete')
// let correction = 0;
// for(let j = 5001; j< 5500; j++){
//   let inputs = [];
//   let targets = [];
//   let red = data.entries[j].r;
//   let green = data.entries[j].g;
//   let blue = data.entries[j].b;
//   let label = data.entries[j].label;
//   inputs.push(red);
//   inputs.push(green);
//   inputs.push(blue);
//
//   let resultIndex = labelList.indexOf(label);
//
//
//   let output =  nn.feedforward(inputs);
//   let outputArray = Matrix.toArray(output);
//
//
//   let outputIndex = outputArray.indexOf(max(outputArray));
//  if(resultIndex == outputIndex){
//    correction +=1;
//  }
//
//
// }


}
