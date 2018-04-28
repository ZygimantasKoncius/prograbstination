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
function keyTyped(){
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

// Draw heart method
function drawHeart(x, y, widthHeart) {
    fill(0);
    ellipse(x + widthHeart / 4, y, widthHeart / 2, widthHeart / 2);
    ellipse(x + widthHeart * 3 / 4, y, widthHeart / 2, widthHeart / 2);
    let x1, x2, x3, y1, y2, y3;
    x1 = x + widthHeart / 4 * (1 - 1 / Math.sqrt(2));
    y1 = y + widthHeart / 4 /Math.sqrt(2);
    x2 = x + widthHeart - widthHeart / 4 * (1 - 1 / Math.sqrt(2));
    y2 = y1;
    x3 = x1 + (x2 - x1)/2;
    y3 = (x2 - x1) / 2 + y2;
    triangle(x1, y1, x2, y2, x3, y3);
    rect(x + widthHeart / 4, y, widthHeart/2, widthHeart/4);
    fill (255);
}
