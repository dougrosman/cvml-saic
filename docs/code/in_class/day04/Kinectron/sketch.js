let kinectron;

function setup() {
  let canvas = createCanvas(1280, 720);
  canvas.parent("sketch");
  background(0);
  
  kinectron = new Kinectron("192.168.0.24");
  
  kinectron.makeConnection();
  
  kinectron.startTrackedBodies(drawBody);
}

function draw() {
  // background(220);
}

function drawBody(body) {
  // background(255);
  for(let i = 0; i < body.joints.length; i++) {
    fill(random(255), 0, random(255));
    ellipse(body.joints[i].depthX*width, body.joints[i].depthY*height, 20, 20);
  }
  
}