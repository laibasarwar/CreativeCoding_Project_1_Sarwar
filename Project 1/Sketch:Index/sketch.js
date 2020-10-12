let x=12.5;
let y=12.5;

function setup() {
  createCanvas(500,500);
}
function draw() {
  background(255);
  fill(255,0,0, 50);
  ellipse(x,y,20, 20);
  //
  for (i=0;i<width; i+=25) {
    for (j=0; j<height; j+=25){
      noFill();
      stroke(0);
      rect(i, j, width, height);
    }
  }
  fill(0);
  rect(25,25,25,125);
  rect(25,25,150,25);
  rect(25,125,100,25);
  rect(100,100,25,50);
  rect(75,75,50,25);
  rect(150,50,50,25);
  rect(200,25,25,50);
}
      // stroke(255,0,0);
      // line(20,20,20,480);
      // line(20,480,460,480);
      // line(480,480,480,20);
      // line(480,20,40,20);
      //
      // for (i=460;i<480; i+=20) {
      //   for (j=320; j<480; j+=20){
      //     line(i, j, 480,j);
      //   }
      // }
//     }
//   }
// }

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x-=25;
  } else if (keyCode === RIGHT_ARROW) {
    x+=25;
  } else if (keyCode === UP_ARROW) {
    y-=25;
  } else if (keyCode === DOWN_ARROW) {
    y+=25;
  }
}
