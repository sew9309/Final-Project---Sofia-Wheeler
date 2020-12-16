class FallingBlohshes { //Inspired by https://editor.p5js.org/kll/sketches/_1NnYvVhB
	constructor() {}
	setup() {
		billielogo = createSprite(width/2, height/2, 1000, 1000);
		billielogo.scale = 2;
		billielogo.addImage(billielogoImg);
		billielogo.immovable = false;
		billielogo.mass = 10;
		billielogo.friction = 0.025;
		blohshes = new Group();
	}

	draw() {
		if (frameCount % 48 == 0) {
			let dx = int(random(width));
			let dc = random(100);
			let blohsh = createSprite(dx, 10, 20, 20);
			blohsh.addImage(blohshImg);
			blohsh.scale = 0.10;
			blohsh.setSpeed(2, 90);
			blohsh.restitution = 0.3;
			blohsh.setCollider('circle', 0, 0, 10);
			blohshes.push(blohsh);
			
			// if (billielogo.position.y == 325) {
			// 	billielogo.immovable = true;
			// }
		}
		blohshes.bounce(billielogo);
		drawSprites();
	}
}

class Injection {
	
	constructor() {
		this.pushedAmount = 0; // injection progress in pixels
	} //constructor

	display() {

		noStroke();

		push();
		rotate(radians(40)); // Tilt Syringe

		fill(167, 165, 164, 130);
		rect(550, -60, 60, 200); // Syringe bottle
		rect(560, 140, 40, 10);
		rect(560, 140, 40, 10);

		rect(555, -50 + this.pushedAmount, 50, 10); // Syringe handle
		rect(550, -255 + this.pushedAmount, 60, 10);
		rect(550, -255 + this.pushedAmount, 60, 10);
		rect(575, -245 + this.pushedAmount, 10, 195);

		fill(167, 165, 164, 255); // Needle
		rect(579, 145, 2, 100);
		triangle(579, 245, 581, 245, 580, 300);
		fill(color('#FFDBAC'));
		rect(579, 270, 2, 100);

		fill(color('#722C4B')); // Liquid to inject
		rect(555, -40 + this.pushedAmount, 50, 175 - this.pushedAmount);

		pop();
	}

	drag(pX, pY, v) { // Move handle and liquid down if mouse vector is down-leftward
		if (this.pushedAmount < 175 && abs(pX - (height - pY)) < 100 && v.x < 0 && v.y > 0) {
			this.pushedAmount += 1;
			this.display();

			if (this.pushedAmount > 170) { // Start timer if fully injected
				this.deathTime = millis();
			}
		}
	}

	isFinished() { // If 1 second since interaction complete, signal that scene is done
		return millis() - 1000 >= this.deathTime;
	}
} //class Injection

class Brushes {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	crosses() {
	fill(255);
		rect(this.x-15, this.y + 20, 50, 15);
		rect(this.x + 5, this.y, 15, 75);
		fill(0);
		rect(this.x, this.y, 15, 75);
		rect(this.x-15, this.y + 15, 50, 15);
	}
}