
function setup(){



var canvas =  createCanvas(200,200);
background(123,111,222);
canvas.parent('sketch-holder');
 
 $("#change_color").click(function (){
      changeBackground();
  });
}


function changeBackground() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  background(r,g,b);
  $("#color-label").html("Yellow-ish");
}