class Ball {
  constructor(x, y, radius){
    var option = {
      restitution : 0.4,
      density : 2,
      friction : 0.05
    } 

    this.body = Bodies.circle(x,y,radius,option);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0,0,this.radius, this.radius);
    pop();
  }
}