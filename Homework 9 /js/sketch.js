var circleX = 70;
var circleY = 80;
var circleDirection = -5;
var circleDirection2 = 1;

//diagonal circle
var dicircleX = 200;
var dicircleY = 40;
var dicircleDirection = -10;

//text
var size = 22;
var count = 0;
var sizeDirection = 2;




function setup()
{
    createCanvas(500, 600,);
}
function draw()
{
    background(220);
    
    point 
    line (30,20,400, 75);
    line (40, 80, 30 , 20);
    fill('rgb(0,255,0)');
    //square
    square (250, 210, 50);
    rect (70, 40, 90, 60);
    
   

    triangle(30, 75, 58, 20, 86, 75);
    triangle (40, 70, 90, 20, 86, 75);
    //diagonal moving circle
    circle (dicircleX, dicircleY, 50)
    dicircleX+= dicircleDirection;
    dicircleY+= dicircleDirection;
    if(dicircleX <=1 || dicircleX >= 482) {
        dicircleDirection *= -1;

    }
    if(dicircleY <=1 || dicircleY >=482){
        dicircleDirection *=-1;
    }


    

    fill('rgb(0,255,0)');
    //circle 1
    circle(circleX, 300, 50);
    circleX+= circleDirection;
   if(circleX <= 1 || circleX >= 482) {
    
      
        circleDirection *= -1;
    }
   
   if (circleX <= 25) {
  //      circleX+=450;
}




    //circle 2
    circle(190, circleY, 50);
    circleY+= circleDirection2;
   if(circleY <= 1 || circleY >= 482) 
    {
      
        circleDirection2 *= -1;
    }
textSize(32);
    text ('My Artwork', 10, 200);

   fill(51);
   textSize(size);
   size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }

   text ('Madeline Staples',10,300);

}