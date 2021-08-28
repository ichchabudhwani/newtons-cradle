const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
let engine;
let world;

var roof;
var bobs;
var bob3;
var bob2;
var display;
//Create multiple bobs, mulitple ropes varibale here



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ground_options={
	isStatic:true	
	}
	var rope_options={
		isStatic:true			
	}
	var bobs_options={
		restitution:0.95,
		friction:0.1,
		density:1.0
		 }
				

		 bobs= Bodies.circle(0,200,20,bobs_options);
		// World.add(world,bobs)
		 bob2= Bodies.circle(350,300,20,bobs_options);
		 World.add(world,bobs)
		 bob3= Bodies.circle(310,300,20,bobs_options);
		 World.add(world,bobs)
		 bob4= Bodies.circle(390,300,20,bobs_options);
		 World.add(world,bobs)
		 bob5= Bodies.circle(430,300,20,bobs_options);
		 World.add(world,bobs)
		 bob6= Bodies.circle(470,300,20,bobs_options);
		 World.add(world,bobs)
		 rectMode(CENTER);
		 ellipseMode(RADIUS);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
   ground= Bodies.rectangle(300,100,230,20,ground_options);
    World.add(world,ground);
	rope1=Bodies.rectangle(310,200,100,190,rope_options);
	World.add(world,rope);
	rope2=Bodies.rectangle(350,200,100,190,rope_options);
	World.add(world,rope);
	rope3=Bodies.rectangle(430,200,100,190,rope_options);
	World.add(world,rope);
	rope4=Bodies.rectangle(390,200,100,190,rope_options);
	World.add(world,rope);
	rope5=Bodies.rectangle(470,200,100,190,rope_options);
	World.add(world,rope);
   
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);
  rope1.point1,rope1.point2
  rect(rope1.position.x,rope1.position.y,0,200);
 rect(rope2.position.x,rope2.position.y,0,200);
 rect(rope3.position.x,rope3.position.y,0,200);
 rect(rope4.position.x,rope4.position.y,0,200);
 rect(rope5.position.x,rope5.position.y,0,200);
 
  //call display() to show ropes here
  
 //display (rope)
  //create ellipse shape for multiple bobs here
  ellipse(bobs.position.x,bobs.position.y,20)
 
  ellipse(bob3.position.x,bob2.position.y,20)
  ellipse(bob2.position.x,bob3.position.y,20)
  ellipse(bob4.position.x,bob4.position.y,20)
 
  ellipse(bob5.position.x,bob5.position.y,20) 
  ellipse(bob6.position.x,bob6.position.y,20)

}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
if (keyDown(up_arrow)) {
	

function vforce() {
Matter.Body.applyforce(bobs,{x:0,y:0},{x:0.05,y:0})	
}}