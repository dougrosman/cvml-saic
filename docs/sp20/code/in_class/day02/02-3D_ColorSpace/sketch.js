let stepSize = 30;
let w = 600;
let h = 600;

let xPos = -w/4;
let yPos = -h/4;

function setup() {
  createCanvas(w, h, WEBGL);
  //strokeWeight(0.25);
}

function draw() {
  orbitControl();
  normalMaterial();
  background(0);
  
  push();
    translate(xPos, yPos);
  for(let z = 0; z < 255; z+=stepSize) {
    for(let y = 0; y < 255; y+=stepSize) {
      for(let x = 0; x < 255; x+=stepSize) {
        
        
        push();
          translate(x, y, z);
          fill(x, y, z);
          sphere(stepSize/8);
        pop();        
      }
    }
  }
  pop();
    
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    xPos-=10;
  } else if(keyCode == RIGHT_ARROW) {
    xPos+=10;
  } else if(keyCode == UP_ARROW) {
    yPos-=10;
  } else if(keyCode == DOWN_ARROW) {
    yPos+=10;
  }
}
    
    
    
    
    
    
    
    