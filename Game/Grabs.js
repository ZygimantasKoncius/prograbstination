const RED = 0;
const BLACK = 1;
const SILVER = 2;
const TEAL = 3;
const GOLD = 4;
const colorArr = ["red", "black", "silver", "yellow", "teal"];
const colorToMultiplier = [0, 1, 10, 20, 50];

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
    // Method to make a ball moving
    move()
    {
        this.rightBoundary = game.screenWidth - ellipseWidth;
        this.leftBoundary = 0 + ellipseWidth;
        while(!this.pulling)
        {
          this.x = this.x + 1;
          if (this.x == this.rightBoundary)
            this.x = this.x * (-1);
          else if (this.x == this.leftBoundary)
            this.x == this.x * (-1);
        }
    }
}
