let screen = 0;
let mgr;

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