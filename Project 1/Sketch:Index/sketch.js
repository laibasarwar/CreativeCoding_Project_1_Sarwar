let choice=1; //initial drawing number

let blocks=[];
let card;
let cards=[];
let cluster;
let stars=[];

let unit = 40;
let count;
let mods = [];

function setup() {
  createCanvas(500,500); 
  // to add blocks of the maze to the same array, is there a cleaner way, or is this good enough? I want to use this array to see compare where the ellipse is so it does not touch the black bars
  for (let i =0; i<20;i++){
    let x=50+25*i;
    blocks[i]=new Block(x,0,25,25); leftend=new Block(0,25,25,height); bottomend=new Block(0,475,475,25); rightend=new Block(475,25,25,425);
    block1=new Block(50,50,125,25); block2=new Block(150,50,25,125); block3=new Block(100,150,75,25); block4=new Block(25,100,100,25); block5=new Block(50,100,25,75);
    block6=new Block(200,25,25,50); block7=new Block(150,100,150,25); block8=new Block(250,50,25,50); block9=new Block(300,25,25,200); block10=new Block(425,0,25,75);
    block11=new Block(350,50,50,25); block12=new Block(375,75,25,50); block13=new Block(375,100,100,25); block14=new Block(350,150,100,25); block15=new Block(425,150,25,100);
    block16=new Block(375,250,100,25); block17=new Block(275,200,125,25); block18=new Block(200,225,100,25); block19=new Block(200,175,25,75); block20=new Block(200,150,75,25);
    block21=new Block(0,200,175,25); block22=new Block(125,200,25,100); block23=new Block(75,250,25,100); block24=new Block(50,325,100,25); block25=new Block(125,325,25,height);
    block26=new Block(25,375,75,25); block27=new Block(75,375,25,50); block28=new Block(175,275,100,25); block29=new Block(250,275,25,100); block30=new Block(175,275,25,75);
    block31=new Block(175,325,50,25); block32=new Block(125,375,150,25); block33=new Block(275,350,175,25); block34=new Block(425,300,25,50); block35=new Block(375,250,25,75);
    block36=new Block(300,300,100,25); block37=new Block(200,425,200,25); block38=new Block(300,400,25,100); block39=new Block(375,400,75,25); block40=new Block(425,450,25,25);

    blocks.push(leftend,bottomend,rightend,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,block32,block33,block34,block35,block36,block37,block38,block39,block40);
  }

  // card=new Card();
  for (let i=0; i<4; i++){
    let change=0+125*i;
    let r=125;
    let c=new Card(change,0,r,r);
    let c2=new Card(change,125,r,r);
    let c3=new Card(change,250,r,r);
    let c4=new Card(change,375,r,r);
    cards.push(c,c2,c3,c4); 
  }

  cluster=new Cluster(100);

  // to make the stars distanced apart and have multiple instances. having trouble incorporating columns within the array, 
  for (let i =0; i<(width);i++){
    let x=random(width);
    let y=random(height);
    stars[i]=new Star(x,y, 1.5, 3, 5);
  }

  noStroke();
  let wideCount = width / unit;
  let highCount = height / unit;
  count = wideCount * highCount;

  let index = 0;
  for (let y = 0; y < highCount; y++) {
    for (let x = 0; x < wideCount; x++) {
      mods[index++] = new Module(
        x * unit,
        y * unit,
        unit / 2,
        unit / 2,
        random(0.05, 0.8),
        unit
      );
    }
  }
}

function draw() {
  if (choice==1) {
    background(255);
    // block.player();
    for (let i =0; i<blocks.length;i++){
        blocks[i].show();
        blocks[i].player(0,0);
    }
    // ellipseMode(CORNER);

    // ellipse(0,0,25,25);
  }
  if (choice==2) {
    background(255);

    push();
    strokeWeight(1);
    stroke(0);
    fill(235,156,146,92);
    quad(100,100,150,100,150,150,100,200);//chimney
    fill(235,192,194,92);
    triangle(50,height/2,width/2,50,450,height/2);
    ellipseMode(CENTER);
    fill(165,194,232,91);//blue
    ellipse(width/2,150,50,50);//roof window
    rect(50,height/2,400,200);//house body
    rectMode(CENTER);
    fill(165,194,232,91);//blue
    rect(125,300,100,75);//windows
    rect(375,300,100,75);//windows
    fill(158,138,121,62);//brown
    rect(width/2,400,50,100);//door
    pop();
    
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].contains(mouseX, mouseY)) {
        cards[i].changeColor(255);
      } else {
        cards[i].changeColor(100);
      }
      cards[i].show();
    }

  }
  if (choice==3) {
    background(0);
    // drawred call to functions
    cluster.display();
    cluster.move();
  }
  if (choice==4) {
    background(0);
    // call to star function and class
    for (let i =0; i<stars.length;i++){
        stars[i].show()   
    }
  }
  if (choice==5) {  
    background(0);
    for (let i = 0; i < count; i++) {
      mods[i].update();
      mods[i].draw();
      // mods[i].show();
    }
  }
}

function mousePressed() {
  for (let i = cards.length - 1; i >= 0; i--) {
    if (cards[i].contains(mouseX, mouseY)) {
      cards.splice(i, 1);
    }
  }
}
function keyPressed(){
  // if (keyCode==32){ //spacebar
  //   choice++;
  //   if (choice>5){
  //     choice=1; //make it a cycle
  //   }
  if (keyCode === LEFT_ARROW) {
    block.xpos-=25;
  } else if (keyCode === RIGHT_ARROW) {
    block.xpos+=25;
  } else if (keyCode === UP_ARROW) {
    block.ypos-=25;
  } else if (keyCode === DOWN_ARROW) {
    block.ypos+=25;
  } else if (keyCode==32){ //spacebar
    choice++;
    if (choice>5){
      choice=1; //make it a cycle
    }
  }
} 
