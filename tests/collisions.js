var obstacles;
var spr;

function setup() { 
    createCanvas(600, 600);
    spr = createSprite(width / 2, height / 2, 40, 40);
    spr.shapeColor = color(255);
    obstacles = new Group();

    for(var i=0; i<4; i++) //to be commented (Idrk what this line does)
  {
    var box = createSprite(200, 200);
    obstacles.add(box);
  }
}

function mouseDragged() {
    spr.position.x = mouseX;
    spr.position.y = mouseY;
}

function draw() {
    background(32);
    spr.collide(obstacles);

    drawSprites();
}