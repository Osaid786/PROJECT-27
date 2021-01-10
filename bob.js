class Bob{
    constructor(x,y,radius)
    {
        var options={
           'isStatic': false,
           'restitution' : 0.001,
           'friction' : 0.1,
           'density': 5.0
         }

    this.body=Bodies.circle(x,y,50,options)
    this.radius=50
    World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
         
        
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        strokeWeight(9)
        stroke("green")
        fill("violet")
        circle(pos.x,pos.y,this.radius)
        pop();
    }
}