let spr;
function setup() {
  createCanvas(600, 600);
  spr = createSprite(
    width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
}
function draw() {
  background(32);
  spr.velocity.x = (mouseX - spr.position.x) * 0.2;
  spr.velocity.y = (mouseY - spr.position.y) * 0.2;
  drawSprites();
}