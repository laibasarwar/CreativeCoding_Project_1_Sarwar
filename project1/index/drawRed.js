class Cluster{
    constructor(width,height,randsize,fillred,fillgreen,fillblue){//random size of cluster of people
        
        this.width=width;
        this.height=height;
        this.randsize=randsize;
        this.xcenter=250;
        this.ycenter=250;
        this.xspeed = .5;
        this.xpos = 100;
        this.fillred=fillred;
        this.fillgreen=fillgreen;
        this.fillblue=fillblue;
        //starttime=millis();
    }

    display(){
        // stroke(255);
        // strokeWeight(8);

        noStroke();
        fill(this.fillred,this.fillgreen,this.fillblue);
        ellipseMode(CENTER);
        
        ellipse(this.width,this.height,this.randsize);//cluster positions and size
        fill(255);

        ellipse(this.xcenter, this.ycenter, this.xpos);
    }
    move(){
        if (this.xpos > width/3) {
            this.xspeed = 0.5;
        }
        this.xpos -= this.xspeed;//as person in middle gets smaller, the cluster of people get bigger
        this.randsize+=this.xspeed;

        if (this.xpos < 0) {//as person gets bigger the cluster gets smaller
        this.xspeed = -0.5;
        this.randsize-=this.xspeed;

        //starttime=millis();
        //if millis()-startime>=25000{

        //}
        }
    }
}