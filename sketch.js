var rect1,rect2,rect3,rect4

function setup() {

  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect2=createSprite(400,300,30,20)
  rect3=createSprite(400,100,20,40)
  rect4=createSprite(400,400,20,20)

  rect3.velocityY=4
  rect4.velocityY=-7
}

function draw() {
  background("black");  
  drawSprites();
  rect1.x=mouseX
  rect1.y=mouseY

  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2 &&
     rect2.x-rect1.x<rect1.width/2+rect2.width/2 &&
      rect1.y-rect2.y<rect1.height/2+rect2.height/2 &&
  rect2.y-rect1.y<rect1.height/2+rect2.height/2 ){
    rect1.shapeColor="Red"
    rect2.shapeColor="orange"
  }
  else{
    rect1.shapeColor="green"
    rect2.shapeColor="blue"
  }

  if(rect3.x-rect4.x<rect3.width/2+rect4.width/2 &&
    rect4.x-rect3.x<rect3.width/2+rect4.width/2 ){
      rect3.velocityX=rect3.velocityX*(-1)
      rect4.velocityX=rect4.velocityX*(-1)
    }

    if( rect3.y-rect4.y<rect3.height/2+rect4.height/2 &&
      rect4.y-rect3.y<rect3.height/2+rect4.height/2 ){
        rect3.velocityY=rect3.velocityY*(-1)
        rect4.velocityY=rect4.velocityY*(-1)
      }
}