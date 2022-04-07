let door;
let doorLight;
let doorUnlocked = false;
let colours;
let squares;
let sq1;
let sq2;
let sq3;

function sleep(ms) { // sleep function in ms
    return new Promise(resolve => setTimeout(resolve, ms));
}
function randInt(min, max) { // function for random integer
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function setup() {
    createCanvas(600, 600).parent("game");
    door = createSprite(300, 100, 150, 200);
    door.shapeColor = 125;
    doorLight = createSprite(390, 90, 20, 20);
    doorLight.shapeColor = color(100);

    // define colours
    colours = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255), color(255, 255, 0), color(0, 255, 255), color(255, 0, 255)];
    colNames = ['red', 'green', 'blue', 'yellow', 'cyan', 'magenta']
    squares = new Group();
    // choose a random colour
    randomCol = randInt(0, 5);
    document.getElementById("sqcol").innerHTML = colNames[randomCol];


    sq1 = createSprite(150, 450, 40, 40);
    sq1.addToGroup(squares);
    sq1.currentColour = randInt(0, 2);
    
    sq2 = createSprite(300, 450, 40, 40);
    sq2.addToGroup(squares);
    sq2.currentColour = randInt(2, 4);

    sq3 = createSprite(450, 450, 40, 40);
    sq3.addToGroup(squares);
    sq3.currentColour = randInt(3, 5);

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
    // set the colours of the squares to their assigned colours in the list
    sq1.shapeColor = colours[sq1.currentColour];
    sq2.shapeColor = colours[sq2.currentColour];
    sq3.shapeColor = colours[sq3.currentColour];

    if(doorUnlocked === true) {
        doorLight.shapeColor = color(79, 240, 79);
    } else {
        doorLight.shapeColor = color(100);
    }
    background(32);
    drawSprites();
}