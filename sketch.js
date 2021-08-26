var seaImg;
var shipImg;
function preload(){

seaImg = loadImage("sea.png");
ship = loadImage ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(600,400);
  sea = createSprite (200,100);
  sea.addAnimation("flow", seaImg);
  ship = createSprite (300, 90)
  ship.addAnimation("wave",shipImg);
}

function draw() {
  background("pink");
 drawSprites();
}