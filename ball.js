class Ball{
    constructor(x,y,r){
 var options={
 'restitution' :0.8,
 'friction':1.0,
 'density':1.0
}
this.body=Bodies.circle(x,y,r/2,options);
this.image=loadImage("polygon.png")
this.x=x;
this.y=y;
this.r=r;
World.add(world,this.body);
}
display(){
var pos =this.body.position;
imageMode(CENTER);
image(this.image, pos.x, pos.y, 50,50);
}
}