
var r = 100;
var g = 200;
var b=255;

function setup(){

  createCanvas(1200,400);
}


function draw(){
  r=map(mouseX,0,1200,0,255);
  g=map(mouseX,0,1200,0,50);
b=map(mouseX,0,1200,255,0);

background(r,g,b);
fill(0,0,0);
ellipse(mouseX,200,70,70);

drawSprites();
  
}