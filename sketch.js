const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var obj,ground;
var obj1;
function setup(){
createCanvas(600,600);
engine=Engine.create();
world=engine.world;
//JSON format
var ground_options = {
  isStatic: true
}
ground=Bodies.rectangle(300,580,600,20, ground_options);
World.add(world,ground);


var obj_options={
  restitution: 0.7
}
var obj1_opttion={
  restitution:0.9
}

obj1= Bodies.circle(400,200,30,obj_options);
World.add(world,obj1);
obj = Bodies.circle(200,100,40,obj_options);
World.add(world,obj);
console.log(obj.position.x);
console.log(obj.position.y);


}

function draw(){
  background("black");
  Engine.update(engine);
  ellipseMode(RADIUS);
  fill("red");
  ellipse(obj.position.x,obj.position.y,40,40)
  fill ("blue");
  ellipse(obj1.position.x,obj1.position.y,30,30)
  rectMode(CENTER);
  fill("green");
  rect(ground.position.x,ground.position.y,600,20)
}
