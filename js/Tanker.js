class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("assets/tank.png");
      //Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
     
    }

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

   
     //var angle = this.body.angle;
     
        push();
        var pos = this.body.position;
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, this.width, this.height);
        pop();

    }
}
