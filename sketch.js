var sprite_1

function setup() {
  createCanvas(400,400);
  sprite_1=createSprite(200,200, 50,50);
}

function draw() 
{background(30);

if(keyDown(RIGHT_ARROW)){
  sprite_1.x=sprite_1.x+5;
}
if(keyDown(LEFT_ARROW)){
  sprite_1.x=sprite_1.x-5;
}
if(keyDown(UP_ARROW)){
  sprite_1.y=sprite_1.y-5;
}
if(keyDown(DOWN_ARROW)){
  sprite_1.y=sprite_1.y+5;
}


  drawSprites();
}




