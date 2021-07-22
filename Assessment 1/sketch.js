function setup() {
  createCanvas(400, 400);
  frameRate(60)
}

function draw() {
  background(100, 200, 250);
  ellipse(mouseX, mouseY, 30, 30);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  }else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}