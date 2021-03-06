
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (400,650,800,30);
	dustbin1 = new Dustbin (600,620,200,20); 
	dustbin2 = new Dustbin (500,560,20,100); 
    dustbin3 = new Dustbin (700,560,20,100); 
	paperball = new Paper(100,620,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paperball.display()

}

function keyPressed(){

	 if (keyCode === UP_ARROW)

	 { Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85}) } }


