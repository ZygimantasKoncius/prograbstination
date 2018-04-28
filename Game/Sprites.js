function splash(x, y, game, colour){
    for(let i=0; i<15; i++){
        game.sprites[i].render = true;
        game.sprites[i].colour = colour;
        game.sprites[i].x = x;
        game.sprites[i].y = y;
        game.sprites[i].vx = random(-6, 6);
        game.sprites[i].vy = random(-7, 3);

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
        this.colour = 0;
        this.vx = random(-6, 6);
        this.vy = random(-7, 3);
        this.w = random(game.screenWidth*0.01, game.screenWidth*0.03);
    }

    draw(){
        fill(this.colour);
        noStroke();
        ellipse(this.x, this.y, this.w, this.w);
        this.x += this.vx;
        this.y += this.vy;
        if(this.vy < 10)
            this.vy += 0.2;
        if(this.y > game.screenHeight + 10)
            this.render = false;
    }
}