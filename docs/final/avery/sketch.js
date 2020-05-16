let loop = true;
let threshold = 80;
let threshold01 = 160;
let threshold02 = 240;
let capture;
let w = 640;
let h = 480;
let locked = false;
let newCapture = false;
let canvas;

alert("v8");

// if(window.orientation == 0) {
//   w = 640;
//   h = 480;
// } else {
//   w = 960;
//   h = 540;
// }

function setup() {
  canvas = createCanvas(w, h);
  
  background(255, 0, 0);
  canvas.parent("sketch");
  let constraints = {audio:false,video:{width:{min:320,ideal:w,max:1920},height:{min:240,ideal:h,max:1080},frameRate: {min: 1.0, max: 60.0}}};
  capture = createCapture(constraints);
  capture.hide();
  angleMode(DEGREES);
}

function draw() {
  if(loop){
    
    // if(newCapture) {
    //   // resizeCanvas(w, h);
    //   background(random(255), random(255), random(255));
    //   capture.size(w, h);
    //   stroke(0, 255, 255);
    //   text(`${width} + ${height}`, width/2, height/2);
    //   newCapture = false;
    // }

    capture.loadPixels();

    //if(capture.length > 0){
      threshold = map(sin(frameCount/10),-1,1,1,255);

      for (var y = 0; y < h; y++ ) {
        for (var x = 0; x < w; x++ ) {
          let index = (x + y*w)*4;
          let r = capture.pixels[index+0];
          let g = capture.pixels[index+1];
          let b = capture.pixels[index+2];
          let totalBrightness = r + g + b;
          let brightness = totalBrightness/3.0;
          
          if(brightness < threshold) {
            //set pixels to black
            capture.pixels[index+0] = 0;
            capture.pixels[index+1] = 0;
            capture.pixels[index+2] = 0;
          } else if(brightness > threshold01 && brightness < threshold02) {
            //set pixels to color
            capture.pixels[index+0] = 255;
            capture.pixels[index+1] = 0;
            capture.pixels[index+2] = 255;
          } else {
            //set pixels to white
            capture.pixels[index+0] = 255;
            capture.pixels[index+1] = x;
            capture.pixels[index+2] = y;
          }
        }
      }
      capture.updatePixels();
      push();
        translate(w, 0);
        scale(-1, 1);
        image(capture, 0, 0);
      pop();
    //}
    stroke(0, 255, 255);
    text(`${width} + ${height}`, width/2, height/2);
  } else {
    // do nothing
  }
}

function windowResized() {
  if(window.orientation == 0) {
    // w = 352;
    // h = 288;
    $(".center-sketch").css("left", `${-Math.abs((w-window.innerWidth)/4)}px`);
  } else {
    // w = 960;
    // h = 540;
    $(".center-sketch").css("left", `${-Math.abs((h-window.innerWidth)/4)}px`);
  }
}
function keyPressed() {
  if(key == 's'){
    save("averyjohnson.png");
  }
}

function touchMoved() {
  if(locked){
    $(window).scrollTop(100);
    return false;
  } else {
    return true;
  }
}

$(document).ready(function(){

  if(window.orientation == 0 || window.orientation == 1) {
    $(".brush-buttons-toggler").show();
  } else {
    $(".brush-buttons-toggler").hide();
    
  }
  
  $(window).on("orientationchange", function(){ 
    if(window.orientation == 0){
      
      // w = 352;
      // h = 288;
      // alert("portrait"+w+" "+h);
      $(".center-sketch").css("left", `${-Math.abs((h-window.innerWidth)/4)}px`);
    } else {
      alert("landscape");
      // w = 960;
      // h = 540;
      $(".center-sketch").css("left", `unset`);
    }
    newCapture = true;
  })

  $(window).scroll(function(){
    if(locked) {
      $(window).scrollTop(110);
    }
  })

  $(".screen-lock").click(function(){
    $(window).scrollTop(120);
    $("#sketch").css("margin", "70px 0 10px 0")
    $(".fa-lock").toggle();
    $(".fa-lock-open").toggle();
    // $("#bsave").css("margin", "-100px");
    locked = !locked;
  })

  $(".play-pause").click(function(){
    $(".fa-pause").toggle();
    $(".fa-play").toggle();
    loop = !loop;
  })

  $("#bsave").click(function(){
    save("averyjohnson.png");
  })
})



