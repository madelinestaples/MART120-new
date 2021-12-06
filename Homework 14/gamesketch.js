//player variable
var x = 100;
var y = 99;

//create a shape when the mouse is clicked
var mouseShapeX = 0;
var mouseShapeY = 0;

//create a shape when the mouse is pressed
var mousepressX = 1;
var mousepressY = 1;


//Exit 
var size = 15; 

//moving objects
var squarex = 30;
var squarey = 200;

//declare the arrays 
var myXs = [];
var myYs = [];
var myDiameters = [];





function setup()
{
    createCanvas(800,600);
    myXs[0] = 50;
    myYs[0] = 50;
    myDiameters[0] = 25;

    myXs[1] = 150;
    myYs[1] = 150;
    myDiameters[1] = 125;
    myXs[2] = 300;
    myYs[2] = 300;
    myDiameters[2] = 130;
}
function draw() 
{
  background(0);
  for(var i = 0; i < myXs.length; i++)
  {
    circle(myXs[i],myYs[i],myDiameters[i]);
  }
  
  
  fill(13, 145, 14);
  ellipse(200, 50, 50, 60);
  circle (170,100,40);
  triangle(30,90,58,20,86,75);
  square(mousepressX,mousepressY,50,60);
  
  
 //call createBorders function
 createBorders();

  ellipse(mouseShapeX, mouseShapeY, 15, 50);

  //call createExit function
  createExit();

  //call createCharacter function
  createCharacter();

 //call createCharacterMovement function
 createCharacterMovement();

 //call createmouseclicked
 //createmouseClicked();

 //call createmousepressed
 createmousePressed();

 //call createobstacles
 createObstacles();

 //call createMoveObstacles
 createMoveObstacles();

 //call createYouWin 
//createYouWin();

//call createWinner
createWinner();



 
  
  
  

 
  
 
  


}
function createCharacter()
{
    fill('rgb(255, 255, 255)');
    circle(x,y,50); 
}

function createWinner()
{
    console.log(x+" "+y)
  if (x <= 10 && y >= 300)
  {
createYouWin();
  }
}

function createBorders()
{
  //top border
  rect(0,0,width,10);
  //left border
  rect(0,0,10,height);
  //bottom border
  rect(0, height-10,width, 10);
  // right upper border
  rect(width-10,0,10,height-50);  
}




function createYouWin()
{
    textSize(32);
    fill(255);
    textSize(size);
    text ('You Win',50, 300);
}

function createExit()
{
   //exit 
textSize(32);
fill(255);
textSize(size);
 text ('Exit',10,300); 
}
function createObstacles()
{
    //obstacle 1
  fill('rgb(0,255,0)');
  square(squarex,squarey,50);
  //obstacle 2 
  fill('rbg(255, 204, 0)');
  rect (200,squarey,50,60);
}
function createMoveObstacles()
{
    if (squarex <= 800)
  {
      squarex+=10;
  }
  else if (squarex > 800)
  {
      squarex = 10;
  }
  if (squarey <= 800)
  {
      squarey+=10;
  }
  else if (squarey > 800)
  {
      squarey = 10;
  }
}


function createCharacterMovement()
{
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
}
 
     
 
     
 
function mouseClicked() 
    {  
      mouseShapeX = mouseX;
      mouseShapeY = mouseY;
    
    }

function createmousePressed()
{
  mousepressX = mouseX;
 mousepressY = mouseY;
}



