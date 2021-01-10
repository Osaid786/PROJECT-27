
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,bob1,slingShot;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      box1=new Box(100,20)
      bob1=new Bob(10,180)
	  
	slingShot = new SlingShot(bob1.body,{x:100,y:20});


	  Engine.run(engine);

}


function draw() {
  
  background(220);
  Engine.update(engine)
  strokeWeight(4)
  
  box1.display();
  bob1.display();
  
  slingShot.display();


 
}




