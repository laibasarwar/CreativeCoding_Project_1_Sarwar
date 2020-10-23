class Cluster{
    constructor(randsize){
        this.width=width;
        this.height=height;
        this.randsize=randsize;
        this.xcenter=250;
        this.ycenter=250;
        this.xspeed = .2;
        this.xpos = 100;
    }

    display(){
        // stroke(255);
        // strokeWeight(8);
        fill(255);
        ellipseMode(CENTER);
        ellipse(this.xcenter, this.ycenter, this.xpos);
        fill(random(200,255),0,0);
        ellipse(random(this.width),random(this.height),this.randsize);
    }
    move(){
        if (this.xpos > width/3) {
            this.xspeed = .2;
        }
        this.xpos -= this.xspeed;
        this.randsize+=this.xspeed;

        if (this.xpos < 0) {
        this.xspeed = -.2;
        this.randsize-=this.xspeed;
        }
    }
}

