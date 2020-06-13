var bullet, damage, thickness, wall, speed, weight;

function setup()
{
    var canvas = createCanvas(1600, 400);
    thickness = random(22, 83);
    wall = createSprite(1200, 200, thickness, 400);
    bullet = createSprite(50, 200, 20, 10);
    wall.shapeColor = "white";
    speed = random(223, 321);
    weight = random(30, 52);
    bullet.velocityX = speed;
    bullet.shapeColor = "white";
}
function draw()
{
  background("black");  
  if(collide(bullet, wall))
  {
  damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    bullet.velocityX = 0;

  if (damage > 10)
  {
      wall.shapeColor = "red";
  }
  else
  {
      wall.shapeColor = "green";
  }
}
drawSprites();
textSize(20);
text("Speed: " + speed + ", Damage: " + damage + ", wallThickness: " + thickness, 600, 375);
}