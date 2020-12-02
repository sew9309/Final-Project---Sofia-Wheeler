let blohsh;

let screen = 0;
let mgr;

function preload() {
	blohsh = loadImage('Assets/Blohsh.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

	mgr = new SceneManager();

	// Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene ( Intro );
    mgr.addScene ( Game );
  //  mgr.addScene ( Animation3 );

    mgr.showNextScene();

	// for (let i = 0; i < 50; i++) {
 //    syringes.push(new Syringe());
  }


function draw() {
	background(0);

	mgr.draw();
	
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( Intro );
            break;
        case '2':
            mgr.showScene( Game );
            break;
      //  case '3':
       //     mgr.showScene( Animation3 );
       //     break;


    }
    
    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}


function Intro()
{
    this.setup = function() {
    }

    this.draw = function() {

    	//Grid of Blohsh
    	//Grid inspired by https://editor.p5js.org/joeyklee/sketches/SkjS8AFYX
    	let blohshW = blohsh.width*0.1;
    	let blohshH = blohsh.height*0.1;

    	for (let x = 0; x < windowWidth; x += blohshW){
    		for (let y = 0; y < windowHeight; y += blohshH){
    			image(blohsh, x, y, blohshW, blohshH);
    		}
    	}

    rectMode(CENTER);
	fill(255);
	rect(width/2, height/2, 200, 50, 50);
	fill(0, 255, 0);
	ellipse(width/2-74, height/2, 50, 50);
    }

    this.keyPressed = function() {
        // switch the scene
        this.sceneManager.showScene( Game );
    }
}

// Main games scene constructor function
function Game()
{
    this.setup = function() {
    }

    this.draw = function() {
			background(255,0,0);
    }
} 