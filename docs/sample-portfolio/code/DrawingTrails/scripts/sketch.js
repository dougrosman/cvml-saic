

let points = [];
let count;

function setup() {
  let canvas = createCanvas(innerWidth, innerHeight);
  canvas.parent("sketch");
  //createCanvas(500, 500);
  colorMode(HSB, 255);
}

function draw() {
  background(0);
  
  
  let count = 0;
  
  let p = new Point(mouseX, mouseY);
  points.push(p);
  
  
  for(let i = 0; i < points.length; i++) {
    
    points[i].draw();
    points[i].update();
    
    if(points[i].shouldDie) {
     points.shift(); 
    }
  }
}

class Point {
  
 constructor(_x, _y) {
   
   let hue = map(sin(frameCount/25.), -1, 1, 0, 255);
   let sat = map(sin(frameCount/100.), -1, 1, 50, 255);
   
   this.pos = createVector(_x, _y);
   this.color = [hue, sat, 255, 255];
   this.age = 255;
   this.size = this.age/4;
   this.shouldDie = false;
   this.stroke = [0, 0, 255, 255];
   
 }
  
  draw() {
    fill(this.color);
    noStroke();
    //stroke(this.stroke);
    ellipse(this.pos.x, this.pos.y, this.size);    
  }
  
  update() {
    this.age-=1;
    this.size = this.age/4;
    //this.color[3] = this.age/2;
    //this.color[0] = frameCount;
    //this.stroke[3]-=0.25;
    
    if(this.age < 0) {
      this.shouldDie = true;
    }
  }
}

function keyPressed() {
  
  if(key == 's'){
    save('DrawingTrails.png');
  }
  
}