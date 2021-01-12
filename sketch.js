const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball,ball1;
var box1;
var box1sprite;

function setup(){
  var canvas=createCanvas(1300,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options ={

    isStatic : true

  }
  
  var ball_options ={
   isStatic : false,
   restitution : 1.0,
   friction :0.5,
   density :1.2

  }

 
  ground = Bodies.rectangle(1300/2,390,1365,20,ground_options);
  ball = Bodies.circle(200,350,20,ball_options);

  ball1 = createSprite(ball.x,ball.y,20,20);
  

  box1 = new Box(1000,370,200,20);
	box2 = new Box(1110,320,20,100);
  box3 = new Box(890,320,20,100);
  box4 = new Box(1300/2,10,1300,20);
  box5 = new Box(1290,200,20,400);
  box6 = new Box(10,200,20,400);
  
  World.add(world,ball);
  World.add(world,ground);
  console.log(ground);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,1300,20);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  keyPressed();
  drawSprites();
}

function keyPressed() {

if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball,{x :1000 ,y :350 },{x :1.0 ,y :1.0 })

}



}
