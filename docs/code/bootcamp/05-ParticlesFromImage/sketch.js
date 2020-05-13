let particles = [];
let img;
let stepSize;

// loads the image before we peform any operations with it
function preload() {
   
  img = loadImage("https://i.imgur.com/S1DyDQE.png");
}


function setup() {
  
  img.resize(img.width/2, img.height/2);
  createCanvas(img.width*2, img.height*2);
  noStroke();
  
  stepSize = 8;
  
  // loop through each pixel of the image, skipping over pixels based on stepSize
  for(let y = 0; y < img.height; y+=stepSize) {
    for (let x = 0; x < img.width; x+=stepSize) {
      
      let p = new Particle();
      
      // get the pixel color at the current XY position
      let pixelColor = img.get(x, y);
      
      p.color = pixelColor;
      p.pos = createVector(x, y);
      p.size = stepSize*2;
      particles.push(p);
    } 
  }
  print(particles.length);
}

function draw() {
  background(255);
  
  for(let i = 0; i < particles.length; i++) {
    
    particles[i].draw();
    particles[i].update();
  }
  
  // text(frameRate(), 10, 10);
}


class Particle {
  
  // velocity: change in position over time
  // acceleration: change in velocity over time
  
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    this.acc = createVector(random(-0.001, 0.001), random(-0.001, 0.001));
    
    this.color = [random(255), 255, 255];
    this.size = 10;
    this.age = random(300, 600);
    this.drag = 0.99;
    
  }
  
  // draws our particle
  draw() {
    
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
  
  // updates the state variables (position, velocity, etc.)
  update() {
    
    this.vel.add(this.acc);
    // this.vel.mult(this.drag); // uncomment this line to add drag to the particles
    this.pos.add(this.vel);
    
    // reverse direction of particles if they encounter a wall
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
    
    if(this.pos.x < 0 + this.size/2){
      
      this.pos.x = this.size/2;
      this.vel.x = -this.vel.x;
    }
      
    if(this.pos.y < 0 + this.size/2) {
      
     this.pos.y = this.size/2;
     this.vel.y = -this.vel.y; 
    }
  }
}