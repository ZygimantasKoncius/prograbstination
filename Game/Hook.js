class Hook {
    //orientation;   // Orientation integer 0 - 180
    //direction;     // Boolean, if true hook swinging right

    //length;        // Length of the rope

    //state;          // One of the four states below




    constructor(){
        this.orientation = 90;
        this.length = this.BASE_LENGTH;
        this.direction = true;
        this.state = this.SWINGING;
        this.BASE_LENGTH = 10;
        this.SWINGING = 0;
        this.EXTENDING = 1;
        this.GRABBING = 2;
        this.RETURNING = 3;
    }

    // Method that starts extension of hook
    extend(){
        if(this.state == SWINGING)
            this.state = this.EXTENDING;
    }

    // Method executed on each loop to compute the movement of hook
    move() {
        if(this.state == SWINGING)
            swing();
        else if(this.state == EXTENDING) {
            checkState();
            if (this.state != EXTENDING)
                return;
            else
                extend();
        }
        else
            retract();
    }

    // Swing method called in each loop if state is SWINGING
    swing(){
        if(orientation == 180 || orientation == 0)
            direction = !direction;
        else
            if(direction)
                orientation++;
            else
                orientation--;
    }

    // Check state
    checkState(){

    }

    // Extend method called in each loop if state is EXTENDING
    extend(){
        length++;
    }

    // Method that computes hook when it is retracting
    retract(){
        // If not retracted fully, decrease length
        if(length > this.BASE_LENGTH)
            length--;
        if(this.state == this.GRABBING){

        }
    }
}