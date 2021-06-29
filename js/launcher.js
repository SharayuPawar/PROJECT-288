class launcher{
    constructor(bodyA,anchor){
        var options={
            bodyA:bodyA,
            pointB:anchor,
            stiffness:0.04,
            length:10

        }
		this.bodyA=bodyA
		this.pointB=anchor;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher)

    }
    display(){
		if(this.launcher.bodyA){
        var pointA=this.launcher.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
    }
    fly(){
        this.launcher.bodyA=null;
    }
    attach(someBody){
        this.launcher.bodyA= someBody
    }

}