
function setup() {
  createCanvas(600, 400);
  for(let i = 0; i < 3; i++){
    bubbles[i] = new Bubble(200, 200, 40);
  }
}
function draw() {
  background(0);
  for(let i = 0; i < 3; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    if(this.x > width || this.x < 0 || this.y > height || this.y < 0){
      this.x = 200;
      this.y = 200;
    }
  }
}
