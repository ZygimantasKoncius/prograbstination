function splash(x, y, game, colour){
    for(let i=0; i<15; i++){
        game.sprites[i].render = true;
        game.sprites[i].colour = colour;
    }
}

function drawSprites(){
    for(let i=0; i<15; i++)
        if(game.sprites[i].render)
            game.sprites[i].draw();
}

class Sprite{
    constructor(x, y, game, colour){
        this.x = x;
        this.y = y;
        this.render = false;
        this.colour = 0
        this.vx = random(-10, 10);
        this.vy = random(-4, 4);
        this.w = random(game.screenWidth*0.01, game.screenWidth*0.03);
    }

    draw(){
        ellipse(this.x, this.y, this.w, this.w);
        this.x += this.vx;
        this.y += this.vy;
        if(this.vy < 15)
            this.vy += 1;
        if(this.y > game.screenHeight + 10)
            this.render = false;
    }
}