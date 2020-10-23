class Card{
    constructor(){
        this.z125 = 125; //variable for half of width
        this.z250 = 250; //variable for half of height
        this.z375 = 375;
        // this.x=x;
        // this.y=y;
    }

    displayCards(x1,y1){
        for (let i=0;i<width; i+=125) {
            for (let j=0; j<height; j+=125){
              push();
              translate(i, j);
              fill(255);
              rect(0,0,125,125);
              triangle(62.5,40,20,80,100,80);
              pop();
            }
        }
        // fill(255,200,255);
        ellipse(x1, y1, 25);
        // this.clickCard();
    }
    clickCard(x3,y3){
        if ((i<z125) && (j<z125)){
            if ((mouseX<z125) && (mouseY<z125) && (mouseIsPressed==true)){
              fill(255,0,0,100);
              rect(i,j,125,125);
            }
        } else if ((i>=z125) && (i<z250) && (j>=0) && (j<z125)){
            if ((mouseX>=z125) && (mouseX<z250) && (mouseY>=0) && (mouseY<z125) & (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
        } else if ((i>=0) && (i<z125) && (j>=z125) && (j<z250)){
            if ((mouseX>=0) && (mouseX<z125) && (mouseY>=z125) && (mouseY<z250) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
        } else if ((i>=z125) && (i<z250) && (j>=z125) && (j<z250)){
            if ((mouseX>=z125) && (mouseX<z250) && (mouseY>=z125) && (mouseY<z250) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=z250) && (i<z375) && (j>=0) && (j<z125)){
            if ((mouseX>=z250) && (mouseX<z375) && (mouseY>=0) && (mouseY<z125) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=z375) && (i<width) && (j>=0) && (j<z125)){
            if ((mouseX>=z375) && (mouseX<width) && (mouseY>=0) && (mouseY<z125) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=z250) && (i<z375) && (j>=z125) && (j<z250)){
            if ((mouseX>=z250) && (mouseX<z375) && (mouseY>=z125) && (mouseY<z250) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=z375) && (i<width) && (j>=z125) && (j<z250)){
            if ((mouseX>=z375) && (mouseX<width) && (mouseY>=z125) && (mouseY<z250) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=0) && (i<z125) && (j>=z250) && (j<z375)){
            if ((mouseX>=0) && (mouseX<z125) && (mouseY>=z250) && (mouseY<z375) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=z125) && (i<z250) && (j>=z250) && (j<z375)){
            if ((mouseX>=z125) && (mouseX<z250) && (mouseY>=z250) && (mouseY<z375) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=0) && (i<z125) && (j>=z375) && (j<height)){
            if ((mouseX>=0) && (mouseX<z125) && (mouseY>=z375) && (mouseY<height) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=z125) && (i<z250) && (j>=z375) && (j<height)){
            if ((mouseX>=z125) && (mouseX<z250) && (mouseY>=z375) && (mouseY<height) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=z250) && (i<z375) && (j>=z250) && (j<z375)){
            if ((mouseX>=z250) && (mouseX<z375) && (mouseY>=z250) && (mouseY<z375) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=z375) && (i<width) && (j>=z250) && (j<z375)){
            if ((mouseX>=z375) && (mouseX<width) && (mouseY>=z250) && (mouseY<z375) && (mouseIsPressed == true)) {
                fill(0,255,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=z250) && (i<z375) && (j>=z375) && (j<height)){
            if ((mouseX>=z250) && (mouseX<z375) && (mouseY>=z375) && (mouseY<height) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
          } else if ((i>=z375) && (i<width) && (j>=z375) && (j<height)){
            if ((mouseX>=z375) && (mouseX<width) && (mouseY>=z375) && (mouseY<height) && (mouseIsPressed == true)) {
                fill(255,0,0,100);
                rect(i,j,125,125);
            }
        }
    }
}

//       }
//     }
//     fill(255,200,255);
//     ellipse(mouseX, mouseY, 25,25);
//   }