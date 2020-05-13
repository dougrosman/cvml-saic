// These notes are messy, but maybe they'll help?

let twoSeconds = 0;
let shouldDraw = false;


function setup() {
  createCanvas(400, 400);
  
  colorMode(HSB);
}

function draw() {
  background(220);
  
  // noLoop();
  
  // variables
  
  let x = 20;
  let y = 20.0;
  let name = "doug";
  let isItRaining = false;


//   int x = 20;
//   string name = "doug"
//   boolean raining = false;
  
  
  // NUMBERS
  
  // int (integer, whole numbers)
  
  
  // float (decimals)
  
  // let r = random(10);
  // print(r);
  // print(typeof(r));
  // let integerR = int(r);
  // print(integerR);
  // print(typeof(integerR));
  
  
  // STRINGS
  // string literal: just the string without being stored in a variable
  let doog = "doug's car";
  let doog2 = 'doug';
  let coolNumber = 12;
  
  let combinedString = doog + doog2 + coolNumber;
  
  // print("My framerate is: " + frameRate());
  
//   print(combinedString);
  
//   print(doog[1]);
  
  // boolean
  // true or false;
  
  
//   if(true) {
    
//    twoSeconds = true;
//   ellipse(10, 10, 200, 200);
//   }
  
  if(twoSeconds) {
    
    ellipse(10, 10, 200, 200);
  }
  
  // print(typeof(laksdjfas));
  
  
  // null
  
  
  
  // data structures
  
  // arrays
  
  let myStuff = [8, "cat", true];
  
  let red = ["cat", 80, 0, 0, 122];
  
  let blue = [0, 0, 255];
  
  //let colors = [red, blue];
  
  fill(red[1]);
  fill('red');
  
   // fill(random(100), random(100), random(100));
  
  let myColor = [100, 100, 100];
  
  //print(myColor[2]+myColor[3]);  
  
  // HSB: hue saturation brightness
  
  // fill(random(255), 255, 120);
  
  ellipse(20, 20, 100);
  
  // print(myStuff.length);
  
  //print(myStuff[myStuff.length]);
  
  
}


/* notes

Processing: Java
openFrameworks: C++
P5js: Javascript

// interpreted languages
// JIT (just in time) compiling
// compiled languages


// pseudocode
// source code
// bytecode
// machinecode / binary


// all languages are very similar


*/