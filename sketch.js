
var box1,im, a,b,n=12,count = 0,ic=0;
var btnimg,btn1,issliding = false,y1=0;
function preload()
{
     im= loadImage("sprites/PicsArt.png")
     btnimg = loadImage("sprites/arrow.png")

}
function setup(){
 createCanvas(windowWidth, windowHeight);
   ic=0
     a= floor(n/3);
     
    b = n%3;
   // btn = createSprite(10,10,100,100);
  //  btn.setCollider("rectangle", 0, 0, 50, 50, 0);
//btn.shapeColor = "blue";
//btn.debug = true;
   // btn.addImage(btnimg);
  //  btn.scale = 0.1;
  btn1 =  new baseclass(windowWidth/2,windowHeight*9/10,windowWidth/6,windowWidth/6,'',btnimg);
}

function mouseClicked()
{
    if (issliding)
    {
        return false;
    }

  if(btn1.isClicked())
  {
    issliding = true;
    ic = ic + 12;
    console.log("ic inside isclicked " + ic)
    y1 = 600;
  }

  return false;

}

function draw(){
    count = 0;
    background("white");
    if(issliding){
    y1 = y1 - 30;
    }
    if(!issliding){
    btn1.display();
    }
    for (var i=0;i<a;i++)
    {
        for (var j=0;j<3;j++)
       {
           console.log("ic -- " + ic)
           var level_no = (count+ic)
    box1 =  new baseclass( windowWidth/3+(j*windowWidth/6),y1+windowWidth/3+(i*windowWidth/6),windowWidth/6,windowWidth/6, 'Level '+ level_no,im);
    box1.display();
    count++;
       }
    }
    for(var k=0; k<b;k++)
        {
            var level_no = (count+ic)

            box1 =  new baseclass(windowWidth/3+(k*windowWidth/6),y1+windowWidth/3+(a*windowWidth/3),winsdowWidth/6,windowWidth/6, 'Level ' + level_no,im);

    box1.display();
        }

       if(y1<=0) 
       {
           issliding = false;
       }

}