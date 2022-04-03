function setup() { 
    createCanvas(600, 600);
    spr = createSprite(width / 2, height / 2, 40, 40);
    spr.shapeColor = color(255);
}

function draw() {
    background(32);
    // creates button for menu
    const button = createImg("img/level1button.png", "level 1");
    button.position(250, 250);
    // button.mousePressed(); // when mouse is pressed set up the level (I am just using 
    button.size(100, 100); // mousedrag+mousefollow as an example, not a completed level)
    if(button.mousePressed)
    mouseDragged();
    drawSprites()
}

function mouseDragged() { // function to allow position 
    spr.position.x = mouseX; // of sprite to follow mouse
    spr.position.y = mouseY;  // when mouse is dragged--------------------------------------------------------------------
}