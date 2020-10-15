let x=12.5;
let y=12.5;

function setup() {
  createCanvas(500,500);
}
function draw() {
  // maze();
  mouse();

}

function mouse() {
  background(255);
  fill(255,0,0);
  let z125 = 125; //variable for half of width
  let z250 = 250; //variable for half of height
  let z375 = 375
  for (i=0;i<width; i+=125) {
    for (j=0; j<height; j+=125){
      noFill();
      stroke(0);
      rect(i, j, width, height);

      if ((i<z125) && (j<z125)){
        fill(random(50));
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        } else {
          fill(random(50));
        }
      } else if ((i>=z125) && (i<z250) && (j>=0) && (j<z125)){
        fill(random(100),200,200);
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=0) && (i<z125) && (j>=z125) && (j<z250)){
        fill(200,random(100),200);
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z125) && (i<z250) && (j>=z125) && (j<z250)){
        fill(200,200,random(100));
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z250) && (i<z375) && (j>=0) && (j<z125)){
        fill(random(100));
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z375) && (i<width) && (j>=0) && (j<z125)){
        fill(random(100),200,200);
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z250) && (i<z375) && (j>=z125) && (j<z250)){
        fill(200,random(100),200);
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z375) && (i<width) && (j>=z125) && (j<z250)){
        fill(200,200,random(100));
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=0) && (i<z125) && (j>=z250) && (j<z375)){
        fill(random(100));
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z125) && (i<z250) && (j>=z250) && (j<z375)){
        fill(random(100),200,200);
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=0) && (i<z125) && (j>=z375) && (j<height)){
        fill(200,random(100),200);
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z125) && (i<z250) && (j>=z375) && (j<height)){
        fill(200,200,random(100));
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z250) && (i<z375) && (j>=z250) && (j<z375)){
        fill(random(100));
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z375) && (i<width) && (j>=z250) && (j<z375)){
        fill(random(100),200,200);
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(0,255,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z250) && (i<z375) && (j>=z375) && (j<height)){
        fill(200,random(100),200);
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      } else if ((i>=z375) && (i<width) && (j>=z375) && (j<height)){
        fill(200,200,random(100));
        rect(i,j,125,125);
        if (mouseIsPressed) {
          fill(255,0,0);
          rect(i,j,125,125);
        }
      }
    }
  }
  fill(255,200,255);
  ellipse(mouseX, mouseY, 25,25);
}
// function mousePressed(){
//   stroke(255,0,0);
//   if ((i<z125) && (j<z125)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z125) && (i<z250) && (j>=0) && (j<z125)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=0) && (i<z125) && (j>=z125) && (j<z250)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z125) && (i<z250) && (j>=z125) && (j<z250)){
//     ffill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z250) && (i<z375) && (j>=0) && (j<z125)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z375) && (i<width) && (j>=0) && (j<z125)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z250) && (i<z375) && (j>=z125) && (j<z250)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z375) && (i<width) && (j>=z125) && (j<z250)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=0) && (i<z125) && (j>=z250) && (j<z375)){
//     fill(0,255,0);
//     rect(i,j,125,125);
//   } else if ((i>=z125) && (i<z250) && (j>=z250) && (j<z375)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=0) && (i<z125) && (j>=z375) && (j<height)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z125) && (i<z250) && (j>=z375) && (j<height)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z250) && (i<z375) && (j>=z250) && (j<z375)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z375) && (i<width) && (j>=z250) && (j<z375)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z250) && (i<z375) && (j>=z375) && (j<height)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   } else if ((i>=z375) && (i<width) && (j>=z375) && (j<height)){
//     fill(255,0,0);
//     rect(i,j,125,125);
//   }
// }

function maze() {
  background(255);

  //MAZE
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

  rect(0,475,475,25);
  rect(0,25,25,475);
  rect(50,0,450,25);
  rect(475,0,25,450);

  rect(25,100,100,25);
  rect(50,50,125,25);
  rect(150,75,25,100);
  rect(50,125,25,50);
  rect(100,150,50,25);
  rect(25,200,150,25);

  rect(125,225,25,75);

  rect(75,250,25,75);
  rect(50,325,100,25);
  rect(125,325,25,150);
  rect(25,375,75,25);
  rect(75,375,25,50);

  rect(200,25,25,50);
  rect(250,50,25,50);
  rect(175,100,125,25);
  rect(300,25,25,200);

  rect(350,50,50,25);
  rect(425,25,25,50);
  rect(375,50,25,75);
  rect(375,100,100,25);

  rect(275,200,125,25);

  rect(200,150,75,25);
  rect(200,150,25,75);
  rect(200,225,100,25);

  rect(350,150,100,25);
  rect(425,175,25,100);
  rect(375,250,100,25);
  rect(375,250,25,50);
  rect(300,300,100,25);

  rect(125,375,150,25);
  rect(175,300,25,50);
  rect(200,325,25,25);
  rect(175,275,100,25);
  rect(250,275,25,75);


  rect(425,300,25,75);
  rect(250,350,200,25);

  rect(375,400,75,25);
  rect(300,400,25,75);
  rect(200,425,200,25);

  rect(425,450,25,25);
}
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
