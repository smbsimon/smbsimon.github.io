var x, y;
var currentangle = 0;
var step = 25;
var angle = 2;

var thestring = 'A';
var numloops = 2;
var therules = [];
therules[0] = ['A', '-BF+AFA+FB-'];
therules[1] = ['B', '+AF-BFB-FA+'];

var whereinstring = 0;

function setup() {
  createCanvas(1800, 180);
  background(255);
  stroke(0, 0, 95, 95);

  x = 0;
  y = height-1;

  for (var i = 0; i < numloops; i++) {
    thestring = lindenmayer(thestring);
  }
}

function draw() {

  drawIt(thestring[whereinstring]);

  whereinstring++;
  if (whereinstring > thestring.length-1) whereinstring = 0;

}

function lindenmayer(s) {
  var outputstring = '';

  for (var i = 0; i < s.length; i++) {
    var ismatch = 0;
    for (var j = 0; j < therules.length; j++) {
      if (s[i] == therules[j][0])  {
        outputstring += therules[j][1];
        ismatch = 1;
        break;
      }
    }

    if (ismatch == 0) outputstring+= s[i];
  }

  return outputstring;
}

function drawIt(k) {

  if (k=='F') {
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    line(x, y, x1, y1);

    x = x1;
    y = y1;
  } else if (k == '+') {
    currentangle += angle;
  } else if (k == '-') {
    currentangle -= angle;
  }

  var r = random(0, 100);
  var g = random(0, 100);
  var b = random(0, 100);
  var a = random(0, 100);

  var radius = 0;
  radius += random(0, 10);
  radius += random(0, 10);
  radius += random(0, 10);
  radius = radius;

  fill(r, g, b, a);
  ellipse(x, y, radius, radius);
}
