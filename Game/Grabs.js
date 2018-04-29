const RED = 0;
const BLACK = 1;
const TEAL = 2;
const GOLD = 3;
const colorArr = ["#880000", "#AAAAAA", "#777777", "#444444"];
const colorToMultiplier = [0, 1, 20, 50];

class Grab {
    constructor(game, x, y, w, col, move) {
        this.x = x;
        this.y = y;
        this.ellipseWidth = w;
        this.pulling = false;
        this.colour = color(colorArr[col]);
        if (col == RED) {
            this.deadly = true;
        }
        else
            this.deadly = false;
        if (col == BLACK) {
            this.value = 1;
        }
        else
            this.value = this.ellipseWidth;
        this.multiplier = colorToMultiplier[col];
        this.moving = move;
        this.moveSpeed = game.screenWidth/300;
    }

    // Method to make a ball moving
    move() {
        this.rightBoundary = game.screenWidth - this.ellipseWidth;
        this.leftBoundary = this.ellipseWidth;
        if (!this.pulling) {
            this.x += this.moveSpeed;
            if (this.x >= this.rightBoundary || this.x <= this.leftBoundary)
                this.moveSpeed *= -1;
        }
    }
}
