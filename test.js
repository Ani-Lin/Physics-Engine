const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(400,390,800,20,options);
  World.add(world,ground);

  var ball_options = {
    restitution : 0.8
  }

  ball=Bodies.circle(400,100,40,ball_options);
  World.add(world,ball);
  /*console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);*/
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  //rect(200, 200, 50, 50);
  
}