class Snow{
	constructor(x,y,width,height)
	{
		var options = {
			isStatic:false,
			restitution:0.3,
			density:1.2,
			friction:0
		  };
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.image = loadImage("snow5.webp");
		this.body = Bodies.rectangle(this.x, this.y, 50, 50, options);
		
	}
	display()
	{
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
	}
}