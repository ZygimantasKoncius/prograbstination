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
    //drawHeart(game.screenWidth/2, game.screenHeight/2, 30)
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

function drawHeart(x, y, widthHeart){
    ellipse(x + widthHeart/4, y, widthHeart/2, widthHeart/2);
    ellipse(x + widthHeart*3/4, y, widthHeart/2, widthHeart/2);
    let x1, x2, x3, y1, y2, y3;
    x1 = x + widthHeart/4*(1-1/Math.sqrt(2));
    y1 = y + widthHeart/4*Math.sqrt(2);
    x2 = x + widthHeart*(3/4 + Math.sqrt(2));
    y2 = y1;
    x3 = (x2-x1)/2;
    y3 = (x2-x1)/2 + y;
    triangle(x1, y1, x2, y2, x3, y3);
}