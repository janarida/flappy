let brick = [];
var sphereCoordsX = [0, 0, 0, 0, 0];
var sphereCoordsY = [0, 0, 0, 0, 0];
var speed = 0;
var x = 20;
var y = 200;
var y1 = 0;
var w = 0;
var h = 0;
var ySpeed = 0;
var xSpeed = 0;
var ymove = 0.5;
var x4 = 0;
var q = 0;
var h4 = 0;
var deleter = 0;
var endGame = 0;
var score = 0;
var wBird = 0;
var hBird = 0;

function setup(){
  createCanvas (1300, 900);
   for (let i = 0; i < 5; i++){
    let x4 = width + q;
    q += 600;
    let y4 = 0;
    let w4 = 110;
    let h4 = random (100, 600);
    brick [i] = new Brick (x4, y4, w4, h4);
  }
}

function preload (){
  bird = loadImage("bird.png");
  sky = loadImage ("sky.jpg");
}

function draw(){
    background (sky);
  if (endGame ==0){
      for (let i = 0; i  < brick.length; i++){
        brick[i].move();
        brick[i].show();

   }
      ySpeed=ySpeed+ymove;
      y = y + ySpeed;
      image (bird, x, y, wBird, hBird);
      endCheck();
      rect (0, 870, 1400, 30);
      textSize (75);
      textStyle (BOLD);
      text ("Score : " + ceil(score) / 11 , 20, 70);
}
if (endGame == 1){
  background (sky);
  textSize (100);
  textStyle (BOLD);
  text ("Game Over", 350, 450);
  textSize (75);
  textStyle (BOLD);
  text ("Score : " + ceil(score) / 11, 20, 70);
}
}

function mousePressed(){
  ySpeed = -10;
  end = false;
}

class Brick {
  constructor(x4, y4, w4, h4) {
  this.x4 = x4;
  this.y4 = y4;
  this.w4 = w4;
  this.h4 = h4;
}
   move(){
    this.x4 -= 5;
   }
   show(){
    fill(73, 255, 101);
    rect(this.x4, this.y4, this.w4, this.h4);
    rect(this.x4, this.y4 + this.h4 + 240, this.w4, height - (this.h4 + 200));
       if(this.x4 < -300){
         brick.splice (0,1);
         deleter = 1;
         brick [2] = new Brick ( width + 300, 0, 100, random (90, 700));
       }
       if(this.x4 <= 130 && this.x4 + 100 >= 130 && this.h4 >= y && this.x4  + this.h4 >= y){
         endGame = endGame + 1;
       } else if (this.x4 <= 130 && this.x4 + 100 >= 130 && this.h4 + 200 <= y && this.x4 + 200 + this.h4 >= y - hBird && this.x4 + this.h4 + 100 >= 220 ) {
         endGame = endGame + 1;
       } else if (this.x4 <= 150 + wBird/2 && this.x4 + 100 >= 200 + wBird/2 && y - hBird/2 >= this.h4 && y + hBird/2 <= this.h4 +310){
         score++;
   }
}
}


function endCheck(){
  if (y > 770){
    console.log("end")
    background (sky);
    textSize (100);
    textStyle (BOLD);
    text ("Game Over", 350, 450);
    textSize (75);
    textStyle (BOLD);
    text ("Score : ", 20, 70);
  }
}
