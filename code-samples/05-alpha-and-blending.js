/** GUI Globals **/
/* Colors */
var backgroundColor = '#000000',
    primativeColor = '#ffffff',
    baselineColor = '#ff0000';

var primativeAlpha = 20,
    primativeAlphaMin = 0,
    primativeAlphaMax = 100

/* Stroke Weights */
var baselineWeight = 3,
    baselineWeightMin = 1,
    baselineWeightMax = 10;
var primativeWeight = 1,
    primativeWeightMin = 1,
    primativeWeightMax = 10;

/* Modifiers */
var countX = 50,
    countXMin = 0,
    countXMax = 200

var stepX = 20,
    stepXMin = 0,
    stepXMax = 200

var twistX = 5,
    twistXMin = -45,
    twistXMax = 45,
    twistXStep = 0.000001

  var scaleX = 6.0,
      scaleXMin = 0,
      scaleXMax = 10.0,
      scaleXStep = 0.1




/** Toggles **/
var renderBaseline = true

var guiVisible = true

var gui;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  blendMode(ADD)
  angleMode(DEGREES)
  gui = createGui('Stripe Patterns')
  gui.addGlobals(
    'backgroundColor',
    'renderBaseline',
    'baselineColor',
    'baselineWeight',
    'primativeColor',
    'primativeAlpha',
    'primativeWeight',
    'countX',
    'stepX',
    'twistX',
    'scaleX')
  noLoop()
}

function baseLine() {
  if(renderBaseline) {
    strokeWeight(baselineWeight)
    stroke(baselineColor)
    line(0, height * 0.5, width, height * 0.5)
  }
}


function stripePattern() {

  console.log('primativeColor', primativeColor)
  var c = color(primativeColor)
  c._array[3] = map(primativeAlpha,0, 100,  0, 1)
  console.log('c:', c)
  stroke(c)
  strokeWeight(primativeWeight)
  noFill()

  push()
    translate(width * 0.5, height * 0.5)
  for(let i = -countX; i <= countX; i++) {
    push()
      translate(i * stepX, 0)
      rotate(i * twistX)
      scale(scaleX, scaleX)
      triangle(0, 0, -50, 100, 50, 100)
    pop()
  }
  pop()
}

function draw() {
  clear()
  background(backgroundColor)
  stripePattern()
  baseLine()

}

function keyPressed() {
  switch(key) {
    // type [F1] to hide / show the GUI
    case 'p':
      guiVisible = !guiVisible;
      guiVisible ? gui.show() : gui.hide();
      break;
  }
}
