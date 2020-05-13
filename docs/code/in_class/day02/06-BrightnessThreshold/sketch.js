let capture;

// set the only working capture resolution for whatever reason
let w = 640;
let h = 480;


// set two starting threshold values
let threshold01 = 80;
let threshold02 = 160;


function setup() {
  createCanvas(w, h);
  capture = createCapture(VIDEO);
  
  // since we're drawing pixel information directly to the canvas,
  // we need to set our screen's pixel density to 1 (if you're working
  // on a retina display, which you probably are!)
  pixelDensity(1);
  
  capture.hide();
}

function draw() {
  background(220);
  
  // load pixel data to the canvas
  loadPixels();
  
  // load pixel data to the video capture object
  capture.loadPixels();
  
  // threshold01 determines the cutoff for filling in pixels
  // with black. It's mapped to the mouseX position
  threshold01 = map(mouseX, 0, width, 0, 255);
  
  // threshold02 determines the cutoff for filling in pixels
  // with red, and it's mapped to the mouseY position
  threshold02 = map(mouseY, 0, height, 0, 255);
  
  // go through every single pixel in our video capture
  // as well as our canvas.
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      
      // calculate the location of each individual color channel
      let index = (x + y*w)*4;
      
      // capture the RGB values of each pixel from the video
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      
      // add together the brightness values so we can average them
      let totalBrightness = r + g + b;
      
      // calculate the current pixel's brightness by averaging
      // the value from each of their color channels.
      let brightness = totalBrightness/3.0;
      
      // if a pixel's brightness is below threshold01...
      if(brightness < threshold01){
       
        // if(frameCount % 2 == 0) {
          // set pixels to black
          pixels[index] = 0;
          pixels[index+1] = 0;
          pixels[index+2] = 0;
        // } else {
        //   pixels[index] = 255;
        //   pixels[index+1] = 255;
        //   pixels[index+2] = 255;
        // }
        
        // if a pixel's brightness is between threshold01 and threshold02...
      } else if(brightness > threshold01 && brightness < threshold02) {
        
        // set pixels to red
        pixels[index] = 255;
        pixels[index+1] = 0;
        pixels[index+2] = 0;
        
      } else {
  
       // set pixels to white 
        pixels[index] = x;
        pixels[index+1] = 255;
        pixels[index+2] = y;
        
      }
    }
  }
  
  // update the canvas pixels to show the new pixel colors
  updatePixels();
}