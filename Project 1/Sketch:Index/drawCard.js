class Card{
  constructor(x,y,rx,ry){
      this.x=x;
      this.y=y;
      this.rx=rx;
      this.ry=ry;
      this.colorbrightness=0;
  }
  changeColor(bright) {
    this.colorbrightness = bright;
  }
  show(){
    strokeWeight(5);
    stroke(255,0,0);
    fill(this.colorbrightness);
    rectMode(CORNER);
    rect(this.x,this.y,this.rx,this.ry);
  }
  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if ((d < this.ry) && (d<this.ry)) {
      return true;
    } else {
      return false;
    }
  }
}