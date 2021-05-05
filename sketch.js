var bullet,wall;
var speed,wieght
var thickness,damage;

function setup() {
  createCanvas(1600,400);
 
  bullet=createSprite(50,200,30,50);
  wall=createSprite(1200,200,thickness,height/2);
speed=random(59,90);
wieght=random(400,1500);
thickness=random(22,83);
}


function draw() {
  background(255,255,255);  
  bullet.shapeColor="brown";
  wall.shapeColor=color(80,80,80)
  bullet.velocityX=speed;
  function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.width+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
return true
  }
return false;
}
if(hasCollided(bullet,wall))
{
  damage=0.5*wieght*speed*speed/(thickness*thickness*thickness)
  
    bullet.velocityX=0;
  
if(damage<10)
{
bullet.shapeColor=color(255,0,0);
}
if(damage>10)
{
  bullet.shapeColor=color(0,250,0);
}

}

  
  
  

  drawSprites();
}