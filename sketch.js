var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  objeto1 = createSprite(200,200,50,50);
  objeto1.shapeColor = "green";

  objeto2 = createSprite(400,400,50,50);
  objeto2.shapeColor = "green";

  objeto3 = createSprite(300,100,50,50);
  objeto3.shapeColor = "green";

  objeto4 = createSprite(100,300,50,50);
  objeto4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,objeto1)) {
    movingRect.shapeColor = "blue";
    objeto1.shapeColor = "blue";
  } else {
    movingRect.shapeColor = "green";
    objeto1.shapeColor = "green";
  }
  
   
  drawSprites();

  

}

function isTouching(objeto1,objeto2) {
  if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
    && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2
    && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
    && objeto2.y - objeto1.y < objeto2.height/2 + objeto1.height/2) {
  return true;
}
else {
  return false;
}

}