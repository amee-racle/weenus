let door;
let doorLight;
let doorUnlocked = true;

function sleep(ms) { // sleep function in ms
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() {
    createCanvas(600, 600).parent("game");
    door = createSprite(300, 100, 150, 200); // set position, size, colour of door at far end 
    door.shapeColor = 125;
    doorLight = createSprite(390, 90, 20, 20); // 'light' to signal whether door unlocked
    doorLight.shapeColor = color(79, 240, 79);

    doorLight.onMousePressed = async function() { // allows sleep function
        if(doorUnlocked === true) {
            document.getElementById("solved").innerHTML = "Level 1 complete! Proceeding to level 2.";
            await sleep(2000);
            // redirect to level 2
            location.href = "lvl2.html";
        } else {
            document.getElementById("solved").innerHTML = "This level is solved by default. How did you do this";
        }
    }
}

function draw() {
    background(32);
    drawSprites();
}