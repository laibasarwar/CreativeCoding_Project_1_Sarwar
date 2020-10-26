class Card{
  constructor(x,y,rx,ry){
      this.x=x;
      this.y=y;
      this.rx=rx;
      this.ry=ry;
      this.colorred=0;
      this.colorgreen=0;
      this.colorblue=0;
  }
  changeColor(colorred,colorgreen,colorblue) {
    this.colorred = colorred;
    this.colorgreen = colorgreen;
    this.colorblue = colorblue;
  }
  show(){
    strokeWeight(2);
    stroke(0,0,255);
    fill(this.colorred,this.colorgreen,this.colorblue);
    rectMode(CORNER);
    rect(this.x,this.y,this.rx,this.ry);
  }
  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if ((d < this.rx) && (d<this.ry)) {
      return true;
    } else {
      return false;
    }
  }
  // intersects(other) {
  //   let d = dist(this.x, this.y, other.x, other.y);
  //   return d < this.r + other.r;
  // }
}