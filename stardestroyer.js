// Arrays for the X and Y positions of the Aliens
var sphereCoordsX = [0, 0,  0, 0, 0];
var sphereCoordsY = [0, 0, 0, 0, 0];

// Other variables
var sphereDia = 25, speed = 1, score = 0;
var end = false, shoot = false;
var width = 800;
var height = 800;
var xPos = 0;
var score = 0;
var yspeed = 0;
var angrycat;

function preload(){
  galaxy = loadImage ("galaxy.jpg");
  alien = loadImage ("alien.png");
  food = loadImage ("food.png");
  meow = loadSound("meow.mp3");
  angrycat = loadSound("gameover.mp3");
}

function setup() {
  // Create an area that is not the full screen
  createCanvas(800, 800);
  imageMode(CENTER);
  image(galaxy, 0,0);

  // set the x position of each alien randomly
  for( var i = 0; i < 5; i++){
    sphereCoordsX[i] = random(20, width-20);
    // The variable width is the width of the Canvas
    // We would use height for the height of the Canvas
}
  textSize(40);
  var resetSketch;
  var button = createButton ( "reset");
function buttonIsPressed(){
  resetSketch();
  button.mouseIsPressed(resetSketch);
  score = 0
}
}




function draw() {
  if (end == false){
  background(0);
  image(galaxy, 400, 400, width, height);
  drawSpheres();
  moveSpheres();
  drawShip();
  endCheck();
  if (shoot){
  checkShoot();
  endCheck();
}
}else{
    if(end){
      var pressed = 0;
      if(pressed == false){

        pressed = true;
      }
      background(0);
      textSize (100);
      text ("Game Over", width/2- 225, height/2);
      textSize (50);
      text ("Click Button To Reset", width/2- 215 , height/2 + 100);


  }



}
fill (255);
text ("Score : " + score, 300, 50);
}
 var y = 0

 if(mouseIsPressed){
   end = false;
   shoot = false;
 }

 function resetSketch() {
   for (var i = 0; i < 5; i ++) {
     background (0);
   }
 }

function drawSpheres() {
  for (i = 0; i < 5; i +=1){
  image (food, sphereCoordsX [i], sphereCoordsY [i], 50, 50);
  }

  // Draw each of the aliens,
  // you should use a loop here.
}

function moveSpheres(){
  for ( i = 0; i < 5; i += 1){
  sphereCoordsY[i]  += speed;

}
  // i.e. change sphereCoordsY
}

var y1 = 0

function drawShip(){
 image(alien, mouseX, 765, 70, 70)
 y1 = map (0, 800, 0, 800);
}

function checkShoot(){
  strokeWeight(3);
  stroke(255,0,0);
  fill(255,0,0);

 if (shoot == true) {
  fill (255, 0, 0);

   line (mouseX, 740, mouseX, 0);


   for (i = 0; i < 5; i ++){
    if (mouseX >= sphereCoordsX [i] - 35 && mouseX <= sphereCoordsX [i] + 35 + yspeed ) {
  sphereCoordsY[i] = 0;
  sphereCoordsX [i] = random(0, 800);
      score = score + 1;
      speed = speed + 0.05;
      meow.play();


 }
 }
 }


  // Probably some sort of If like checking if your
  // padle hit your ball in last challenge.
  // If you hit, you should probably increase the score

  shoot = false;
  strokeWeight(1);
}

function keyPressed(){
  shoot = true;
}

function endCheck(){
  for (var i = 0; i < 5; i ++){
  if (sphereCoordsY [i] > height - 70){
    angrycat.play();
    end = true;
    speed = 1;

    if(mouseIsPressed){
      end = false;
      shoot = false;
    }
}

}
  for (var i = 0; i < 5; i ++) {
    if (sphereCoordsY [i] >= height - 50){
    end = true;

  }
  }




  // You'll probably need some sort of loop here

}
