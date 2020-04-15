function setup() {
	createCanvas(800, 300);
	textAlign(CENTER, CENTER);
	frameRate(1);
}

function draw() {
	background(1, 75, 100);

	var random_0 = random();
	var random_1 = random(10);
	var random_2 = random(100,1000);
	var offset = 40;

	fil(255);
	textSize(24);
	text(random_0, width/2, height/2 - offset);
	text(random_1, width/2, height/2);
	text(random_2, width/2, height/2 + offset);
}