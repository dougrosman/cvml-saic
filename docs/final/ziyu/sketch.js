let loop = true;

let w = 640;
let h = 480;

let tmpData = [];
let tmpImageLeft = [];
let tmpImageTop = [];
let tmpImageSide = [];
let tmpImageOffset = [];
let Num = [2, 4, 40, 80]
let randNum;
let Num2 = [100, 200, 400, 0]
let style = [tmpImageLeft, tmpImageTop, tmpImageSide, tmpImageOffset]
let NumStrip;
let mode;
let oldFrame;
let pattern = [160, 80, 40, 40, 40, 40, 80, 160];

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch");
  let constraints = {audio:false,video:{width:{min:320,ideal:w,max:1920},height:{min:240,ideal:h,max:1080},frameRate: {min: 1.0, max: 60.0}}};
  capture = createCapture(constraints);
  capture.hide();
  generatePattern();
}


function draw() {
  
  if(loop){
    capture.loadPixels();
    let seconds = frameCount % (2 * 30) / 4

    //image flip algorithm
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let FlipX = x + (width / 2 - x) * 2 - 1
        let index = (x + y * width) * 4;
        let MirrorIndex = (FlipX + randNum + y * width) * 4;
        let FlipY = y + (height / 2 - y) * 2 - 1
        let MirrorIndexY = (x + randNum + FlipY * width) * 4;
        let MirrorIndexXY = (FlipX + randNum + FlipY * width) * 4;
        let FlipXOffset = y + (width / 2 - x) * 2 - 1
        let MirrorIndexOffset = (FlipXOffset + randNum + y * width) * 4;

        tmpImageLeft[index + 0] = capture.pixels[MirrorIndex + 0];
        tmpImageLeft[index + 1] = capture.pixels[MirrorIndex + 1];
        tmpImageLeft[index + 2] = capture.pixels[MirrorIndex + 2];

        tmpImageTop[index + 0] = capture.pixels[MirrorIndexY + 0];
        tmpImageTop[index + 1] = capture.pixels[MirrorIndexY + 1];
        tmpImageTop[index + 2] = capture.pixels[MirrorIndexY + 2];

        tmpImageSide[index + 0] = capture.pixels[MirrorIndexXY + 0];
        tmpImageSide[index + 1] = capture.pixels[MirrorIndexXY + 1];
        tmpImageSide[index + 2] = capture.pixels[MirrorIndexXY + 2];

        tmpImageOffset[index + 0] = capture.pixels[MirrorIndexOffset + 0];
        tmpImageOffset[index + 1] = capture.pixels[MirrorIndexOffset + 1];
        tmpImageOffset[index + 2] = capture.pixels[MirrorIndexOffset + 2];
      }
    }
    let length = height / NumStrip;
    for (let j = 0; j < NumStrip; j++) {
      for (let y = 0; y < length; y++) {
        let xPos = 0;
        for (let i = 0; i < pattern.length; i++) {
          for (let x = 0; x < pattern[i]; x++) {
            let yPos;
            yPos = y + length * j;
            let index = (x + xPos + yPos * width) * 4;
            if ((i + j) % 2 == 0) {
              capture.pixels[index + 0] = mode[index + 0];
              capture.pixels[index + 1] = mode[index + 1];
              capture.pixels[index + 2] = mode[index + 2];
              if (y < 3) {
                if (x < pattern[i] / 2) {
                  let Adj = y * 10 - (x % (pattern[i] / 2)) * 8;
                  capture.pixels[index + 0] = capture.pixels[index + 0] + Adj;
                  capture.pixels[index + 1] = capture.pixels[index + 1] + Adj;
                  capture.pixels[index + 2] = capture.pixels[index + 2] + Adj;
                } else {
                  let Adj = y * 10 - ((pattern[i] / 2) - x % (pattern[i] / 2)) * 8;
                  capture.pixels[index + 0] = capture.pixels[index + 0] + Adj;
                  capture.pixels[index + 1] = capture.pixels[index + 1] + Adj;
                  capture.pixels[index + 2] = capture.pixels[index + 2] + Adj;
                }
              }
              if (x < 2) {
                if (y < 10) {
                  let Adj = x * 10 - (y % 10) * length;
                  capture.pixels[index + 0] = capture.pixels[index + 0] + Adj;
                  capture.pixels[index + 1] = capture.pixels[index + 1] + Adj;
                  capture.pixels[index + 2] = capture.pixels[index + 2] + Adj;
                
                } else {
                  let Adj = x * 10 - (10 - y % 10) * length;
                  capture.pixels[index + 0] = capture.pixels[index + 0] + Adj;
                  capture.pixels[index + 1] = capture.pixels[index + 1] + Adj;
                  capture.pixels[index + 2] = capture.pixels[index + 2] + Adj;
                }
              }
            }
          }
          xPos = xPos + pattern[i];
        }
      }
    }
    capture.updatePixels();
    image(capture, 0, 0);
  } else {
    // do nothing
  }
}

function generatePattern() {
  randomPattern();
  NumStrip = random(Num);
  mode = random(style);
  randNum = random(Num2);
}

function randomPattern() {
  let pattern0 = [80, 80, 80, 80, 80, 80, 80, 80];
  let pattern1 = [10, 10, 10, 10, 10, 10, 10, 10, 80, 80, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 80, 80, 10, 10, 10, 10, 10, 10, 10, 10];
  let pattern2 = [320,320];
  let pattern3 = [10, 10, 10, 10, 40, 80, 80, 40, 10, 10, 10, 10, 10, 10, 10, 10, 40, 80, 80, 40, 10, 10, 10, 10];
  let pattern4 = [10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10, 10];

  let patternData = [pattern0, pattern1, pattern2, pattern3, pattern4]
  pattern = random(patternData);

}

function windowResized() {
  if(window.innerWidth < 640) {
    $(".center-sketch").css("left", `${-(w-window.innerWidth)/4}px`);
  } else {
    $(".center-sketch").css("left", `0`);
  }
}

function keyPressed() {
  if(key == 's'){
    save("ziyuzhang.png");
  }
  else if(key == 'r'){
    generatePattern();
  }
}

function touchMoved() {

  if(locked){
    // $(window).scrollTop(110);
    return false;
  } else {
    return true;
  }
}

$(document).ready(function(){

  if(window.innerWidth < 400) {
    $(".center-sketch").css("left", `${-(w-window.innerWidth)/4}px`);
  }

  $(".screen-lock").click(function(){
    $(window).scrollTop(120);
    $(".brush-buttons-toggler").toggle();
    $("#sketch").css("margin", "70px 0 10px 0")
    $(".fa-lock").toggle();
    $(".fa-lock-open").toggle();
    locked = !locked;
  })

  $(".play-pause").click(function(){
    $(".fa-pause").toggle();
    $(".fa-play").toggle();
    loop = !loop;
  })

  $("#breset").click(function(){
    generatePattern();
  })
})



