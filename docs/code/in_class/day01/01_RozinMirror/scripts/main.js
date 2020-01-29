let myCapture;
let r = 0.0;

function setup() {
  let canvas = createCanvas(640, 480);

  canvas.parent("sketch");
  myCapture = createCapture(VIDEO);
  myCapture.hide();
  fill(255, 0, 0, 127);
  noStroke();
  colorMode(HSB, 255);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  // fill(random(255), random(255), random(255));
  
  // load pixel data into myCapture object
  myCapture.loadPixels();
  
  // calculate the stepSize based on mouseX position
  const stepSize = round(constrain(mouseX / 8, 6, 64));
  
  // loop through every single pixel pixel location (row by row)
  // of the input video capture.
  // Skip over pixels based on the stepSize.
  for(let y = 0; y < height; y+=stepSize) {
    for(let x = 0; x < width; x+=stepSize) {
      
      // convert two-dimensional pixel data into one dimension
      const i = y * width + x;
      
      // calculate a darkness value (between 0-1) for each captured pixel.
      // the darker the pixel, the larger the darkness value will be.
      const darkness = (255 - myCapture.pixels[i*4]) / 255;
      
      // calculate a radius for each pixel location based on the stepSize
      // and its darkness value
      const radius = stepSize * darkness;
      
      
      push();
        translate(width, 0);
        scale(-1, 1);
        fill(map(radius, 0, stepSize, 0, 255), 255, 255, 127);
        push();
          translate(x, y);
          rotate(r);
          rect(0, 0, radius, radius);
        pop();
      pop();
      r+=.005;
    }
  }
}