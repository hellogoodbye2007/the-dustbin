class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            gravity:9
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radiusX=radius;
        this.radiusY=radius;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radiusX,this.radiusY);
    }
};