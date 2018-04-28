let screenWidth, screenHeight;
function setup(){
    const ctx = document.getElementById("container");
    console.log();
    screenWidth = ctx.offsetWidth;
    screenHeight = ctx.offsetHeight;
    let canvas = createCanvas(screenWidth, screenHeight);
    canvas.parent("container");
}

function draw(){
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}