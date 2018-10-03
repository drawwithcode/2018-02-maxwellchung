function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  angleMode(DEGREES);

  frameRate(125);
}

function draw() {
  push();
  translate(width/2,height/2);
  rotate(frameCount*50);
  noFill();
  stroke(255)
  ellipse(220,0,300,200);

  pop();

  push();
  translate(width/2,height/2);
  rotate(frameCount*10);
  noFill();
  stroke(253,210,78);
  ellipse(150,0,300,200);
  pop();

      push();
  translate(width/1,height/2);
  rotate(frameCount*50);
  noFill();
  stroke(255)
  ellipse(20,0,300,200);
  pop();

     push();
  translate(width/90,height/2);
  rotate(frameCount*50);
  noFill();
  stroke(134);
  ellipse(255);
  pop();

         push();
  translate(width/90,height/2);
  rotate(frameCount*1);
  noFill();
  stroke(255);
  ellipse(10,0,400,200);
  pop();

     push();
  translate(width/2,height/2);
  rotate(frameCount*50);
  noFill();
  stroke(255);
  ellipse(134,171,255);
  pop();

      push();
  translate(width/2,height/2);
  rotate(frameCount*10);
  noFill();
  stroke(255);
  ellipse(134,232);
  pop();

      push();
  translate(width/2,height/2);
  rotate(frameCount*3);
  noFill();
  stroke(255);
  ellipse(450,0,300,200);
  pop();

     push();
  translate(width/2,height/2);
  rotate(frameCount*5);
  noFill();

  stroke(255);
  ellipse(1050,0,300,200);
  pop();

	     push();
  translate(width/2,height/2);
  rotate(frameCount*5);
  noFill();

  stroke(253,210,78);
  ellipse(850,0,300,200);
  pop();

     push();
  translate(width/2,height/2);
  rotate(frameCount*115);
  noFill();

  stroke(253,210,78);
  ellipse(650,0,300,200);
  pop();

         push();
  translate(width/2,height/2);
  rotate(frameCount*3);
  noFill();

  stroke(253,210,78);
  ellipse(240,0,100,200);
  pop();

     push();
  translate(width/2,height/2);
  rotate(frameCount*2);
  noFill();

  stroke(255);
  ellipse(240,0,100,200);
  pop();


     push();
  translate(width/2,height/2);
  rotate(frameCount*1);
  noFill();

  stroke(253,210,78);
  ellipse(240,0,100,200);
  pop();


  if (frameCount == 120) {
    noLoop();
  }
}
