const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var engine, world,box,ground,ball;



function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true 
  }

  box = Bodies.rectangle(200,200,50,50)
  World.add(world,box)

  ground= Bodies.rectangle(200,350,400,2,option)
World.add(world,ground)

var ball_option= {
   restitution : 1
}

ball=Bodies.circle(300,100,40, ball_option)
World.add(world,ball)

console.log(box)


}

function draw() {
  background(0); 
  Engine.update(engine)

  rectMode(CENTER) 
  fill("red")
rect(box.position.x,box.position.y,50,50)

fill("blue")
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,40,40)

fill("yellow")
rect(ground.position.x,ground.position.y,400,2)
}  
