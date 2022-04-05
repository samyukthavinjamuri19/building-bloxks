
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(100,300,400,20);
  World.add(world,ground);
  box1 = new Box(200,100,50,50);
  box2 = new Box(200,100,50,50);
  box3 = new Box(200,100,50,50);
  box4 = new Box(200,100,50,50);
  box5 = new Box(200,100,50,50);
  box6 = new Box(200,100,50,50);
  box7 = new Box(200,100,50,50);



  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    
    
    
    
    
    )
}

function draw() 
{
  background(51);
  rect(ground.position.x,ground.position.y,400,10);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}
  
  
}

