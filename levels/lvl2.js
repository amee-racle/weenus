let door;
let touchpad;
let doorLight;
let spr; //sprite to be moved 
let obstacles;
let beingDragged = false;
let doorUnlocked = false;

function sleep(ms) { // sleep function in ms
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() { 
    createCanvas(600, 600).parent("game")
    touchpad = createSprite(580, 530, 40, 40); // acts as a switch, when objects against it door is unlocked
    touchpad.shapeColor = color(188, 211, 206);

    spr = createSprite(16, 530, 40, 40);
    spr.shapeColor = color(255);

    obstacles = new Group();

    for(var i=0; i<4; i++) {
        ground1 = createSprite(300, 485, 600, 50); // set position and size of the ground
        ground1.shapeColor = color(125);
        obstacles.add(ground1);

        ground2 = createSprite(300, 575, 600, 50); 
        ground2.shapeColor = color(125);
        obstacles.add(ground2);
    }
    
    door = createSprite(300, 100, 150, 200); // set position, size, colour of door at far end 
    door.shapeColor = 125;

    doorLight = createSprite(390, 90, 20, 20); // 'light' to signal whether door unlocked
    doorLight.shapeColor = color(100);
    
    spr.onMousePressed = function() {
        // only allow it to be dragged if mouse is clicking it
        beingDragged = true;
    }
    spr.onMouseReleased = function() {
        beingDragged = false;
    }

    doorLight.onMousePressed = async function() {
        if(doorUnlocked === true) {
            document.getElementById("solved").innerHTML = "Level 2 complete! Proceeding to level 3.";
            await sleep(2000);
            // redirect to level 3
            location.href = "lvl3.html";
        } else {
            document.getElementById("solved").innerHTML = "You need to solve the puzzle before proceeding!";
            await sleep(2000);
            document.getElementById("solved").innerHTML = "&nbsp";
        }
    }
}

function draw() {
    // update text to show mouse position
    // document.getElementById("mousepos").innerHTML = `X: ${Math.round(mouseX)}, Y: ${Math.round(mouseY)}`;
    background(32);
    if(spr.overlap(touchpad)) {
        // when sprites are touching, change colour of the dragged one
        spr.shapeColor = color(79, 240, 79);
        // when sprites are touching, door light on and unlocked so player can proceed
        doorLight.shapeColor = color(79, 240, 79);
        doorUnlocked = true;
    } else {
        spr.shapeColor = color(255);
        doorUnlocked = false;
        doorLight.shapeColor = color(100);
    }
    spr.collide(obstacles);
    drawSprites();
}

//preventing square from being moved outside the canvas
function mouseDragged() {
    if(beingDragged) {
        spr.position.x = Math.round(mouseX);
        // spr.position.y = Math.round(mouseY);

        // left/top
        if(spr.position.x < 0) spr.position.x = 0;
        if(spr.position.y < 0) spr.position.y = 0;
        // right/bottom
        if(spr.position.y > height - spr.scale) spr.position.y = height - spr.scale;
        if(spr.position.x > width - spr.scale) spr.position.x = width - spr.scale;

        // spr.velocity.x = (mouseX-spr.position.x)/10;
        // spr.velocity.y = (mouseY-spr.position.y)/10;
    }
}
