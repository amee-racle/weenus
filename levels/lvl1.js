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

    doorLight.onMousePressed = function() {
        if(doorUnlocked === true) {
            (async() => { // to allow sleep function
                document.getElementById("solved").innerHTML = "Level 1 complete! Proceeding to level 2.";
                await sleep(2000);
                // redirect to level 2
                location.href = "lvl2.html";
            })();
        } else {
            // this level is solved by default so nothing needs to go here
        }

    }
}

function draw() {
    background(32);
    drawSprites();
}