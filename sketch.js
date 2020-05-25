var car, wall;
var speed, weight;


function setup() {
  createCanvas(1500,400);

 speed = random(55, 90);
 weight = random(400, 1500);

 car = createSprite(50, 200, 50, 50);
 
  wall = createSprite(1350, 200, 60, height/2);
  
}

function draw() {
  background(255,255,255); 
  
  car.velocityX = speed;

  if(car.isTouching(wall)){
car.velocityX = 0;
  }

  if(car.veolcityX = 0){
   Deformation = (0.5 * weight * speed * speed) / 22500;

  if(Deformation < 100){
car.shapeColor = "green";

  }

  if(Deformation > 100 && Deformation < 180){
car.shapeColor = "yellow";
  }

  if(Deformation > 180){
car.shapeColor = "red";
  }
  }
  drawSprites();
}