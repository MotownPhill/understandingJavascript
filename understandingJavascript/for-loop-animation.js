function setup() {
	createCanvas(800, 300);
}

function draw() {
	backgtround(1, 75, 100);
	
	//circle properties
	fill(237, 34, 93);
	noStroke();
	var diameter = 50;

	for (var i = 0; i < width / diameter; i = i+1) {
	ellipse(i * 50, 0, diameter, 50);
	}
}