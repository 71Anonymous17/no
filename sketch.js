const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;

var ball;
var ball2;
var ground;
var rope;
var rope2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution: 1
  }

  ball = Bodies.circle(200,50,20,options);
  World.add(world,ball);

  var ball2options = {
    restitution: 1
  }

  ball2 = Bodies.circle(350,10,25,ball2options);
  World.add(world,ball2);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ropeOptions = {
    pointA: {
      x: 200, y: 20
    },
    bodyB: ball,
    pointB: {
      x: 0, y:0
    },
    length: 100, stiffness: 0.1
  }

  rope = Matter.Constraint.create(ropeOptions);
  World.add(world,rope);

  var rope2Options = {
    bodyA: ball,
    pointA: {
      x: 0, y: 0
    },
    bodyB: ball2,
    pointB: {
      x: 0, y: 0
    },
    length: 100, stiffness: 0.1
  }

  rope2 = Matter.Constraint.create(rope2Options);
  World.add(world,rope2);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  fill("green");

  ellipse(ball.position.x,ball.position.y,25);

  noFill();
  fill("blue");
  ellipse(ball2.position.x,ball2.position.y,20);

  noFill();

  push();
  strokeWeight(2);
  stroke("brown");
  line(rope.pointA.x, rope.pointB.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  pop();
}

function keyPressed(){
if(keyCode === RIGHT_ARROW){
  Matter.Body.applyForce(ball,{x: 0,y:0},{x:0.05,y:0})
}
}