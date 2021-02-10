var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite (200, 400, 80, 50);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite (100, 200, 50, 30);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite (250, 300, 80, 60);
  gameObject2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isTouching (movingRect, gameObject1)) {
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  } 
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green"; 
  }
  drawSprites();
}

function isTouching (object1, object2) {
  if (object2.x - object1.x <= object2.width/2 + object1.width/2 && object1.x - object2.x <= object2.width/2 + object1.width/2 &&
    object2.y - object1.y <= object2.height/2 + object1.height/2 && object1.y - object2.y <= object2.height/2 + object1.height/2 ) {
     return true;
  }
  else {
    return false;
  }
}