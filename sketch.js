var r;
var g;
var b;
var a;
var w;




function setup() 
{
  
  createCanvas(500,500);
  rectMode(CENTER);
	
}

function draw() 
{
  
  background(0);
	angle = 100 ;
	// 40 
  translate( 200 , height * .75 );
  branch(100, PI/4);
	
	
	r = random(252, 239, 55);
	g = random(159, 245, 145);
	b = random(145, 169, 245);
	a = random(200, 255);
	w = random(255, 255, 255);
	

	// colours for the trees
	
	
}

	

function branch(b_length, theta)
{
	
	line(0,0,0,-b_length);
    translate(0,-b_length);
  	
	if(b_length > 4 ) 
  {
	stroke(r, g, b, a); // to make illuminating colour
	strokeWeight(2); 
	push();
	rotate(angle);
	branch(b_length * 0.70);
	rotate(-angle - 5 );
    branch(b_length * 0.70);  
    pop();
	
	  
	 stroke(255, 255, 255);
	 push();
	 translate(90, - b_length)
	  // 90 - much closer to the three, looks like tree pulling apart and joining together 
	  translate(p5.Vector.fromAngle(millis() / 1000, 60)); // for animating the second tree, in citcular motions
	rotate(theta);
    branch(b_length * 0.3); 
    pop();
	  
	 
    }
	

}

