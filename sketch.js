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

/* I have attempted the recursive pattern tree assingment, I attempted in making the tree change numerous colours as well added the animatuon of one of the tree's split, moving in circular motion  and gathering together to 'form of the tree' almost like showing how the first and main tree was made. My code managed to do so as the tree flashes different 3 colours and creates an illuminating colour. The broken tree pieces also moves outer part of canvas to the centre. I was able to achieve the animated part due to p5.Vector.fromAngle and colours were made in variales then implemented in the stroke as normal colours. I am satifised with how it looks overall as it looks somewhat 3d, however I would like to make more trees next time with similar colour effect however slow down the trasnition between the colours as it's too fast and it's hard to distinguish which colours were used. */ 

