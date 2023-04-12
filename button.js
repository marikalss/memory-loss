class Button{
  
  constructor(name, x, y){
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = width*0.12;
    this.h = height*0.0875;
    this.fill = 0;
    this.pressed = false;
    this.visible = false;
  }
  
  click(x, y){
    if (
      x > this.x-this.w/2 && x < this.x-this.w/2 + this.w && y > this.y-this.h/2 &&y < this.y-(height*0.03) + this.h) {
      this.pressed = true;
      
    }
  }
  
  show(visible){
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    fill(this.fill);
		if(width<=400){ textSize(18)
	}else if(width>=800 && width<1200){ textSize(22);
	}else if(width>=1200 && width<1600){ textSize(26);
	}else if(width>=1600){ textSize(30);
	}
    //textSize(18);
    textAlign(CENTER);
    text(this.name, this.x, this.y+(height*0.015));
    this.visible = visible;
  }
}

let nextcounter = 0;

class NextButton{
  
  constructor(name, x, y){
    this.name = name;
    this.x = x;
    this.y = y;
     this.w = width*0.12;
    this.h = height*0.0875;
    this.fill = 150;
    this.pressed = false;
    this.visible = false;
    this.clickable = false;
  }
  
  click(x, y){
    if (
      x > this.x-this.w/2 && x < this.x-this.w/2 + this.w && y > this.y-this.h/2 &&y < this.y-(height*0.03) + this.h && this.clickable == true) {
      this.pressed = true;    
    }
  }
  
  show(visible){
    rectMode(CENTER);
    fill(this.fill);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    	if(width<=400){ textSize(18)
	}else if(width>=800 && width<1200){ textSize(22);
	}else if(width>=1200 && width<1600){ textSize(26);
	}else if(width>=1600){ textSize(30);
	}
    textAlign(CENTER);
    text(this.name, this.x, this.y+(height*0.015));
    this.visible = visible;
  }
  
  canclick(){
    if (this.clickable == false){
      nextcounter = nextcounter +1
      if (nextcounter >= 100){
        this.fill = 255;
        this.clickable = true;
        nextcounter = 0;
      } 
      }
    // else{
    //     this.clickable = false; 
    // }
    
  }
}