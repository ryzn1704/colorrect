var movingrect
var fixedrect

function setup() {
  createCanvas(1200,400);
  movingrect=createSprite(400, 200, 50, 50);
  fixedrect=createSprite(200,200,30,70)
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"

}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY


  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor="green"
    fixedrect.shapeColor="green"
  }
  else {
    movingrect.shapeColor="blue"
    fixedrect.shapeColor="blue"
  }
  drawSprites();
}