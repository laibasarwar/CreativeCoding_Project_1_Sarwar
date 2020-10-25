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
    }

    show(){
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

        //hill
        fill(200);
        triangle(0,height/2,0,height,width,height);
        //person looking at the stars
        fill(225);
        ellipseMode(CENTER);
        ellipse(150,325,25,50);
    }
}