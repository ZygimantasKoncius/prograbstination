function setup(){
    var ctx = document.getElementById("container");
    console.log();
    var canvas = createCanvas(ctx.offsetWidth, ctx.offsetHeight);
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