class Ball {
  constructor(x,y,radius) {
    var options ={
      'restitution':0.8,
      'friction':1.0,
      'density':1.0,
      'isStatic': true
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world, this.body);
  }

  display(){
      var pos =this.body.position;
      //ellipseMode(CEN);
      //fill("brown");
      ellipse(pos.x, pos.y, this.radius);
  }
}
