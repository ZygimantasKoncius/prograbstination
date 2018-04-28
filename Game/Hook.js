class Hook {
    constructor(game){
        this.orientation = 90;                          // Orientation integer 0 - 180
        this.BASE_LENGTH = game.screenWidth*0.03;
        this.length = this.BASE_LENGTH;                 // Length of the rope
        this.direction = true;                          // Boolean, if true hook swinging right

        this.SWINGING = 0;
        this.EXTENDING = 1;
        this.GRABBING = 2;
        this.RETURNING = 3;
        this.state = this.SWINGING;                     // One of the four states above

        this.ROTATION_SPEED = 2;                        // Hook global setting
        this.EXTENDING_SPEED = 3;                       // Hook global setting
        this.game = game;

        this.endX = game.screenWidth/2;
        this.endY = game.screenHeight/10 + this.length;
    }

    // Method that starts extension of hook
    extend(){
        if(this.state == this.SWINGING)
            this.state = this.EXTENDING;
    }

    // Recalculate coordinates of end point
    coordinates(){
        let centerX = this.game.screenWidth/2;
        let topY = game.screenHeight/10;

        let alpha = this.orientation;
        if(alpha > 90)
            alpha = 180 - alpha;

        this.endX = this.length * cos(radians(alpha));
        this.endY = this.length * sin(radians(alpha));

        if(game.hook.orientation < 90)
            this.endX = centerX - this.endX;
        else
            this.endX = centerX + this.endX;

        this.endY += topY;
    }

    // Method executed on each loop to compute the movement of hook
    move() {
        this.coordinates();
        if(this.state == this.SWINGING)
            this.swing();
        else if(this.state == this.EXTENDING) {
            this.checkState();
            if (this.state == this.EXTENDING)
                this.extending();
        }
        else
            this.retract();
    }

    // Swing method called in each loop if state is SWINGING
    swing(){
        if(this.orientation == 180 || this.orientation == 0)
            this.direction = !this.direction;

        if(this.direction)
            this.orientation+=this.ROTATION_SPEED;
        else
            this.orientation-=this.ROTATION_SPEED;
    }

    // Check state
    checkState(){
        if(    // Check if hook reached border
            (this.endX <= 0)||
            (this.endX >= game.screenWidth)||
            (this.endY >= game.screenHeight)
        )
            this.state = this.RETURNING;
        else if (false){  // Check whether it hit any objects

        }
    }

    // Extend method called in each loop if state is EXTENDING
    extending(){
        this.length+=this.EXTENDING_SPEED;
    }

    // Method that computes hook when it is retracting
    retract(){
        // If not retracted fully, decrease length
        if(this.length > this.BASE_LENGTH)
            this.length-=this.EXTENDING_SPEED;
        else
            this.state = this.SWINGING;
        if(this.state == this.GRABBING){

        }
    }
}