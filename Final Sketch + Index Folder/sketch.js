function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	background(0);
	
	// Screen 1
	fill(255);
	rect(50, 50, 100, 100);
	rect(150, 50, 100, 100);
	rect(150, 150, 100, 100);
	
	rectMode(CENTER);
	fill(255);
	rect(width/2, height/2, 200, 50, 50);
	fill(0, 255, 0);
	ellipse(width/2-74, height/2, 50, 50);
	
	function mouseDragged(){
	}
}