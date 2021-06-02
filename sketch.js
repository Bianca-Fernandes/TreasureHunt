var bg,bg2,form,system,code,security;
var score=0;

function preload() {  
  bg= loadImage("aladdin_cave.jpg")
  bg2 = loadImage("treasure2.jpg"); 
  music = loadSound("treasure.mp3");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    // music.play();
    clear()
    background(bg2)
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED",250, 150);
  }
  drawSprites()
}