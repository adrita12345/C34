const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ball = new Ball(100, 100, 80);
    b1 = new Building(800, 300);
    b2 = new Building(800, 200);
    b3 = new Building(800, 100);
    b4 = new Building(800, 100);
    b5 = new Building(800, 100);
    b6 = new Building(800, 100);
    b7 = new Building(800, 100);

    b8 = new Building(1000, 300);
    b9 = new Building(1000, 200);
    b10 = new Building(1000, 100);
    b11= new Building(1000, 100);
    b12= new Building(1000, 100);
    b13= new Building(1000, 100);
    b14= new Building(1000, 100);
    b15= new Building(1000, 100);
    b16= new Building(1000, 100);

    slingshot = new Rope(ball.body,{x:200, y:50});
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    ground.display();
    ball.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
  
    slingshot.display();  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
       slingshot.attach(ball.body);
    }
}
