class Hook {
    orientation;   // Orientation integer 0 - 180
    direction;     // Boolean, if true hook swinging right

    length;        // Length of the rope
    BASE_LENGTH = 10;

    state;          // One of the four states below
    SWINGING = 0;
    EXTENDING = 1;
    GRABBING = 2;
    RETURNING = 3;



    constructor(){
        this.orientation = 90;
        this.length = BASE_LENGTH;
        this.direction = true;
        this.state = this.SWINGING;
    }

    // Method that starts extension of hook
    function extend(){
        if(this.state == SWINGING)
            this.state = this.EXTENDING;
    }

    // Method executed on each loop to compute the movement of hook
    function move() {
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
    function swing(){
        if(orientation == 180 || orientation == 0)
            direction = !direction;
        else
            if(direction)
                orientation++;
            else
                orientation--;
    }

    // Check state
    function checkState(){

    }

    // Extend method called in each loop if state is EXTENDING
    function extend(){
        length++;
    }

    // Method that computes hook when it is retracting
    function retract(){
        // If not retracted fully, decrease length
        if(length > BASE_LENGTH)
            length--;
        if(this.state == GRABBING){

        }
    }
}