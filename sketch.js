const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var mouth;

function preload() {
    backgroundImg = loadImage("assets/war.jpg");
}

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,30);
    tanker = new Tanker(320,320,220,170);
    mouth = new Mouth(420,260,130,PI/2);
    cannonBall = new CanonBall(200,200,100,100);
    ball = new Ball(600,600,5);

    cannonBall1 = new CanonBall(800,10,100,100);
    cannonBall2 = new CanonBall(900,30,100,100);
    cannonBall3 = new CanonBall(1000,5,100,100);

}

function draw() {
     background(backgroundImg);
     Engine.update(engine);
     
  ground.display();
  tanker.display();
  mouth.display();
  cannonBall.display();
  ball.display();
  cannonBall1.display();
  cannonBall2.display();
  cannonBall3.display();

  

  for(var i = 1; i<9; i = i+0.5){
  if(keyIsDown(UP_ARROW)){
    Matter.Body.setAngle(mouth.body, PI/i);
  }
}

for(var i = 1; i<9; i = i+1){
    if(keyIsDown(DOWN_ARROW)){
      Matter.Body.setAngle(mouth.body, -PI/i);
    }
  }
  

/* function keyPressed(){
    if(keyIsDown(UP_ARROW)){
    mouth = new Mouth(340,320,40,PI/6);
    
    }
} */
}
function keyReleased() {
    // Call the shoot method for the cannon.
}