let kinectron;

function setup() {
  let canvas = createCanvas(1280, 720);
  canvas.parent("sketch");
  background(0);
  
  kinectron = new Kinectron("192.168.0.24");
  
  kinectron.makeConnection();
  
  kinectron.startRawDepth(drawDepth);
  // kinectron.setRawDepthCallback(drawDepth)
}

function draw() {
  // background(220);
}

function drawDepth(rawDepth) {
    background(255);

    let rawData = rawDepth.processRawDepth();
    console.log(data.rawdepthwidth);
  
}