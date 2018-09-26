
// This is the getting started with p5

function setup(){
	
	createCanvas(800,600);
	//x1, y1
}

function draw(){
	background(220,220,220);

	// noFill()
	// if(mouseIsPressed){
	// 	fill(0);
	// }else{
	// 	fill(255);
	// }

	// ellipse(mouseX, mouseY, 80, 80);

	stroke(255);
	strokeWeight(4)
	rect(15, 10, 50, 50);
	noFill();

	line(0, 0, 800, 650);
	line(0, 300, 800, 300);


}

