let loop = true;

let w = 640;
let h = 480;

function setup() {
  
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch");
  background(255, 0, 0);
  // rectMode(CENTER);
}


function draw() {
  // fill(0, 0, 255);
  // rect(w/2, h/2, 640, 480);
  fill(255, 0, 255);
  rect(w/4, h/2, 320, 240);

}

function windowResized() {
  if(window.innerWidth < 640) {
    $(".ziyu").css("left", `${-(640-window.innerWidth)/2}px`);
  } else {
    $(".ziyu").css("left", `0`);
  }
}



$(document).ready(function(){


  if(window.innerWidth < 400) {
    $(".ziyu").css("left", `${-(640-window.innerWidth)/2}px`);
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



