class Ball
{
    constructor(x,y,radius)
    {
        var options = {
            isStatic: false,
            restitution: 0.3,
            frict: 1,
            density: 1.2
        }
        this.paper = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;

        World.add(world, this.paper);

        this.image = loadImage("Images/paper.png");

    }

    display(){
        
        push();

        translate(this.paper.position.x,this.paper.position.y);
        imageMode(CENTER);
        scale(0.5);
        image(this.image,0,0);

        pop();

    }

    throw(){

		Matter.Body.applyForce(this.paper, this.paper.position, {x:180, y:-200})

    }

}