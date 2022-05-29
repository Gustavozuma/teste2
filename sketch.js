
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);
	var block1_options = {
		restitution: 0.5,
		friction:0.02,
		frictionAir:0
	}

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);
	var block2_options = {
		restitution: 0.7,
		friction:0.01,
		frictionAir:0.1
	}

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3);
	var block3_options = {
		restitution: 0.01,
		friction:1,
		frictionAir:0.3
	}

	var plane = Bodies.rectangle(200,390,400,20,plane_options)
	World.add(world,plane)
	var plane_options={
		isStatic = true
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(30);
  Engine.update(engine);

  drawSprites();
 
}



