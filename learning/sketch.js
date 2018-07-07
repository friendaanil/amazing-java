

function setup(){
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBPhwZ17mpHgk7v2M8p5_2RPB2pcIR1k04",
    authDomain: "amazing-firebase-9cdd7.firebaseapp.com",
    databaseURL: "https://amazing-firebase-9cdd7.firebaseio.com",
    projectId: "amazing-firebase-9cdd7",
    storageBucket: "amazing-firebase-9cdd7.appspot.com",
    messagingSenderId: "562416663541"
  };
  firebase.initializeApp(config);



   console.log(firebase)
   var database = firebase.database();
   var ref = database.ref('scores');

   ref.on('value',getData,getErr);



//    var data = {
//          name : "DTS",
//          score:66
//    }  
//    ref.push(data);
}




function getData(data){
var scores = data.val();
console.log(scores)
  var keys =   Object.keys(scores);


  for(let i = 0 ; i < keys.length; i++){
      let key =   keys[i];
        let name =               scores[key].name;
        let score =              scores[key].score;
        console.log(name);
        console.log(score);
  }
}



function getErr(err){
console.log(err)
      
}

 

