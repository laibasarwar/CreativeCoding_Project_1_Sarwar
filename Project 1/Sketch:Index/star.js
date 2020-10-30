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
        smooth();
        this.rotatestar+=0.15;//rotation angle
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
        this.y=this.y+random(-1,-0.9);//move stars up through random slow time-smoother
    }
    hill(){//display hill and person
        // push();
        // hill
        noStroke();
        fill(116,158,19);
        // for (let i=250;i<=width;i++){
        //     for (let j=250;j<=height;j++){
        //         stroke(116,158,19);
        //         line(i,j,5,5);
        //     }
        // }
        fill(116,200,19);
        quad(0,400,250,300,500,500,0,500);
        fill(116,140,19);
        quad(500,400,500,500,250,300);
        // triangle(0,height/2,0,height,width,height);
        //person looking at the stars
        fill(189,136,250);
        ellipseMode(CENTER);
			  
		ellipse(275,265,25,25);
        ellipse(275,295,35,45);
        // ellipse(290,315,35,10);

 

        // for (this.i=250;this.i<=width;this.i++){
        // stroke(116,140,19);
        // noFill();  
        // arc(50, 275, 70, 70,PI, PI + QUARTER_PI);
        // for (let arcx=250; arcx<500;arcx+=10){
        //     stroke(116,140,19);
        //     arc(50+arcx, 275, 70, 70,PI, PI + QUARTER_PI);
        // }                                            
        

        // }
    }
}