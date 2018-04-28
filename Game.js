let game;
class Game{
    constructor(sW, sH){
        this.hook = new Hook();
        this.screenWidth = sW;
        this.screenHeight = sH;
        this.score = 0;
    }
}

function setup(){
    const ctx = document.getElementById("container");
    game = new Game(ctx.offsetWidth, ctx.offsetHeight);

    let canvas = createCanvas(game.screenWidth, game.screenHeight);
    canvas.parent("container");
}

function draw(){
    //drawGrabbables();
    ellipse(mouseX, mouseY, 80, 80);

    drawHook();
}

function drawHook(){
    
}