class rope{
	constructor(body1,body2,pointA,pointB){
	this.pointA=pointA
	this.pointB=pointB 

	
var options={
	bodyA:body1,

	bodyB:body2,
	
	pointB:{x:this.pointA,y:this.pointB}
}

	//create rope constraint here
	
	this.rope =Matter.Constraint.create(options)
	}

}
    //create display() here 
  
display();{
	var pointA=this.rope.bodyA.position;
	var pointB=this.rope.bodyB.position;
strokeWeight(2);
var line1X = point1.x;
var line1Y = point1.y;

var line2X = point1.x;
var line2Y = point1.y;

line(line1X,line1Y,line2X,line2Y);
}
