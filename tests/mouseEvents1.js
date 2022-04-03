let spr1;
let spr2;
function setup() {
  createCanvas(600, 600);

  spr1 = createSprite(width/2, height/3,
    100, 100);
  spr1.shapeColor = color(255);
  spr1.onMouseOver = function() {
    this.scale = 2;
  }
  spr1.onMouseOut = function() {
    this.scale = 1;
  }

}
function draw() {
  background(32);
  drawSprites();
}
