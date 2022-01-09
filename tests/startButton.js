function setup() {
    createCanvas(600,600);
}

function draw() {
    background(32); // 50
    let button = createImg("img/playbutton.png", "Play!");
    button.position(250, 250);
    button.mousePressed(testu);
    button.size(100, 100);
}

function testu() {
    alert("weenus");
}