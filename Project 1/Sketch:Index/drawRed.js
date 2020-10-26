class Cluster{
    constructor(randsize){//random size of cluster of people
        
        this.width=width;
        this.height=height;
        this.randsize=randsize;
        this.xcenter=250;
        this.ycenter=250;
        this.xspeed = .2;
        this.xpos = 100;
        //starttime=millis();
    }

    display(){
        // stroke(255);
        // strokeWeight(8);

        noStroke();
        fill(random(200,255),0,0);
        ellipseMode(CENTER);
        ellipse(random(this.width),random(this.height),this.randsize);//cluster positions and size
        fill(255);
        ellipse(this.xcenter, this.ycenter, this.xpos);
    }
    move(){
        if (this.xpos > width/3) {
            this.xspeed = .2;
        }
        this.xpos -= this.xspeed;//as person in middle gets smaller, the cluster of people get bigger
        this.randsize+=this.xspeed;

        if (this.xpos < 0) {//as person gets bigger the cluster gets smaller
        this.xspeed = -.2;
        this.randsize-=this.xspeed;

        //starttime=millis();
        //if millis()-startime>=25000{

        //}
        }
    }
}