class box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.visibility=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      //console.log(this.body.speed);
      if(this.body.speed<3){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);

        rect(pos.x,pos.y, this.width, this.height);
        pop();
      }
      else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5
      tint(255,this.visibility);
      rect(this.body.x,this.body.y,20,30);
      pop();
      }
      }};
  