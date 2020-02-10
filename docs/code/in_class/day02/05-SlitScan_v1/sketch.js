let capture;
let x = 0;
let w = 640;
let h = 480;

function setup() {
  createCanvas(800, 480);
  capture = createCapture(VIDEO);
  capture.hide();
  background(0);
}

function draw() {
  capture.loadPixels();
  let w = capture.width;
  let h = capture.height;
  
  // copy the center vertical pixel column from the source video and
  // draw it to an incrementing x position
  copy(capture, w/2, 0, 1, h, x, 0, 1, h);
  x++;
  if (x > width) {
    x = 0;
  }
}
