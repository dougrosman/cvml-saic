// for more information about push and pop, check this out: https://p5js.org/reference/#/p5/pop

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
  textSize(18);
}

function draw() {
  background(0);
  
  push();
    strokeWeight(5);
    stroke(240, 100, 240);
    fill(100, 240, 240);
  
    // using translate to place the rectangle at the center
    translate(width/2, height/2);
    rotate(frameCount);
    // drawing the rectangle at 0, 0 so it can rotate about itself
    rect(0, 0, 100, 50);
    
    fill(255);
    noStroke();
    text("I'm translated", -54, -35);
  pop();
  
    
    strokeWeight(5);
    stroke('blue');
    fill('yellow');
    rotate(frameCount);
    rect(width/2, height/2, 100, 50);
    fill(255);
    noStroke();
    text("I'm not", (width/2)-54, (height/2)-35);
}