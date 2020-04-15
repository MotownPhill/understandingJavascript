var colors;

function setup() {
	createCanvas(400, 400);
	colors = {
		black = 0;
		darkGray = 55;
		gray = 125;
		lightGray = 175;
		white = 255;
		paintItBlack: function() {
			background(this.black);
		}
	};
}

function draw() {
	background(220);
	if (frameCount > 120) {
		colors.paintItBlack()
	}
}
