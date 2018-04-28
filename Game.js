let game;
class Game{
    constructor(sW, sH){
        this.screenWidth = sW;
        this.screenHeight = sH;
        this.score = 0;
        this.hook = new Hook(this);
    }
}

function setup(){
    let ctx = document.getElementById("container");
    game = new Game(ctx.offsetWidth, ctx.offsetHeight);

    let canvas = createCanvas(game.screenWidth, game.screenHeight);
    canvas.parent("container");
}

function draw(){
    //drawGrabbables();
    //ellipse(mouseX, mouseY, 80, 80);

    drawHook();
    //game.hook.move();
}

function drawHook(){
    let centerX = game.screenWidth/2;
    let topY = game.screenHeight/10;


    line(centerX, topY, centerX, topY + game.hook.length);

}