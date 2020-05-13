let faces = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  
  for(let i = 0; i < 50; i++) {
    
    // create temp face object
    let f = new Face(random(width), random(height), random(20, 50));
    
    faces.push(f); 
  }
}

function draw() {
  background(220);
  
  for(let i = 0; i < faces.length; i++) {
    
    faces[i].displayFace();
  }
}


class Face {
  
  constructor(_x, _y, _size) {
    
    this.x = _x;
    this.y = _y;
    this.size = _size;
    this.color = [random(255), random(255), random(255)];
  }
  
  
  displayFace() {
    
    fill(this.color);
    
    // draw head
    ellipse(this.x, this.y, this.size);
    
    // draw eyes
    
    // left eye
    fill(255);
    ellipse(this.x-this.size/4, this.y, 20);
    
    // right eye
    ellipse(this.x+this.size/4, this.y, 20);
    
  }
  
 // attributes
  
  
  // functions
  
}

