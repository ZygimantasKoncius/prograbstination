const RED = 0;
const BLACK = 1;
const TEAL = 2;
const GOLD = 3;
const colorArr = ["#990000", "#555555", "#000000", "#663960"];
const colorToMultiplier = [0, 1, 20, 50];

class Grab{
    constructor(game, x, y, w, col)
    {
        this.x = x;
        this.y = y; 
        this.ellipseWidth = w;
        this.pulling = false;
        this.colour = color(colorArr[col]);
        if(col == RED) {
            this.deadly = true;
        }
        else
            this.deadly = false;
        if(col==BLACK){
            this.value = 1;

        }
        else
            this.value = this.ellipseWidth;
        this.multiplier = colorToMultiplier[col];
    }

}