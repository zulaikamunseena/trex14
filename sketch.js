
var trex; 
function preload(){
 trex_running =loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  //create a trex sprite
 
}

function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.8;
drawSprites();
}
