// Adapted from Daniel Shiffman's Coding Train (https://editor.p5js.org/dano/sketches/rJjdmrCaW)

// ColorTracker01

let capture;

// A variable for the color we are searching for.
let trackColor;
let w = 640;
let h = 480;

function setup() {
  createCanvas(w, h);
  
  pixelDensity(1);
  capture = createCapture(VIDEO);
  
  // The above function actually makes a separate video
  // element on the page.  The line below hides it since we are
  // drawing the video to the canvas
  capture.hide();

  // Start off tracking for red
  trackColor = [255, 0, 0];
}

function draw() {

  // We are going to look at the video's pixels
  capture.loadPixels();

  // Before we begin searching, the "world record" for closest color is set to a high number that is easy for the first pixel to beat.
  let worldRecord = 500; 

  // XY coordinate of closest color
  let closestX = 0;
  let closestY = 0;

  for (let y = 0; y < capture.height; y++ ) {
    for (let x = 0; x < capture.width; x++ ) {
      let loc = (x + y * capture.width) * 4;
      
      let r1 = capture.pixels[loc ]; 
      let g1 = capture.pixels[loc + 1];
      let b1 = capture.pixels[loc + 2];

      let r2 = trackColor[0];
      let g2 = trackColor[1];
      let b2 = trackColor[2];
      

      // Using euclidean distance to compare colors
      let d = dist(r1, g1, b1, r2, g2, b2); // We are using the dist( ) function to compare the current color with the color we are tracking.

      // If current color is more similar to tracked color than
      // closest color, save current location and current difference
      if (d < worldRecord) {
        worldRecord = d;
        closestX = x;
        closestY = y;
      }
    }
  }
  
  // Draw the video
  push();
    translate(w, 0);
    scale(-1, 1);
    image(capture,0,0);

  // We only consider the color found if its color distance is less than 10. 
  // This threshold of 10 is arbitrary and you can adjust this number depending on how accurate you require the tracking to be.
  if (worldRecord < 10) { 
    // Draw a circle at the tracked pixel
    fill(trackColor);
    strokeWeight(4.0);
    stroke(0);
    ellipse(closestX, closestY, 16, 16);
  }
  pop();
}


function mousePressed() {
  // Save color where the mouse is clicked in trackColor variable
  trackColor = capture.get(w-mouseX,mouseY);
  console.log(trackColor);
}
