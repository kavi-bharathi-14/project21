
var bullet, wall,thinkness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thinkness=random(22,83);

  bullet =createSprite(100, 200, 200, 50);

  wall=createSprite(1200, 200, thinkness,height/2 );
  wall.shapeColor=color(280, 80, 80);
  
  
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  bullet.shapeColor=color(250,150,10);
 
    if(hasCollided(bullet,wall))
    {
        bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thinkness*thinkness*thinkness);

      if(damage>10)
      {
        wall.shapeColor=color(255,0,0);

      }

      if(damage<10)
      {
        wall.shapeColor=color(0,255,0);

      }

    }
      drawSprites();
    }

function hasCollided(bullet,wall){
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    
    if(bulletRightEdge>=wallLeftEdge)
    {
    return true;
    }

    return false;
}




