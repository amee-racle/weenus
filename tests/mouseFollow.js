let spr;
function setup() {
  createCanvas(600, 600);
  spr = createSprite(
    width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
}
function draw() {
  background(50);
  spr.position.x = mouseX;
  spr.position.y = mouseY;
  drawSprites();
}