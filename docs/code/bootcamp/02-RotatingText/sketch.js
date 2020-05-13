let myFont;

function preload() {
 
  colorMode(HSB, 100);
  myFont = loadFont('fonts/Arial.ttf');
}
  

function setup() {
  createCanvas(400, 400, WEBGL);
  textSize(20);
  textFont(myFont);
  textAlign(CENTER);
}

function draw() {
  background(0);
 
  fill(0, 220, 120);
  push();
  //translate(0, -height/4);
  rotateY(frameCount/50.);
  text("letz code", 0, 0);
  pop();
}