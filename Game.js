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
    clear();

    game.hook.move();
    drawHook();
}

// If anything is touched, extend hook
function touchStarted(){
    game.hook.extend();
}
function keyPressed(){
    game.hook.extend();
}
function keyTyped(){
    game.hook.extend();
}

// Draw the hook
function drawHook(){
    let centerX = game.screenWidth/2;
    let topY = game.screenHeight/10;

    ellipse(centerX, topY, game.screenWidth*0.01, game.screenWidth*0.01);
    ellipse(game.hook.endX, game.hook.endY, game.screenWidth*0.01, game.screenWidth*0.01);
    line(centerX, topY, game.hook.endX, game.hook.endY);
}