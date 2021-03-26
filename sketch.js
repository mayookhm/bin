
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
whitezonE = new whitezone1(310,520,10,70);
whitezoNe = new whitezone2(380,550,150,10);
whitezOne = new whitezone3(460,520,10,70);
ground = new Ground(200,height,1200,20);
ball = new Ball(380,300);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  whitezonE.display();
  whitezoNe.display();
  whitezOne.display();
  ground.display();

ball.display();
  drawSprites();
 
}



