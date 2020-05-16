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

// 352, 288

alert("v12");

if(window.orientation == 0 || window.orientation == 90) {
  w = 352;
  h = 288;
} else {
  alert(window.orientation);
  w = 1280;
  h = 720;
  // alert("desktop");
}

function setup() {
  canvas = createCanvas(w, h);
  alert("w x h: " + w + " x " + h);
  
  background(255, 0, 0);
  textAlign(CENTER);
  textSize(50);
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
    fill(0, 255, 255);
    text(`${width} + ${height}`, width/2, height/2);
  } else {
    // do nothing
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

function windowResized() {
  // if(window.innerWidth < w) {
  //   $(".center-sketch").css("left", `${-Math.abs((w-window.innerWidth)/2)}px`);
  // } else {
  //   $(".center-sketch").css("left", `unset`);
  // }
}

$(document).ready(function(){

  if(window.orientation == 0 || window.orientation == 90) {
    $(".brush-buttons-toggler").show();
  } else {
    $(".brush-buttons-toggler").hide();
  }
  
  // $(window).on("orientationchange", function(){ 
  // }, function(){
    
  //   // $(".center-sketch").css("left", `${-Math.abs((w-window.innerHeight)/2)}px`);
  //   alert("ok " + window.innerWidth)
  // })

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

function fixSize(){
  if(window.orientation == 0){
    $(".center-sketch").css("left", `${-Math.abs((w-window.innerWidth)/2)}px`);
    // alert("portrait");
  } else {
    $(".center-sketch").css("left", `unset`);
    // alert("landscape");
  }
  // alert("w x h: " + w + " x " + h);

  // newCapture = true;
}



