let touchpad;
let spr;
let beingDragged = false;

function setup() { 
    createCanvas(600, 600);
    touchpad = createSprite(200, 200);
    touchpad.shapeColor = color(69);
    spr = createSprite(width / 2, height / 2, 40, 40);
    spr.shapeColor = color(255);

    
    spr.onMousePressed = function() {
        // only allow it to be dragged if mouse is clicking it
        beingDragged = true;
    }
    spr.onMouseReleased = function() {
        beingDragged = false;
    }
}

function draw() {
    // update text to show mouse position
    document.getElementById("mousepos").innerHTML = `X: ${Math.round(mouseX)}, Y: ${Math.round(mouseY)}`;

    background(32);
    if(spr.overlap(touchpad)) {
        // when sprites are touching, change colour of dragged one
        spr.shapeColor = color(12);
    } else {
        spr.shapeColor = color(255);
    }
    drawSprites();
}

//preventing square from being moved outside the canvas
function mouseDragged() {
    if(beingDragged) {
        spr.position.x = Math.round(mouseX);
        spr.position.y = Math.round(mouseY);
        
        // left/top
        if(spr.position.x < 0) spr.position.x = 0;
        if(spr.position.y < 0) spr.position.y = 0;
        // right/bottom
        if(spr.position.y > height - spr.scale) spr.position.y = height - spr.scale;
        if(spr.position.x > width - spr.scale) spr.position.x = width - spr.scale;
    }
}
