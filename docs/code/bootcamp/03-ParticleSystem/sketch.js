let particles = [];

function setup() {
  createCanvas(400, 400);
  
  colorMode(HSB);
  noStroke();
  
  // populate particles array with new Particle objects
  for(let i = 0; i < 200; i++) {
    let p = new Particle();
    
    p.vel = createVector(random(-3, 3), random(-3, 3));
    
    particles.push(p);
  }   
  
}

function draw() {
  background(220);
  
  for(let i = 0; i < particles.length; i++) {
    
    
    particles[i].draw();
    
    particles[i].update();
    
    if(particles[i].shouldDie && particles.length > 0) {
      particles.splice(i, 1);
      
    }
    
  }

}


class Particle {
  
  // velocity: change in position over time
  // acceleration: change in velocity over time
  
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-20, 20), random(-20, 20));
    this.acc = createVector(random(-0.01, 0.01), random(-0.01, 0.01));
    
    this.color = [random(255), 255, 255];
    this.size = random(2, 5);
    this.age = random(300, 600);
    this.shouldDie = false;
  }
  
  // draws our particle
  draw() {
    
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
  
  // updates the state variables (position, velocity, etc)
  update() {
    
    this.vel.add(this.acc);
    this.checkWalls();
    this.pos.add(this.vel);
    
    this.age--;   
    
    if(this.age < 0) {
     
      this.shouldDie = true;
    }
  }
  
  checkWalls() {
    
    // if particle reaches edge of canvas, make it reverse direction
    
    // check the right edge
    if(this.pos.x > width-(this.size/2)  ) {
      //make sure the particle is at the edge and not past before reversing direction
      this.pos.x = width-this.size/2;
      // reverse direction
      this.vel.x = -this.vel.x;
    }
    
    // bottom edge
    if(this.pos.y > height-(this.size/2)) {
     
     this.pos.y = height-(this.size/2);
     this.vel.y = -this.vel.y; 
    }
    
    // left edge
    if(this.pos.x < 0 + this.size/2){
      
      this.pos.x = this.size/2;
      this.vel.x = -this.vel.x;
    }
    
    // top edge
    if(this.pos.y < 0 + this.size/2) {
      
     this.pos.y = this.size/2;
     this.vel.y = -this.vel.y; 
    }
    
  }

}