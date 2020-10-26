class Block{
  constructor(x,y,rx,ry){
      this.x=x;
      this.y=y;
      // length of width
      this.rx=rx;
      // length of height
      this.ry=ry;
      this.xmaze=xmaze;
      this.ymaze=ymaze;
    //   let playermaze;
      // positions of ellipse or player
    //   this.xpos=0;
    //   this.ypos=0;
  }

  show(){
      // fill(255,0,0, 50);
      // ellipseMode(CORNERS);
      // ellipse(0,0,25,25);
    //   this.player(0,0);
    //   fill(0);
      rect(this.x,this.y,this.rx,this.ry);

      // this.keyPressed();
  }
  

  intersects(playermaze) {
    let d = dist(this.x, this.y, playermaze.x, playermaze.y);
    return d < this.r + playermaze.r;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if ((d < this.ry) && (d<this.ry)) {
      return true;
    } else {
      return false;
    }
  }

//   confetti(){
//       fill()
//   }
//   playermaze(xmaze,ymaze){
//     this.xmaze=xmaze;
//     this.ymaze=ymaze;
//     fill(255,0,0);
//     ellipseMode(CORNER);
//     ellipse(this.xmaze,this.ymaze,25,25);
//   }
//   player(xpos,ypos){
//       this.xpos=xpos;
//       this.ypos=ypos;
//       fill(255,0,0, 50);
//       ellipseMode(CORNERS);
//       ellipse(this.xpos,this.ypos,25,25);
//   }


//   keyPressed() {
//       // when I call this, the player stretches instead of moving up and down, in the function version, the player would not stretch and clearly move around, so is there a part of my code that I need to fix
//       if (keyCode === LEFT_ARROW) {
//         this.xpos-=25;
//       } else if (keyCode === RIGHT_ARROW) {
//         this.xpos+=25;
//       } else if (keyCode === UP_ARROW) {
//         this.ypos-=25;
//       } else if (keyCode === DOWN_ARROW) {
//         this.ypos+=25;
//       }
//   }
}