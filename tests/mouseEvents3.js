let spr; //creating sprite and canvas
function setup() {
  createCanvas(600, 600);
  spr = createSprite(
    width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
}
function mouseDragged() { //function to allow position 
  spr.position.x = mouseX; //of sprite to follow mouse
  spr.position.y = mouseY;  //when mouse is dragged
}
function draw() { //draws sprites and colours bg
  background(32);
  drawSprites();
}

//creating boundary collision
if (spr.position.x < 0) {
  spr.position.x = spr.position.x - 5;
}