//player variable
var x = 100;
var y = 99;

//create a shape when the mouse is clicked
var mouseShapeX = 0;
var mouseShapeY = 0;


//Exit 
var size = 15; 

//moving objects
var squarex = 30;
var squarey = 200;






function setup()
{
    createCanvas(800,600);
}
function draw() 
{
  background(0);
  ellipse(mouseShapeX, mouseShapeY, 15, 50);
     

  //key D
  if(keyIsDown(68))
  {
      x+=5;
  }
  //key A
  if(keyIsDown(65))
  {
      x-=5;
  }
  //key S
  if(keyIsDown(83))
  {
      y+=5;
  }
  //key W
  if(keyIsDown(87))
  {
      y-=5;
  }
  //player
  fill('rgb(255, 255, 255)');
  circle(x,y,50);
  console.log(x+" "+y)
  if (x <= 10 && y >= 300)
  {
    textSize(32);
    fill(255);
    textSize(size);
    text ('You Win',50, 300);
  }
  

  //obstacle 1
  fill('rgb(0,255,0)');
  square(squarex,squarey,50);
  if (squarex <= 800)
  {
      squarex+=10;
  }
  else if (squarex > 800)
  {
      squarex = 10;
  }
  //obstacle 2 
  fill('rbg(255, 204, 0)');
  rect (200,squarey,50,60);
  if (squarey <= 800)
  {
      squarey+=10;
  }
  else if (squarey > 800)
  {
      squarey = 10;
  }
//exit 
textSize(32);
   fill(255);
   textSize(size);
    text ('Exit',10,300);

}
function mouseClicked() 
    {  
      mouseShapeX = mouseX;
      mouseShapeY = mouseY;
    
    }



