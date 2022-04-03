var touchpad;
var spr;

function setup() { 
    createCanvas(600, 600);
    spr = createSprite(width / 2, height / 2, 40, 40);
    spr.shapeColor = color(255);
    touchpad = createSprite(200, 200);
    touchpad.shapeColor = (69)
}

function mouseDragged() {
    spr.position.x = mouseX;
    spr.position.y = mouseY;
}

function draw() {
    background(32);
    if(spr.overlap(touchpad));
        spr.shapeColor = color(707);
    drawSprites();
}

