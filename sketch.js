const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

function setup(){
	createCanvas(800,400);

	engine=Engine.create();
	world=engine.world;
	Engine.run(engine);

box1=new box(500,360,20,30);
box2=new box(520,360,20,30);
box3=new box(540,360,20,30);
box4=new box(560,360,20,30);
box5=new box(580,360,20,30);
box6=new box(600,360,20,30);

box7=new box(510,330,20,30);
box8=new box(530,330,20,30);
box9=new box(550,330,20,30);
box10=new box(570,330,20,30);
box11=new box(590,330,20,30);

box12=new box(520,310,20,30);
box13=new box(540,310,20,30);
box14=new box(560,310,20,30);
box15=new box(580,310,20,30);

box16=new box(530,280,20,30);
box17=new box(550,280,20,30);
box18=new box(570,280,20,30);

box19=new box(540,250,20,30);
box20=new box(560,250,20,30);

box21=new box(550,220,20,30);

box22=new box(500,135,20,30);
box23=new box(520,135,20,30);
box24=new box(540,135,20,30);
box25=new box(560,135,20,30);
box26=new box(580,135,20,30);
box27=new box(600,135,20,30);

box28=new box(510,105,20,30);
box29=new box(530,105,20,30);
box30=new box(550,105,20,30);
box31=new box(570,105,20,30);
box32=new box(590,105,20,30);

box33=new box(520,75,20,30);
box34=new box(540,75,20,30);
box35=new box(560,75,20,30);
box36=new box(580,75,20,30);

box37=new box(530,45,20,30);
box38=new box(550,45,20,30);
box39=new box(570,45,20,30);

platform=new Ground(400,390,800,20);
platform2=new Ground(550,160,200,20);
ball=new Ball(0,0,50);
sling=new Slingshot(ball.body,{x:200,y:200});
}

function draw(){
	background(182, 255, 196);
	//Engine.update(engine);

	debug:true;

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();
	box20.display();
	box21.display();
	box22.display();
	box23.display();
	box24.display();
	box25.display();
	box26.display();
	box27.display();
	box28.display();
	box29.display();
	box30.display();
	box31.display();
	box32.display();
	box33.display();
	box34.display();
	box35.display();
	box36.display();
	box37.display();
	box38.display();
	box39.display();
	platform.display();
	platform2.display();
	ball.display();
	sling.display();
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}
function keyPressed(){
	if(keyCode===32){
		sling.attach(ball.body);
	}
}