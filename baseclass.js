class baseclass
{

    constructor(x, y,width,height,text,image1) {
        
        this.x =x
        this.y=y
        this.width = width;
        this.height = height;
        this.image = image1
     //   this.image = im;
        this.text1 = text;
      }
      display(){
       
        
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.width,this.height);
        fill(0, 102, 153);
        textAlign(CENTER, CENTER);

        text(this.text1,this.x,this.y)


      }
      isClicked()
      {
       if(mouseX<(this.x + (this.width/2)) && mouseX >(this.x - (this.width/2)) && mouseY<(this.y + (this.width/2))&& mouseY >(this.y - (this.width/2)))
       {
           return true;
       }

      else 
      {
        return false;
      }
      }
    }
