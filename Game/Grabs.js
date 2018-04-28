const RED = "red";
const BLACK = "black";
const SILVER = "silver";
const TEAL = "teal";
const GOLD = "yellow";
const colorArr = {RED, BLACK, SILVER, GOLD, TEAL};
const colorToMultiplier = {RED:0, BLACK:1, SILVER:10, GOLD:20, TEAL:50};

class Grab{
    constructor(game, x, y, w, col)
    {
        this.x = x;
        this.y = y; 
        this.ellipseWidth = w;
        this.pulling = false;
        this.colour = color(col);
        if(this.colour==color(RED))
            this.deadly = true;
        else
            this.deadly = false;
        if(this.colour==color(BLACK))
            this.value = 1;
        else
            this.value = this.ellipseWidth;
        this.multiplier = colorToMultiplier[col];
    }

}