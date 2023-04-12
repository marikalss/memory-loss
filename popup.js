class Popup{
  
  constructor (line1, line2){
    this.x = width/2;
    this.y = height/2;
  }
  
  show(){
  rectMode(CENTER);
    fill(0);
    strokeWeight(5);
    stroke(255);
    rect(this.x, this.y, width*0.5, height*0.6);
    textAlign(CENTER);
    noStroke();
    fill(255);
    if(width<=400){ textSize(20)
	}else if(width>=800 && width<1200){ textSize(24);
	}else if(width>=1200 && width<1600){ textSize(28);
	}else if(width>=1600){ textSize(32);
	}
    text(message, this.x, this.y+(height*0.025), width*0.3, height/3)
  }
  
}