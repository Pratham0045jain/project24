class Mouth extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,120,height,angle);
      this.image = loadImage("assets/4.png");
      Matter.Body.setAngle(this.body, angle);
      
    }
   
  }