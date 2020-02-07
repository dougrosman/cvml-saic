// Access and manipulate individual Pixels in the Canvas

function setup() {
  let canvas = createCanvas(255, 255);
  canvas.parent("sketch")
  createCanvas(255, 255);
  pixelDensity(1);
  
}

function draw() {
  background(0);

  loadPixels();
  
  // fill each color channel of the first pixel with different values.
  // pixels[0] = 255;
  // pixels[1] = 255;
  // pixels[2] = 0;
  // pixels[3] = 255;
  
  
  // create a gradient
  for(let y = 0; y < height; y++) {
    for(let x = 0; x < width; x++) {
      
      let index = (x + y*width) * 4;

      
      pixels[index] = x;
      pixels[index+1] = 0;
      pixels[index+2] = y;
      pixels[index+3] = 255;
      
    }
  }
  
  updatePixels();
  
}