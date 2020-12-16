//let blohsh;
let studio;
let billieback;

var brushes = [];
var blohshes;
var billielogo;
var billielogoImg;
var blohsh;
var blohshImg;


let screen = 0;
let mgr;

function preload() {
	blohshImg = loadImage('Assets/Blohsh.png');
    studio = loadImage('Assets/billiestudio.jpg');
    sketchbook = loadImage('Assets/sketchbook.png');
    billieback = loadImage('Assets/billieback.png');
    //badguy = loadSound('Assets/badguy.mp3');
    billielogoImg = loadImage('Assets/billielogo.png');
}

function setup() {
	createCanvas(1280, 720);
    background(0, 0, 80);

    blohshess = new FallingBlohshes();
    blohshes = new Group();
	mgr = new SceneManager();

	// Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene ( Intro );
    mgr.addScene ( BlohshAnimation );
    mgr.addScene ( Studio );
    mgr.addScene ( Sketchbook );
    mgr.addScene ( InjectionScene );
  //  mgr.addScene ( Animation3 );

    mgr.showNextScene();

	// for (let i = 0; i < 50; i++) { 
 //    syringes.push(new Syringe());
  }


function draw() {
	background(0);

	mgr.draw();
	
}

function mouseClicked()
{
    mgr.handleEvent("mouseClicked");
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
        case '3':
            mgr.showScene( Studio );
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
    blohshess.setup();

    }

    this.draw = function() {

        blohshess.draw();

    	//Grid of Blohsh
    	//Grid inspired by https://editor.p5js.org/joeyklee/sketches/SkjS8AFYX
    	// let blohshW = blohsh.width*0.1;
    	// let blohshH = blohsh.height*0.1;

    	// for (let x = 8; x < width; x += blohshW){
    	// 	for (let y = 25; y < height-25; y += blohshH){
    	// 		image(blohsh, x, y, blohshW, blohshH);

        //badguy.play();
    		//}
    	//}
    }

    this.keyPressed = function() {
        // switch the scene
        this.sceneManager.showScene( BlohshAnimation );
    }
}

// Main games scene constructor function
function BlohshAnimation()//Animated Blohsh when switching between scenes
{
    this.setup = function() {
    }

    this.draw = function() {
        let blohshW = blohsh.width*0.1;
        let blohshH = blohsh.height*0.1;

		background(255,0,0);
        image(blohsh, width/2,height/2, blohshW, blohshH);
    }
    
    this.keyPressed = function() {
        // switch the scene
        this.sceneManager.showScene( Studio );
    }
}

function Studio()//Studio where you can click around to explore
{
    this.setup = function() {
    background(0,255,0);
    }

    this.draw = function() {
        let blohshW = blohsh.width*0.03;
        let blohshH = blohsh.height*0.03;

        //noTint();
        imageMode (CENTER);
        image(studio, width/2, height/2, width, height);
        //tint(0, 0, 0);
        image(blohsh, 125, 75, blohshW, blohshH);//book
        image(blohsh, 100, 600, blohshW, blohshH);//piano keyboard
    }

    this.mouseClicked = function() {
        this.sceneManager.showScene( Sketchbook );
    }
    this.keyPressed = function() {
        // switch the scene
        this.sceneManager.showScene( InjectionScene );
    }
} 

function Sketchbook()//Billie's sketchbook. Starts with her sketches. Last page is where user can use Billie-inspired brushes to make their own sketch.
{
    this.setup = function() {
    }

    this.draw = function() {

        background(255);
        image(sketchbook, width/2, height/2);
        //brushes[].crosses();
        //brushes[i].crosses();
    }
    
    // this.keyPressed = function() {
    //     // switch the scene
    //     this.sceneManager.showScene( Studio );
    // }
    this.mouseClicked = function() {
    //brushes.push(new Brush(mouseX, mouseY));
    var c = new Brushes(mouseX, mouseY);
    brushes.push(c);
    }
}

function InjectionScene() 
//Injection scene uses the syringe from Alex's "Death Row" project. I was able to isolate the syringe, but I can't get it to allow the user to inject liquid.
//https://www.openprocessing.org/sketch/997295
{
    this.setup = function() {
    }

    this.draw = function() {
    	syringe = new Injection();

        image(billieback, width/2, height/2);
        syringe.display();
    }
    
    // this.keyPressed = function() {
    //     // switch the scene
    //     this.sceneManager.showScene( Studio );
    // }
}