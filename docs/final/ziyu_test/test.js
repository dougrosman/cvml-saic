
let w = 360;
let h = 640;

function setup() {
    let canvas = createCanvas(480, 120);
    canvas.parent("#sketch");
    var constraints = {
      video: {
        mandatory: {
          minWidth: 1280,
          minHeight: 720
        },
        optional: [{ maxFrameRate: 10 }]
      },
      audio: true
    };
    createCapture(constraints, function(stream) {
      console.log(stream);
    });
  }


function draw() {
    image(capture, 0, 0);
}
