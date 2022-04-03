let spr;
function setup() {
  createCanvas(600, 600);
  spr = createSprite(width/2, height/2,
    40, 40);
  spr.shapeColor = color(255);
  spr.velocity.y = 0;
}
function draw() {
  background(50);
  if (spr.position.y >= height) {
    spr.velocity.y *= -1;
    // set to height to prevent "tunneling"
    spr.position.y = height;
  }
  // constant downward speed
  // (i.e., gravity)
  spr.addSpeed(0.35, 90);
  drawSprites();
}
function mousePressed() {
  spr.position.y = mouseY;
}