class Star{
    constructor(x, y, radius1, radius2, npoints){
        this.x=x;
        this.y=y;
        this.radius1=radius1;
        this.radius2=radius2;
        this.npoints=npoints;
        // star angle definitions
        this.angle = TWO_PI / this.npoints;
        this.halfAngle = this.angle / 2.0;
        this.rotatestar=0;
    }

    show(){
        // push();
        // translate(width/2,height/2);
        // pop();
        // push();
        this.rotatestar+=0.001;
        
        // rotate(this.rotatestar);
        // translate(star.x,star.y); 

        beginShape();
        fill(255);
        stroke(255);

        // draws the star
        for (this.a = 0; this.a < TWO_PI; this.a += this.angle) {
          this.sx = this.x + cos(this.a) * this.radius2;
          this.sy = this.y + sin(this.a) * this.radius2;
          vertex(this.sx, this.sy);
          this.sx = this.x + cos(this.a + this.halfAngle) * this.radius1;
          this.sy = this.y + sin(this.a + this.halfAngle) * this.radius1;
          vertex(this.sx, this.sy);
        }
        endShape(CLOSE);
        // pop();
        push(); 
        this.hill;
        pop();
    }

    starJiggle(){
        this.x=this.x+random(-0.5,0.5);
        this.y=this.y+random(-0.5,0.5);
    }
    hill(){
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