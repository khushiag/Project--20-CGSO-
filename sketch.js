var fixedRect, movingRect;
var o1, o2, o3, o4, o5;

function setup() {
  createCanvas(1200, 800);
  o1= createSprite(200, 460, 50, 80);
  o1.shapeColor= "blue";
  o1.velocityX= 2;
 
  o2 = createSprite(400, 460, 50, 80);
  o2.shapeColor= "blue";
  o2.velocityX= -2;
  
  o3 = createSprite(100, 700, 50, 80);
  o3.shapeColor= "purple";
  //o3.velocityX= -2;

  o4 = createSprite(250, 700, 50, 80);
  o4.shapeColor= "purple";
  //o4.velocityX= -2;

  o5 = createSprite(400, 700, 50, 80);
  o5.shapeColor= "purple";
  //o5.velocityX= -2;

  fixedRect = createSprite(550, 700, 50, 80);
  fixedRect.shapeColor= "purple";

  movingRect = createSprite(700, 700, 50, 80);
  movingRect.shapeColor= "yellow";

}

function draw() {
  background(255,255,255);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
bounceOff(o1, o2);

if(isTouching(movingRect, o5)) {
  movingRect.shapeColor="green";
  o5.shapeColor="green";
}


  drawSprites();
}

