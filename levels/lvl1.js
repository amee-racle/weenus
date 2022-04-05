let door;
let doorLight;
let doorUnlocked = true;

function setup() {
    createCanvas(600, 600);
    door = createSprite(300, 100, 150, 200); // set position, size, colour of door at far end 
    door.shapeColor = 125;
    doorLight = createSprite(390, 90, 20, 20); // 'light' to signal whether door unlocked
    doorLight.shapeColor = color(79, 240, 79);

    doorLight.onMousePressed = function() {
        console.log('i have been click')
        if(doorUnlocked === true) {
            alert("Level complete!");
        } else {
            alert("Solve the puzzle before trying to open the door.");
        }

    }
}

function draw() {
    background(32);
    drawSprites();
}