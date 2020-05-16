let loop = true;
let threshold = 80;
let threshold01 = 160;
let threshold02 = 240;
let capture;
let w;
let h;
let locked = false;
let newCapture = false;
let canvas;

if(window.orientation == 0) {
  w = 360;
  h = 640;
} else {
  w = 1280;
  h = 720;
}

function setup() {
  canvas = createCanvas(w, h);
  
  background(255, 0, 0);
  canvas.parent("sketch");
  let constraints = {audio:false,video:{width:{min:320,ideal:w,max:1920},height:{min:240,ideal:h,max:1080},frameRate: {min: 1.0, max: 60.0}}};
  capture = createCapture(constraints);
  capture.hide();
  angleMode(DEGREES);
  console.log(capture);
}

function draw() {
  if(loop){
    
    if(newCapture) {
      canvas = createCanvas(w, h);
      let constraints = {audio:false,video:{width:{min:320,ideal:w,max:1920},height:{min:240,ideal:h,max:1080},frameRate: {min: 1.0, max: 60.0}}};
      capture = createCapture(constraints);
      newCapture = false;
    }

    capture.loadPixels();
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
    
  } else {
    // do nothing
  }
}

function windowResized() {
  if(window.innerWidth < 400) {
    $(".center-sketch").css("left", `${-Math.abs((w-window.innerWidth)/4)}px`);
  } else {
    $(".center-sketch").css("left", `unset`);
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
  
  $(window).on("orientationchange", function(){

    if(window.orientation == 0) {
      w = 360;
      h = 640;
    } else {
      w = 1280;
      h = 720;
    }
    
    newCapture = true;
    
    if(window.orientation == 0){
      $(".center-sketch").css("left", `${-Math.abs((h-window.innerWidth)/4)}px`);
    } else {
      $(".center-sketch").css("left", `${-Math.abs((w-window.innerWidth)/4)}px`);
    }
  })

  $(window).scroll(function(){
    if(locked) {
      $(window).scrollTop(110);
    }
  })

  if(window.innerWidth < 400) {
    $(".brush-buttons-toggler").toggle();
    $(".center-sketch").css("left", `${-Math.abs((w-window.innerWidth)/4)}px`);
  } else {
    $(".center-sketch").css("left", `unset`);
  }

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



