function setup() {
    createCanvas(800,900);
  }
  
  function draw() {
     
  

    
   //pink background 
   background('#fae');
   // call createpinktriangle
   createpinktriangle();
   
   // call createsquarerec
   createsquarerec();
   
   // call createblktriangle
   createblktriangle();

   // call createblkcircle
   createblkcircle();

   //call createwhitecircle
   createwhitecircle();

   //call createpflower
   createpflower();

   //call createname
   createname();
   
   //call createellipse
   createellipse();

   //call createcircle
   createcircle();
  




  

   
   
    
 
 
  
  }
  function createpinktriangle()
  {
    triangle(300, 100, 320, 100, 310, 80);
  }
  function createsquarerec()
  {
    square (250, 210, 50);
    rect (70, 40, 90, 60);
  }
  function createblktriangle()
    {
      fill(0);
   triangle(30, 75, 58, 20, 86, 75);
    }
  function createblkcircle()
  {
    fill(0);
   circle(600,60,70);
  }
  function createwhitecircle()
  {
    fill(255);
   circle(100,200,200);
  }
  function createpflower()
  {
    fill(204, 101, 192, 127);
   stroke(127, 63, 120);
    translate(580, 200);
   noStroke();
   for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  }
  function createname()
  {
    text ('Madeline Staples',10,300);
  }
  function createellipse()
  {
    ellipse(90, 240, 100, 90);
  ellipse(40,240,100,90);
  ellipse(10,100,70,40);
  }
  function createcircle()
  {
    circle(100,200,40);
  circle(70,80,90);

  }
  
  
  
  

 