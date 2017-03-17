/* Global Variables */

/* Background Variables */
var backgroundColor = '#0a0619'

/* BASELINE VARIABLES */
var baselineColor = '#ff0000'
var baselineWeight = 3
var baselineShouldRender = false

/* PRIMATIVE VARIABLES */
var primativeStrokeColor = '#0a0619'
var primativeStrokeOpacity = 100
var primativeFillColor = '#0a0619'
var primativeFillOpacity = 85
var rotation = 5,
    rotationMin = -45,
    rotationMax = 45,
    rotationStep = 0.1

var scaling = 3.0,
    scalingMin = 0.1,
    scalingMax = 10.0,
    scalingStep = 0.1
var count = 50,
    countMin = 1,
    countMax = 360

var step = 20,
    stepMin = 0,
    stepMax = 300


var primativeStrokeWeight = 1.0,
    primativeStrokeWeightMin = 1.0,
    primativeStrokeWeightMax = 10.0


var gui;
var guiVisible = true

function setup() {

  createCanvas(window.innerWidth, window.innerHeight)

  angleMode(DEGREES)
  blendMode(ADD)

  gui = createGui('Stripe Pattern')
  gui.addGlobals(
    'backgroundColor',
    // 'baselineShouldRender',
    // 'baselineColor',
    // 'baselineWeight',
    'primativeStrokeColor',
    'primativeStrokeOpacity',
    'primativeStrokeWeight',
    'primativeFillColor',
    'primativeFillOpacity',
    'scaling',
    'rotation',
    'count',
    'step'
  )

  noLoop()
}

function draw() {
  clear()
  background(backgroundColor)
  push()
    translate(width * 0.5, height * 0.5)
    baseline()
    stripePattern()
  pop()

}

function baseline() {
  if(baselineShouldRender) {
    stroke(baselineColor)
    strokeWeight(baselineWeight)
    line(-width * 0.5,0, width,0)
  }
}

function stripePattern() {
  // Set stroke color & alpha
  var sc = color(primativeStrokeColor)
  sc._array[3] = map(primativeStrokeOpacity, 0, 100, 0, 1)
  stroke(sc)
  strokeWeight(primativeStrokeWeight)

  // Set fill color & alpha
  var fc = color(primativeFillColor)
  fc._array[3] = map(primativeFillOpacity, 0, 100, 0, 1)
  fill(fc)


  for(let i = -count; i <= count; i++) {
    push()
      translate(i*step, 0)
      scale(scaling, scaling)
      rotate(i * rotation)
      //line(0, -100, 0, 100)
      triangle(0, 0, -50, 100, 50, 100)
    pop()
  }
}

function keyPressed() {
  switch(key) {
    case 'p': {
      guiVisible = !guiVisible
      guiVisible ? gui.show() : gui.hide()
      break
    }
  }
}
