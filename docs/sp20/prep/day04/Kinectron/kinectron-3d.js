var kinectron = null;



function preload() {

}


function setup() {
  createCanvas(640, 480, WEBGL);
  kinectron = new Kinectron('192.168.0.24');
  kinectron.makeConnection();
  kinectron.startTrackedBodies(trackBody);
  //set the callback function name to be called when stuff comes from kinect
}

function draw() {
}

function trackBody(body) {

  var val;
  var whichJoint = kinectron.HANDRIGHT;
  val = body.joints[whichJoint].cameraX;
  var jointX = map(val, -1, 1, 0, width);
  val = body.joints[whichJoint].cameraY;
  var jointY = map(val, -1, 1, height, 0); //height numbers bigger at the bottom
  val = body.joints[whichJoint].cameraZ;
  var jointZ = map(val, 0, 3, 800, 0);
  //println( "x" + round(jointX)  + "   y" + round(jointY) + "   z" +  round(jointZ));
  //in 3D land you use translate to move to a positon
  translate(jointX - width / 2, jointY - height / 2, jointZ);

  val = body.joints[whichJoint].orientationX;
  var jointRotX = map(val, 0, 1, 0, 2 * PI);
  val = body.joints[whichJoint].orientationY;
  var jointRotY = map(val, -1, 1, 0, 2 * PI); //height numbers bigger at the bottom
  val = body.joints[whichJoint].orientationZ;
  var jointRotZ = map(val, -1, 1, 0, 2 * PI);
  //	println( "x" + jointRotX  + "   y" + jointRotY + "   z" +  jointRotZ);
  rotateX(jointRotZ);
  rotateY(jointRotX);
  rotateZ(jointRotY);
  //The parameters for Box are about size rather than location.
  //location is taken care of by translate
  box(50, 100, 50);
}

