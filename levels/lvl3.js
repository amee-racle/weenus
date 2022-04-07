let door;
let doorLight;
let doorUnlocked = false;
let colours = [];
let sq1;
let sq2;
let sq3;

function sleep(ms) { // sleep function in ms
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() {
    createCanvas(600, 600).parent("game");
    door = createSprite(300, 100, 150, 200);
    door.shapeColor = 125;
    doorLight = createSprite(390, 90, 20, 20);
    doorLight.shapeColor = color(100);

    sq1 = createSprite(300, 450, 40, 40);

    doorLight.onMousePressed = async function() {
        if(doorUnlocked === true) {
            document.getElementById("solved").innerHTML = "Level 3 complete! Proceeding to the next dimension.";
        } else {
            document.getElementById("solved").innerHTML = "You need to solve the puzzle before proceeding!";
            await sleep(2000);
            document.getElementById("solved").innerHTML = "&nbsp";
        }
    }
}

function draw() {
    if(doorUnlocked === true) {
        doorLight.shapeColor = color(79, 240, 79);
    } else {
        doorLight.shapeColor = color(100);
    }
    background(32);
    drawSprites();
}