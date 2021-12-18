var xd
function setup() {
  createCanvas(400,400);
  xd = createSprite(200,200,25,25);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    xd.x += 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    xd.position.x -= 5;
  }
  if(keyIsDown(UP_ARROW)){
    xd.y -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    xd.y += 5;
  }
drawSprites();
}




