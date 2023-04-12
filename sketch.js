//version 004: tracks selected and beginning of state machine
//version 005: adding in the button currently
// version 010: filebottom become redundant, currently removing
// version 011: text arrays put in and state template made. Next: make progress bar, tweek each state depending on current path and statement
// version 012: started on splicing! need to edit the random number generated, change max to a variable which minuses when a splice is done

let glitch = [];
let file = [];
let please;
let button = [];
let nextbutton;
let popup;
let progressbar;
let clickcounter = 1;
let sketchrestart = 1;
let textarray;

let message = "";

let selected = 0;
let state = 0;

function preload(){
for (let i = 0; i<10; i++)
	glitch[i] = loadImage('glitch' + i + '.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  restartSketch();
}

function restartSketch(){
  TextReset();
  clickcounter= 0;
  state = 0;
  selected = 0;
  nextcounter = 0;
  pg = 0;
  counter = 0;
  pbloaded = true;
  r = 10;
  please = new Please();
  popup = new Popup();
  progressbar = new ProgressBar();
  

    for (let i = 0; i < 10; i++){
      let x;
      let y;
			let w = width*0.1;
			let h = height*0.27;
      if(i<=4){
      x = (width*0.083) + (w/2+w) * i;
      y = height*0.16
      } if (i>=5){
      x = (width*0.083) + (w/2+w) * (i-5) ;
      y = height*0.16 + h + (h/4);
      }
  let f = new File(x, y, w, h)
  file.push(f);
  } 
    
  
  button[0] = new Button("OK", width*0.141, height*0.875); // ok home
  button[1] = new Button ("YES", width*0.58, height*0.675) // yes right
  button[2] = new Button ("NO", width*0.42, height*0.675) //no left
  button[3] = new Button ("YES", width*0.42, height*0.675) //yes left
  button[4] = new Button ("NO", width*0.58,  height*0.675) // no left
  button[5] = new Button ("OK", width/2, height*0.675) // ok centre
  nextbutton = new NextButton ("NEXT", width/2, height*0.675) // next centre
  
  
}

function mousePressed(){
	//console.log(clickcounter);
	console.log(selected);
	
  clickcounter = clickcounter + 1
  for (let i = 0; i < file.length; i++){
  file[i].clicked(mouseX, mouseY);
  }
  for (let i = 0; i < button.length; i++){
  button[i].click(mouseX, mouseY);
  }
  nextbutton.click(mouseX, mouseY);
}


function draw() {
	
	console.log(state)

	
  if (file.length <= 0 && selected == 0 && state<=12){
    state = 13;
		// for (i = 0; i < 6; i++) {
		// button[i].pressed = false;
		// button[i].visible = false;
		// }
	}
  
  if (file.length <= selected && selected>=1 && state<=12){
    state = 14;
		
	}

  if(state == 0){
     state0();
		Glitch();
  } else if(state == 1){  
    state1();
		Glitch();
  }
  else if(state == 2){
    state2();
		Glitch();
  }else if (state == 3){
  state3();
		Glitch();
  }else if(state==4){
    state4();
		Glitch();
  }else if(state==5){
    state5();
		Glitch();
  }else if(state==6){
    state6();
		Glitch();
  }else if(state==7){
    state7();
		Glitch();
  }else if(state==8){
    state8();
		Glitch();
  }else if(state==9){
    state9();
		Glitch();
  }else if(state==10){
    state10();
		Glitch();
  }else if(state==11){
    state11();
		Glitch();
}else if(state==12){
    state12();
	Glitch();
}else if(state==13){
    state13();
}else if(state==14){
    state14();
}else if(state==15){  
	state15();
}else if(state==16){
    state16();
}else if(state==17){
    state17();
}
}

