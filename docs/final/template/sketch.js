let brush1;
let brush2;
let brush3;
let brush4;
let brush5;

let brush1_draw = false;
let brush2_draw = false;
let brush3_draw = false;
let brush4_draw = false;
let brush5_draw = false;

let launch = true;

let brush1_sound;
let brush2_sound;
let brush3_sound;
let brush4_sound;
let brush5_sound;

let x = 0;
let y = 0;
let easing = 0.05;

let locked = false;

function preload(){
  brush1 = loadImage("images/ouroboros_brush1.png");
  brush2 = loadImage("images/ouroboros_brush2.png");
  brush3 = loadImage("images/ouroboros_brush3.png");
  brush4 = loadImage("images/ouroboros_brush4.png");
  brush5 = loadImage("images/ouroboros_brush5.png");
  
 soundFormats('mp3', 'ogg', 'wav');
  brush1_sound = loadSound('sounds/brush1_sound.wav');
  brush2_sound = loadSound('sounds/brush2_sound.wav');
  brush3_sound = loadSound('sounds/brush3_sound.wav');
  brush4_sound = loadSound('sounds/brush4_sound.mp3');
  brush5_sound = loadSound('sounds/brush5_sound.wav');
}

let ratio = 1.15;

function setup() {
  let canvas = createCanvas(windowWidth/ratio, windowHeight/(ratio*ratio));
  canvas.parent("#sketch");
}

function windowResized() {
  resizeCanvas(windowWidth/ratio, windowHeight/(ratio*ratio));
}

function draw() {
  //background(220);
  imageMode(CENTER);
  
  if(launch){
    if(mouseX > 0) {
      brush1_draw = true;
      //brush1_sound = true;
      launch = false;
    }
  }
  
  let targetX = mouseX;
  let dx = targetX - x; 
  x += dx * easing;
  
  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
  
  //brush1
  if(brush1_draw) {
    image(brush1, x, y, 80, 80);
  }
  
  //brush2
  if(brush2_draw) {
    image(brush2, x, y, 50, 50);
  }
  
  //brush3
  if(brush3_draw) {
    image(brush3, x, y, 100, 100);
  }
  
  //brush4
  if(brush4_draw) {
    image(brush4, x, y, 30, 30);
  }
  
  //brush5
  if(brush5_draw) {
    image(brush5, x, y, 120, 120);
  }
}

function keyPressed() {
  
  if(key == '1') {
    brush1_draw = true;
    brush2_draw = false;
    brush3_draw = false;
    brush4_draw = false;
    brush5_draw = false;
    $(".fa-volume-up").show();
    $(".fa-volume-mute").hide();
    brush1_sound.play();
  
  }
  
  if(key == '2') {
    brush1_draw = false;
    brush2_draw = true;
    brush3_draw = false;
    brush4_draw = false;
    brush5_draw = false;
    $(".fa-volume-up").show();
    $(".fa-volume-mute").hide();
    brush2_sound.play();
  }
  
  if(key == '3') {
    brush1_draw = false;
    brush2_draw = false;
    brush3_draw = true;
    brush4_draw = false;
    brush5_draw = false;
    $(".fa-volume-up").show();
    $(".fa-volume-mute").hide();
    brush3_sound.play();
  }
  
  if(key == '4') {
    brush1_draw = false;
    brush2_draw = false;
    brush3_draw = false;
    brush4_draw = true;
    brush5_draw = false;
    $(".fa-volume-up").show();
    $(".fa-volume-mute").hide();
    brush4_sound.play();
  }
  
  if(key == '5') {
    
    brush1_draw = false;
    brush2_draw = false;
    brush3_draw = false;
    brush4_draw = false;
    brush5_draw = true;
    $(".fa-volume-up").show();
    $(".fa-volume-mute").hide();
    brush5_sound.play();
  }

  if(key == 's'){
    save("ouroboros.png");
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

  $(".mute").click(function(){
    $(".fa-volume-up").toggle();
    $(".fa-volume-mute").toggle();
    brush1_sound.stop();
    brush2_sound.stop();
    brush3_sound.stop();
    brush4_sound.stop();
    brush5_sound.stop();
  })

  $(".screen-lock").click(function(){
    $(window).scrollTop(120);
    $(".brush-buttons-toggler").toggle();
    $("#sketch").css("margin", "70px 0 10px 0")
    $(".fa-lock").toggle();
    $(".fa-lock-open").toggle();
    locked = !locked;

  })

  $("#b1").click(function(){
    $(".brush-btn").css("color", "#111");
    $(this).css("color", "salmon");
    
    brush1_draw = true;
    brush2_draw = false;
    brush3_draw = false;
    brush4_draw = false;
    brush5_draw = false;
    $(".fa-volume-up").show();
    $(".fa-volume-mute").hide();
    brush1_sound.play();
  })

  $("#b2").click(function(){
    $(".brush-btn").css("color", "#111");
    $(this).css("color", "salmon");
    
    brush1_draw = false;
    brush2_draw = true;
    brush3_draw = false;
    brush4_draw = false;
    brush5_draw = false;
    $(".fa-volume-up").show();
    $(".fa-volume-mute").hide();
    brush1_sound.play();
  })

  $("#b3").click(function(){
    $(".brush-btn").css("color", "#111");
    $(this).css("color", "salmon");
    
    brush1_draw = false;
    brush2_draw = false;
    brush3_draw = true;
    brush4_draw = false;
    brush5_draw = false;
    $(".fa-volume-up").show();
    $(".fa-volume-mute").hide();
    brush1_sound.play();
  })

  $("#b4").click(function(){
    $(".brush-btn").css("color", "#111");
    $(this).css("color", "salmon");
    
    brush1_draw = false;
    brush2_draw = false;
    brush3_draw = false;
    brush4_draw = true;
    brush5_draw = false;
    $(".fa-volume-up").show();
    $(".fa-volume-mute").hide();
    brush1_sound.play();
  })

  $("#b5").click(function(){
    $(".brush-btn").css("color", "#111");
    $(this).css("color", "salmon");
    
    brush1_draw = false;
    brush2_draw = false;
    brush3_draw = false;
    brush4_draw = false;
    brush5_draw = true;
    $(".fa-volume-up").show();
    $(".fa-volume-mute").hide();
    brush1_sound.play();
  })

  $("#bsave").click(function(){
    save("ouroboros.png");
  })

})



