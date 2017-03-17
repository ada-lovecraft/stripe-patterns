/** GUI Globals **/
/* Colors */
var backgroundColor = '#ffffff',
    primativeColor = '#000000',
    baselineColor = '#ff0000';

/* Stroke Weights */
var baselineWeight = 3,
    baselineWeightMin = 1,
    baselineWeightMax = 10;
var primativeWeight = 1,
    primativeWeightMin = 1,
    primativeWeightMax = 10;

/* Modifiers */
var rotation = 0.1,
    rotationMin = 0,
    rotationMax = 2 * Math.PI,
    rotationStep = 0.05

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
  gui = createGui('Stripe Patterns')
  gui.addGlobals(
    'backgroundColor',
    'renderBaseline',
    'baselineColor',
    'baselineWeight',
    'primativeColor',
    'primativeWeight',
    'rotation',
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
  stroke(primativeColor)
  strokeWeight(primativeWeight)
  noFill()

  push()
    translate(width * 0.5, height * 0.5)
  for(let i = -50; i < 50; i++) {
    push()
      translate(i * 20, 0)
      rotate(i * rotation)
      scale(scaleX, scaleX)
      triangle(0, 0, -50, 100, 50, 100)
    pop()
  }
  pop()
}

function draw() {
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
