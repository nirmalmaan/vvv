
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var handle;
var box1,box2,box3,box4,box5,box6,box7;
var ground;


function setup() {
	createCanvas(800, 700);

  


	engine = Engine.create();
	world = engine.world;
  ground = new Ground(600,height,1200,20)
	//Create the Bodies Here.
 handle=new Rect(100,100,30,60);
 box1=new Box(200,650,50,50);
 box2=new Box(300,650,50,100);
 box3=new Box(400,650,50,150);
 box4=new Box(500,640,50,200);
box5=new Box(600,650,50,250);
box6=new Box(700,650,50,300);
box7=new Box(800,650,50,350);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  handle.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  drawSprites();
 
}



