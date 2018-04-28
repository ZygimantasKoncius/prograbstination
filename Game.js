let game;
class Game{
    constructor(sW, sH){
        this.screenWidth = sW;
        this.screenHeight = sH;
        this.score = 0;
        this.hook = new Hook(this);
        this.justStarted = true;
        this.gameScore = 0;
    }
}

function setup(){
    let ctx = document.getElementById("container");
    game = new Game(ctx.offsetWidth, ctx.offsetHeight);

    let canvas = createCanvas(game.screenWidth, game.screenHeight);
    canvas.parent("container");

    noLoop();
}

function draw(){
    clear();
    if(game.justStarted){
        textSize(48);
        textAlign(CENTER);
        text("Press spacebar or touch the screen to start!", game.screenWidth/4, game.screenHeight/2,
            game.screenWidth/2, game.screenHeight/2);
    }
    textSize(32);
    textAlign(RIGHT);
    text(game.gameScore, game.screenWidth*3/4, game.screenHeight/30, game.screenWidth/4, game.screenHeight*30);
    line(0, game.screenHeight/10, game.screenWidth-1, game.screenHeight/10);
    game.hook.move();
    drawHook();
}

// If anything is touched, extend hook
function touchStarted(){
    if(game.justStarted){
        game.justStarted = false;
        loop();
    }
    else
        game.hook.extend();
}
function keyPressed(){
    if(game.justStarted){
        game.justStarted = false;
        loop();
    }
    else
        game.hook.extend();
}

// Draw the hook
function drawHook(){
    let centerX = game.screenWidth/2;
    let topY = game.screenHeight/10;

    line(centerX, topY, game.hook.endX, game.hook.endY);
    ellipse(centerX, topY, game.screenHeight*0.01, game.screenHeight*0.01);
    ellipse(game.hook.endX, game.hook.endY, game.screenHeight*0.01, game.screenHeight*0.01);
}