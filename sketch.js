const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3;
var ball;

var gameState = "onSling";

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 100, 30, 30);
    box2 = new Box(230, 100, 30, 30);
    box3 = new Box(260, 150, 30, 30);
    box4 = new Box(215, 130, 30, 30);
    box5 = new Box(260, 130, 30, 30);
    box6 = new Box(900, 100, 30, 30);
    box7 = new Box(930, 100, 30, 30);
    box8 = new Box(960, 150, 30, 30);
    box9 = new Box(915, 130, 30, 30);
    box10 = new Box(960, 130, 30, 30);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingShot = new SlingShot(this.ball,{x:100,y:200});
}

function draw(){
    box1.display();
    box2.display();
    box3.display();
    slingShot.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        //Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    gameState = "launched";
}


