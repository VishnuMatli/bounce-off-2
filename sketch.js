var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 5;
  
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;

}

function draw() {
  background(0,0,0); 

  bounceOff(movingRect,fixedRect);

  
  drawSprites();
}

function bounceOff(Obj1,Obj2){

  if (Obj1.x - Obj2.x < Obj2.width/2 + Obj1.width/2 &&
    Obj2.x - Obj1.x < Obj2.width/2 + Obj1.width/2){
      Obj1.velocityX = Obj1.velocityX*(-1);
      Obj2.velocityX = Obj2.velocityX*(-1);

 }

 if (Obj1.y - Obj2.y < Obj2.height/2 + Obj1.height/2 &&
  Obj2.y - Obj1.y < Obj2.height/2 + Obj1.height/2){
      Obj1.velocityY =Obj1.velocityY*(-1);
      Obj2.velocityY = Obj2.velocityY*(-1);
 }

}