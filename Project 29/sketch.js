
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  box1,box2,box3,box4,box5,box6,box7,box8,box9;
var ground;
var polygon,polygonImage;
var slingShot;
function preload()
{
  polygonImage = loadImage("polygon.png")
  getTime();
}

function setup() {
	createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
   box1 =  new Box(390,165,30,40) 
   box2 =  new Box(420,205,30,40)
   box3 =  new Box(390,205,30,40)
   box4 =  new Box(360,205,30,40)
   box5 =  new Box(450,245,30,40)
   box6 =  new Box(420,245,30,40)
   box7 =  new Box(390,245,30,40)
   box8 =  new Box(360,245,30,40)
   box9 =  new Box(330,245,30,40)

  ground = new Ground(600,580,1000,50);
  polygon =  new Polygon(100,105,30,40);
  slingShot = new SlingShot(polygon.body,{x:100,y:105})
	
  getTime();
	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ground.display();
  polygon.display();
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly()
}
async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json()
  console.log(responseJSON);
  var datetime = responseJSON.datetime
  var hour = datetime.slice(11,13)
  console.log(hour)
if(hour>=06 && hour<=15){
background("white")
}
else{
background("black")
}

}