class Module {
  constructor(xOff, yOff, x, y, speed, unit) {
    this.xOff = xOff;
    this.yOff = yOff;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.unit = unit;
    this.xDir = 1;
    this.yDir = 1;
  }

  // Custom method for updating the variables
  update() {
    this.x = this.x + this.speed * this.xDir;
    if (this.x >= this.unit || this.x <= 0) {
      this.xDir *= -1;
      this.x = this.x + 1 * this.xDir;
      this.y = this.y + 1 * this.yDir;
    }
    if (this.y >= this.unit || this.y <= 0) {
      this.yDir *= -1;
      this.y = this.y + 1 * this.yDir;
    }
  }

  star(x, y, radius1, radius2, npoints){

    this.x=x;
    this.y=y;
    this.radius1=radius1;
    this.radius2=radius2;
    this.npoints=npoints;
    // star angle definitions
    this.angle = TWO_PI / this.npoints;
    this.halfAngle = this.angle / 2.0;
    
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
  }
  // Custom method for drawing the object
  draw() {
    fill(255);
    
    ellipse(this.xOff + this.x, this.yOff + this.y, 6, 6);
    
    //this.star(this.xOff + this.x,this.yOff + this.y, 1.5, 3, 5);

    //hill
    noStroke();
    fill(116,158,19);
    triangle(0,height/2,0,height,width,height);
    //person looking at the stars
    fill(47,182,235);
    ellipseMode(CENTER);
    ellipse(150,325,35,75);
  }
}