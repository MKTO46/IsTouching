function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 50);
  movingrect = createSprite(300, 200, 80, 50);
}

function draw() {
  background('purple');  
  movingrect.x = mouseX
  movingrect.y = mouseY
  if(abs(fixedrect.x - movingrect.x) < fixedrect.width/2 + movingrect.width/2 &&
  abs(fixedrect.y - movingrect.y) < fixedrect.height/2 + movingrect.height/2){
    fixedrect.shapeColor = 'pink'
    movingrect.shapeColor = 'pink'
  }else{
    fixedrect.shapeColor = 'white'
    movingrect.shapeColor = 'white'
  }
  drawSprites();
}