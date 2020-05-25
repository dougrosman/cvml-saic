let loop = true;
let locked = false;
//多少个视频
let numBalls = 12;
//弹簧弹性（碰撞时）
let spring = 0.05;
//重量
let gravity = 0.01;
//摩擦力
let friction = -0.9;
//变小或者变大的速度
let shrinkage = 2;
let balls = [];

//c是我们的画布
let c;
//内存区
let tmpData = [];
let tmpImage = [];
let oldFrame;
//画布的大小
let w = 640;
let h = 480;
//初始的图案
let pattern = [80, 80, 40, 40, 20, 20, 20, 20, 20, 20, 20, 20, 40, 40, 80, 80];

if(window.orientation == 0) {
  alert("This sketch is best experienced in Landscape mode. Rotate your device to landscape mode and refresh the page.")
}

function setup() {
  
  phobe = createVideo('video/ziyu4.mp4');
  phobe.loop();
  phobe.hide();

  Baoqi = createVideo('video/ziyu1.mov');
  Baoqi.loop();
  Baoqi.hide();

  Ash = createVideo('video/ziyu2.mov');
  Ash.loop();
  Ash.hide();

  Cecilia = createVideo('video/ziyu3.mov');
  Cecilia.loop();
  Cecilia.hide();

  Ning = createVideo('video/ziyu5.mov');
  Ning.loop();
  Ning.hide();

  Sarah = createVideo('video/ziyu6.mov');
  Sarah.loop();
  Sarah.hide();

  Yao = createVideo('video/ziyu7.mov');
  Yao.loop();
  Yao.hide();

  James = createVideo('video/ziyu8.mov');
  James.loop();
  James.hide();

  Qian = createVideo('video/ziyu9.mov');
  Qian.loop();
  Qian.hide();

  Xinyang = createVideo('video/ziyu10.mov');
  Xinyang.loop();
  Xinyang.hide();

  Yueying = createVideo('video/ziyu11.mov');
  Yueying.loop();
  Yueying.hide();

  let canvas = createCanvas(640, 480);
  canvas.parent("#sketch");
  let constraints = {audio:false,video:{width:{min:320,ideal:w,max:1920},height:{min:240,ideal:h,max:1080},frameRate: {min: 1.0, max: 60.0}}};
  capture = createCapture(constraints);
  capture.hide();
  randomPattern();

  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(w-10),
      random(h-10),
      random(80, 200),
      i,
      balls
    );
  }
  noStroke();
  
  fill(255, 204);
}


function draw() {
    if(loop){
        background(0);
        // image(motion);
        //效果
        effect();
        
        //给每一个位置的视频实时更新
        balls.forEach(ball => {
        ball.collide();
        ball.move();
        });
        
        //每一个class的object应该播放哪一个视频
        balls[0].display(phobe);
        balls[1].display(Baoqi);
        balls[2].display(Ash);
        balls[3].display(Cecilia);
        balls[4].display(Ning);
        balls[5].display(Sarah);
        balls[6].display(Yao);
        balls[7].display(capture);
        balls[8].display(James);
        balls[9].display(Qian);
        balls[10].display(Xinyang);
        balls[11].display(Yueying);
    }
}
    
    
    //不同的图案具体是什么样子的
    function randomPattern() {
        //80代表我们的格子是多长一段，比如80，80，40，就代表80个pixel是一段，跟着80个pixel，跟着40个pixel等等等等
        let pattern0 = [80, 80, 40, 40, 20, 20, 20, 20, 20, 20, 20, 20, 40, 40, 80, 80];
        let pattern1 = [160, 80, 40, 20, 20, 20, 20, 40, 80, 160];
        let pattern2 = [80, 80, 80, 80, 80, 80, 80, 80];
        let pattern3 = [80, 80, 80, 40, 40, 40, 40, 80, 80, 80];
        let pattern4 = [40, 40, 80, 80, 40, 40, 40, 40, 80, 80, 40, 40];
        let pattern5 = [10, 10, 10, 10, 40, 80, 80, 40, 10, 10, 10, 10, 10, 10, 10, 10, 40, 80, 80, 40, 10, 10, 10, 10];
        let pattern6 = [10, 10, 10, 10, 10, 10, 10, 10, 80, 80, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 80, 80, 10, 10, 10, 10, 10, 10, 10, 10];
        let pattern7 = [10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 10, 10, 10, 10, 10, 10, 10, 10];
        
        let patternData = [pattern0, pattern1, pattern2, pattern3, pattern4, pattern5, pattern6, pattern7]
        //选择一个随机的编织图案
        pattern = random(patternData);
    
    }
    
    
    //具体的图案效果公式
    function effect() {
        //提取像素数据
        capture.loadPixels();
        //镜像整张画布的像素，之后存储在一个内存里
        //内存叫做tmpImage
        //镜像公式是 let FlipX = x + (width / 2 - x) * 2 - 1，这样子0对应最后一个，1对应倒数第二个等等等等
        for (let y = 0; y < w; y++) {
            for (let x = 0; x < h / 2; x++) {
                let FlipX = x + (w / 2 - x) * 2 - 1
                let index = (x + y * w) * 4;
                let MirrorIndex = (FlipX + y * w) * 4;
                tmpImage[index + 0] = capture.pixels[MirrorIndex + 0];
                tmpImage[index + 1] = capture.pixels[MirrorIndex + 1];
                tmpImage[index + 2] = capture.pixels[MirrorIndex + 2];
                // tmpImage[index + 3] = capture.pixels[MirrorIndex + 3];
                tmpImage[MirrorIndex + 0] = capture.pixels[index + 0];
                tmpImage[MirrorIndex + 1] = capture.pixels[index + 1];
                tmpImage[MirrorIndex + 2] = capture.pixels[index + 2];
                // tmpImage[MirrorIndex + 3] = capture.pixels[index + 3];
            }
        }
        
        //什么时候播放什么纹路的具体计算方法
        //24*20=480，j有24个，y有20个，就是把整个画布的高度变成20个24pixel高的小条条
        for (let j = 0; j < 24; j++) {
            for (let y = 0; y < 20; y++) {
                let xPos = 0;
                //在每一条里面，根据我们随机选出的pattern规则，确定这一个小条条里面应该分成多少个小格子
                for (let i = 0; i < pattern.length; i++) {
                    for (let x = 0; x < pattern[i]; x++) {
                        let yPos;
                        yPos = y + 20 * j;
                        let index = (x + xPos + yPos * w) * 4;
                        //如果是单数小格子的话，就用不是镜像的，双数的话就用镜像的，etc
                        if ((i + j) % 2 == 0) {
                        capture.pixels[index + 0] = tmpImage[index + 0];
                        capture.pixels[index + 1] = tmpImage[index + 1];
                        capture.pixels[index + 2] = tmpImage[index + 2];
                        //编制阴影的创造
                        //如果y小于三，变黑
                        if (y < 3) {
                            if (x < pattern[i] / 2) {
                            let Adj = y * 10 - (x % (pattern[i] / 2)) * 8;
                            capture.pixels[index + 0] = capture.pixels[index + 0] + Adj;
                            capture.pixels[index + 1] = capture.pixels[index + 1] + Adj;
                            capture.pixels[index + 2] = capture.pixels[index + 2] + Adj;
                            // capture.pixels[index + 3] = capture.pixels[index + 3];
                            } else {
                            let Adj = y * 10 - ((pattern[i] / 2) - x % (pattern[i] / 2)) * 8;
                            capture.pixels[index + 0] = capture.pixels[index + 0] + Adj;
                            capture.pixels[index + 1] = capture.pixels[index + 1] + Adj;
                            capture.pixels[index + 2] = capture.pixels[index + 2] + Adj;
                            // capture.pixels[index + 3] = capture.pixels[index + 3];
                            }
                        }
                        //如果x小于二，变黑
                        if (x < 2) {
                            if (y < 10) {
                            let Adj = x * 10 - (y % 10) * 20;
                            capture.pixels[index + 0] = capture.pixels[index + 0] + Adj;
                            capture.pixels[index + 1] = capture.pixels[index + 1] + Adj;
                            capture.pixels[index + 2] = capture.pixels[index + 2] + Adj;
                            // capture.pixels[index + 3] = capture.pixels[index + 3];
                            } else {
                            let Adj = x * 10 - (10 - y % 10) * 20;
                            capture.pixels[index + 0] = capture.pixels[index + 0] + Adj;
                            capture.pixels[index + 1] = capture.pixels[index + 1] + Adj;
                            capture.pixels[index + 2] = capture.pixels[index + 2] + Adj;
                            // capture.pixels[index + 3] = capture.pixels[index + 3];
                            }
                        }
                    }
                }
                xPos = xPos + pattern[i];
                }
            }
        }
        //更新pixel
        capture.updatePixels();
  }
  
  //每个动态移动的建立
  class Ball {
    //初始下，x和y的位置，速度和图像大小
    constructor(xin, yin, din, idin, oin) {
      this.x = xin;
      this.y = yin;
      this.vx = 0;
      this.vy = 0;
      this.diameter = din;
      this.id = idin;
      this.others = oin;
      this.shrink = random(-1, 1);
    }
  
    //如果相撞的话，更具不同角度，回弹不同的力度
    collide() {
      for (let i = this.id + 1; i < numBalls; i++) {
        let dx = this.others[i].x - this.x;
        let dy = this.others[i].y - this.y;
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      
        if (distance < minDist) {
          
          let angle = atan2(dy, dx);
          let targetX = this.x + cos(angle) * minDist;
          let targetY = this.y + sin(angle) * minDist;
          let ax = (targetX - this.others[i].x) * spring;
          let ay = (targetY - this.others[i].y) * spring;
          this.vx -= ax;
          this.vy -= ay;
          this.others[i].vx += ax;
          this.others[i].vy += ay;
        }
      }
    }
  

    move() {
      //重力
      this.vy += gravity;
      //x和y的移动
      this.x += this.vx / 1000;
      this.y += this.vy / 1000;
  
      //如果图像大于200，变小
      if (this.diameter > 200) {
        if (this.shrink > 0) {
          this.shrink = -1 * this.shrink;
        }
      }
      //如果图像小于20，变大
      if (this.diameter < 20) {
        if (this.shrink < 0) {
          this.shrink = -1 * this.shrink;
        }
      }
      //更新新的大小数据
      this.diameter += this.shrink;
      
      //如果碰到的墙壁，回弹，但是会损失一部分能力（10%）
      if (this.x + this.diameter / 2 > w) {
        this.x = w - this.diameter / 2;
        this.vx *= friction;
      } else if (this.x - this.diameter / 2 < 0) {
        this.x = this.diameter / 2;
        this.vx *= friction;
      }
      if (this.y + this.diameter / 2 > h) {
        this.y = h - this.diameter / 2;
        this.vy *= friction;
      } else if (this.y - this.diameter / 2 < 0) {
        this.y = this.diameter / 2;
        this.vy *= friction;
      }
    }
    
    //播放
    display(a) {
      image(a, constrain(this.x, this.diameter, w-this.diameter), constrain(this.y, this.diameter*0.6, h-this.diameter*0.6), this.diameter, this.diameter * 0.6);
    }
  }

function windowResized() {
  if(window.innerWidth < w && (typeof(window.orientation)+"" == "undefined")) {
    $(".center-sketch").css("left", `${-Math.abs((w-window.innerWidth)/2)}px`);
  } else {
    $(".center-sketch").css("left", `unset`);
  }
}

function keyPressed() {
  if(key == 's'){
    save("ziyuzhang.png");
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



