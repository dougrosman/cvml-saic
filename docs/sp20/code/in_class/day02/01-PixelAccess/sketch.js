function setup() {
  createCanvas(255, 255);
  pixelDensity(1);
}

function draw() {
  background(0);
  
  // load your pixels; tell the browser you want to
  // access the pixels in the canvas
  loadPixels();
  
  // part 1: change a single pixel
  // pixels[4] = 255;
  // pixels[5] = 255;
  // pixels[6] = 0;
  // pixels[7] = 255;
  
  // // part 2: loop through all the pixels
  // // essentially writes the "background" function
  // for(let y = 0; y < height; y++) {
  //   for(let x = 0; x < width; x++) {
  //     let index = (x + y*width)*4;
  //     pixels[index] = 0;
  //     pixels[index+1] = 255;
  //     pixels[index+2] = 255;
  //     pixels[index+3] = 255;
  //   }
  // }
  
  // part 3: loop through all the pixels (gradient)
  for(let y = 0; y < height; y++) {
    for(let x = 0; x < width; x++) {
      let index = (x + y*width)*4;
      pixels[index] = x;
      pixels[index+1] = 0;
      pixels[index+2] = y;
      pixels[index+3] = 255;
    }
  }
  
  updatePixels();
  
  
  
}