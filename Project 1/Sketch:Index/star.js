class Star{
    constructor(x, y, radius1, radius2, npoints){
        this.x=x;
        this.y=y;
        this.radius1=radius1;
        this.radius2=radius2;
        this.npoints=npoints;
        // star angle definitions
        this.angle = TWO_PI / this.npoints;//star angle
        this.halfAngle = this.angle / 2.0;
        // this.rotatestar=rotatestar;
        this.rotatestar=0;//initialize star rotation
        this.switchInterval=1000;//increase color per second
        this.timeswitch=0;
        this.backgroundcolor;
        //setInterval(this.show,2000);
    }

    show(){
        // push();
        // translate(width/2,height/2);
        
        //starttime=millis();
        //if millis()-startime>=5000{

        //}
        // let rotaterate=random(0.00001,0.15);
        this.rotatestar+=0.15;
        push();
        translate(this.x,this.y); //this.x,this.y
        rotate(this.rotatestar);
        
        beginShape();//specific star shape - p5 star reference
        fill(255);
        stroke(255);

        // draws the star //0
        for (this.a = 0; this.a < TWO_PI; this.a += this.angle) {
          this.sx = 0 + cos(this.a) * this.radius2;//changed this.x to 0 
          this.sy = 0 + sin(this.a) * this.radius2;
          vertex(this.sx, this.sy);
          this.sx = 0 + cos(this.a + this.halfAngle) * this.radius1;
          this.sy = 0 + sin(this.a + this.halfAngle) * this.radius1;
          vertex(this.sx, this.sy);
        }
        endShape(CLOSE);
        pop(); 
        push(); 
        this.hill();
        pop();
    }

    starJiggle(){
        //this.x=this.x+random(0.1125);
        // frameRate(0.01);
        // frameCount(1);
        this.y=this.y+random(-1,0.125);//move stars up through random slow time
    }
    hill(){//display hill and person
        // push();
        // hill
        noStroke();
        fill(116,158,19);
        triangle(0,height/2,0,height,width,height);
        //person looking at the stars
        fill(47,182,235);
        ellipseMode(CENTER);
        ellipse(150,325,35,75);
    }


}