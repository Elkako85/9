let sineWires=[]

function setup() {
	createCanvas(600, 600);
		strokeWeight(1)
	for(let x=+100; x<width-100; x+=3){
		let fPlus=map(Math.abs(width/2-x), 0, width/2, 5, 1)
	sineWires.push(new sineWire(x, fPlus, 50, 0.05))

	}
}

function draw() {
	background('#FFF8F0')
	//print(frameRate())
	for(let sineWire of sineWires){
		sineWire.wiggle();
		sineWire.watch();
		
	}
}

class sineWire{
	constructor(x, f, w, speed){
	  this.x=x
		this.f=f
		this.w=w
		this.speed=speed
		this.time=0
		this.color=color('#738E96')
		this.filler=color('#93A8AC')
		//this.color.setAlpha(150)
		this.filler.setAlpha(10)
	}
	
	wiggle(){
		this.time+=this.speed
		
	}
	
	watch(){
		noFill()
		stroke(this.color)
		push()
		translate(this.x, 0)
		beginShape()
	for(let y=-30; y<=height+30; y+=20){
		let amount=map(Math.abs(y-height/2), 0, height/this.f, 0, TAU*2)
		let x=sin(amount+this.time)*this.w
		curveVertex(x, y)
		
	}
	
	endShape()
		
		pop()
	}
	
}