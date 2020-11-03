
// Matter.Engine,Matter.bodies,Matter.world

// Namespacing 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box;


function setup() {
  createCanvas(800,400);
  engine = Engine.create(); // engine = Matter.Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  box = Bodies.rectangle(200,200,50,50,options);
  World.add(world,box);

  console.log(box);   
}

function draw(){
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(box.position.x, box.position.y, 50, 50)
}