class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visoiblity = 255
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //console.log(this.body.speed)
      if (this.body.speed<3){
      //super.display
      }
      else {
        World.remove(world,this.body)
        push()
        this.visibility = this.visibility - 5
        tint(255,this.visibility)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
      }
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  