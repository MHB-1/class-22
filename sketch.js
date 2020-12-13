const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ball;

var ground;
var max;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  var max_options = {
    restitution: 1.0
  }
  max = Bodies.circle(200,100,20,max_options);
  World.add(world,max);
  var ball_options = {
    restitution: 1.0
  }
 ball = Bodies.circle(350,200,20,ball_options);
 World.add(world,ball);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,20,20);
  ellipse(max.position.x,max.position.y,20,20);
  
  
  

}