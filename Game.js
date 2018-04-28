import "./Game/Hook";

game;
class Game{
    hook;
    objects;
    score = 0;
}

function setup(){
    game = Game();
    hook = Hook();

    createCanvas(windowWidth, windowHeight);
}

function draw(){
    drawHook();
    //drawGrabbables();
    //ellipse(mouseX, mouseY, 80, 80);
}

function drawHook(){
    
}