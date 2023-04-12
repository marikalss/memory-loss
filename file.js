class File {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.strokeWeight = 0;
  }

  show() {
    stroke(255, 204, 0);
    strokeWeight(this.strokeWeight);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h);
  }

  clicked(x, y) {
    if (
      x > this.x && x < this.x + this.w && y > this.y &&y < this.y + this.h && this.strokeWeight == 0 && state == 0) {
      this.strokeWeight = 4;
      selected = selected+1;
    } else if(x > this.x && x < this.x + this.w && y > this.y &&y < this.y + this.h && this.strokeWeight == 4 && state == 0) {
      this.strokeWeight=0;
      selected = selected-1;
    }
  }
}

class Please {
  constructor(){
    this.x = width*0.08;
    this.y = height*0.1;
    
  }
  
  show(){
  noStroke();
if(width<=400){ textSize(24)
	}else if(width>=800 && width<1200){ textSize(28);
	}else if(width>=1200 && width<1600){ textSize(32);
	}else if(width>=1600){ textSize(36);
	}
  //textSize(24);
  fill(255)
  textAlign(LEFT);
  text('Please select files', this.x, this.y);
 
}
}
