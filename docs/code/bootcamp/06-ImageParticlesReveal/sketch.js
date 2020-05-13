let particles = [];
let img;
let stepSize = 1;

function preload() {
   
  img = loadImage("https://upload.wikimedia.org/wikipedia/commons/4/47/American_Eskimo_Dog.jpg");
}


function setup() {
  
  img.resize(img.width/2, img.height/2);
  createCanvas(img.width, img.height);
  noStroke();
  background(255);
  
  for(let i = 0; i < 500; i++) {
   
    let p = new Particle();
    
    p.size=20;
    particles.push(p);
  }
}

function draw() {
     
  for(let i = 0; i < particles.length; i++) {
    
    let p = particles[i];
    
    let c = img.get(p.pos.x, p.pos.y);
    
    p.color = c;
    p.update();
    p.draw();
      
  }
}


class Particle {
  
  // velocity: change in position over time
  // acceleration: change in velocity over time
  
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector(random(-0.01, 0.01), random(0.01, 0.03));
    
    this.color = [random(255), 255, 255];
    this.size = 10;
    this.drag = 0.99;
    
  }
  
  // draws particle
  draw() {
    
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
  
  // updates the state variables (position, velocity, etc)
  update() {
    
    this.vel.add(this.acc);
    // this.vel.mult(this.drag); // uncomment this line to incorporate drag
    this.pos.add(this.vel);
    this.checkWalls();
  }
  
  checkWalls() {
    
    // if particle reaches edge of canvas, make it reverse direction
    
    // right edge
    if(this.pos.x > width-(this.size/2)  ) {
  
      this.pos.x = width-this.size/2;
      this.vel.x = -this.vel.x;
    }
    
    // bottom edge
    if(this.pos.y > height-(this.size/2)) {
     
     this.pos.y = height-(this.size/2);
     this.vel.y = -this.vel.y; 
    }
    
    // bottom edge
    if(this.pos.x < 0 + this.size/2){
      
      this.pos.x = this.size/2;
      this.vel.x = -this.vel.x;
    }
     
    // left edge
    if(this.pos.y < 0 + this.size/2) {
      
     this.pos.y = this.size/2;
     this.vel.y = -this.vel.y; 
    }
    
  }

}