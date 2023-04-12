let pbloaded = true;
let pg = 0;
let counter = 0;

class ProgressBar{
  
  constructor(){
    this.x = width/2;
    this.y = height/1.75;
    this.pb = 0;
    this.loaded = false;
    this.visible = false;
  }
  
  show(visible){
    rectMode(CENTER);
    fill(0)
    stroke(255)
    strokeWeight(4);
    rect(this.x, this.y, width*0.416, height*0.0625)
    rectMode(CORNER);
    fill(255)
    stroke(255)
    strokeWeight(4);
    rect(this.x - (width*0.2083333333), this.y - (height*0.03125), this.pb, height*0.0625)
    this.visible = visible;
}
  
  loadbar(){
    //console.log(counter);
    if (this.loaded == false){
    counter = counter +1
    if (this.pb >= 0 && counter >= 50){
     this.pb= this.pb+1
    }
    if (this.pb>width*0.083 && counter >= 80+(width*0.083)){
      this.pb = this.pb -1
    }
    if (this.pb>=width*0.083 && counter >=250+(width*0.083)){
      this.pb = this.pb+1
    } 
    if (this.pb>=width*0.4 && counter >= 350+(width*0.2)){
    this.pb = this.pb-1;
    }
    
      if (this.pb>=width*0.083 && counter >=650+(width*0.3)){
      this.pb = this.pb+1
    }
   if (this.pb>=round(width*0.416)){
     if (counter>=round(width*0.6)){
        this.loaded = true;
        counter = 0
       this.pb = 1;
     }
    this.pb = this.pb-1;
    } 
   }
    else{
   this.loaded=false;
 }
}
}