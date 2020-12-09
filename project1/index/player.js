class Player{

    constructor(){
        this.x=0;
        this.y=0;
    }

    move(x,y){
        this.x=x;
        this.y=y;
    }

    show(){
        stroke(255);

        fill(255,0,0, 50);
        ellipseMode(CORNERS);
        ellipse(this.x,this.y,25,25);
    }

}
