let spr1;
function setup() {
  createCanvas(600, 600);
  spr1 = createSprite(width/2, height*0.67,
    100, 100);
  spr1.shapeColor = color(0);
  spr1.onMousePressed = function() {
    this.shapeColor = color(128);
  }
  spr1.onMouseReleased = function() {
    this.shapeColor = color(0);
  }
}
function draw() {
    background(32);
    drawSprites();
  }

