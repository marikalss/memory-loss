let s;
let start = true;
let assigned = false;
let r = 10;
let shadow = false;


//
function state0() {
	shadow = false;
	background(0);
	button[0].show();
	please.show();
	start = true;
	button[2].pressed = false;
	Glitch();



	if (selected >= 6 && button[0].pressed == true) {
		state = 1;
		button[0].pressed = false;
	}

	if (state == 0 && selected <= 5 && button[0].pressed == true && start == true) {
		if (assigned == false) {
			s = int(random(0, r));
			if (file[s].strokeWeight == 0) {
				start = false;
				assigned = true;
				state = 2;
			}
		} else if (start == true && assigned == false) {
			s = int(random(0, r));
		} else if (file[s].strokeWeight == 4) {
			start = true;
			assigned = false;
		} else state = 2;
	}



	for (let i = 0; i < file.length; i++) {
		file[i].show();
		Glitch();
	}

}
//

//
function state1() {
	//too many
	if (shadow == false) {
		shadow = true;
		background(0, 100)
	}

	button[0].pressed = false;
	popup.show();
	button[5].show();
	message = "Memory full. \nPlease select less files.";


	if (state == 1 && button[5].pressed == true) {
		state = 0;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}
}
//

//
function state2() {
	if (shadow == false) {
		shadow = true;
		background(0, 100)
	}
	button[0].pressed = false;

	message = textarray[s][0];

	popup.show();
	button[1].show();
	button[2].show();
	if (state == 2 && button[1].pressed == true) {
		state = 3;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}
	if (state == 2 && button[2].pressed == true) {
		state = 0;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}
}
//

//
function state3() {
	message = textarray[s][1];
	popup.show();
	button[1].show();
	button[2].show();


	if (state == 3 && button[1].pressed == true) {
		state = 4;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}


	if (state == 3 && button[2].pressed == true) {
		state = 0;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}


}
//

//
function state4() {
	message = textarray[s][2];
	popup.show();
	//console.log(message)
	if (message == "Analysing 01575.mov..." || message == "Analysing 0030.mov...") {
		progressbar.show(true);
		progressbar.loadbar();
		// }else if (message == "Analysing 0030.mov *long progression bar*"){
		//   progressbar.show(true);
		//   progressbar.loadbar();
	} else {
		button[1].show(true);
		button[2].show(true);
	}


	if (state == 4 && button[1].pressed == true && button[1].visible == true) {
		state = 5;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}


	if (state == 4 && button[2].pressed == true && button[2].visible == true) {
		state = 0;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}


	if (state == 4 && progressbar.loaded == true && progressbar.visible == true) {
		state = 5;
		progressbar.loaded = false;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}


}
//

//
function state5() {
	message = textarray[s][3];
	popup.show();

	if (message == "Do you know what a vcf file is?") {
		button[3].show(true);
		button[4].show(true);
	} else {
		button[1].show(true);
		button[2].show(true);
	}

	if (state == 5 && button[1].pressed == true && button[1].visible == true) {
		state = 6;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}


	if (state == 5 && button[2].pressed == true && button[2].visible == true) {
		state = 0;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}
	if (state == 5 && button[3].pressed == true && button[3].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 0;
	}


	if (state == 5 && button[4].pressed == true && button[4].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 6;
	}

}
//

//
function state6() {
	//console.log(nextbutton.clickable)
	//console.log(nextbutton.pressed)
	message = textarray[s][4];
	popup.show();

	if (message == "Reading files. Please wait.") {
		nextbutton.show(true);
		nextbutton.canclick();
	} else {
		button[1].show(true);
		button[2].show(true);
	}

	if (state == 6 && button[1].pressed == true && button[1].visible == true) {
		state = 7;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}


	if (state == 6 && button[2].pressed == true && button[2].visible == true) {
		state = 0;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}

	if (state == 6 && nextbutton.pressed == true && nextbutton.visible == true) {
		state = 7;
		nextbutton.pressed = false;
		nextbutton.clickable = false;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
		}
	}

}
//

//
function state7() {
	message = textarray[s][5];
	popup.show();
	if (message == "When you grow old, won't you want to remember them?") {
		button[3].show(true);
		button[4].show(true);
	} else {
		button[1].show(true);
		button[2].show(true);
	}

	if (state == 7 && button[1].pressed == true) {
		state = 8;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}


	if (state == 7 && button[2].pressed == true) {

		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 0;
	}

	if (state == 7 && button[3].pressed == true && button[3].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 0;
	}


	if (state == 7 && button[4].pressed == true && button[4].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 8;
	}

}
//

//
function state8() {
	message = textarray[s][6];
	popup.show();

	if (message == "It would be nice to show them. No?") {
		button[3].show(true);
		button[4].show(true);
	} else {
		button[1].show(true);
		button[2].show(true);
	}

	if (state == 8 && button[1].pressed == true && button[1].visible == true) {
		state = 9;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}

	}


	if (state == 8 && button[2].pressed == true && button[2].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 0;
	}


	if (state == 8 && button[3].pressed == true && button[3].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 0;
	}


	if (state == 8 && button[4].pressed == true && button[4].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 9;
	}

}
//

//
function state9() {

	message = textarray[s][7];
	popup.show();

	if (message == "Folder 001367 and it's contents has been deleted." || message == "DC_7682 deleted." || message == "DC_9862 deleted.") {
		button[5].show(true);
	} else if (message == "Deleting...") {
		progressbar.show(true);
		progressbar.loadbar();
	} else if (message == "It would be nice to show them. No?") {
		button[3].show(true);
		button[4].show(true);
	} else {
		button[1].show(true);
		button[2].show(true);
	}

	//YES 
	if (state == 9 && button[1].pressed == true && button[1].visible == true) {
		state = 10;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}

	}


	//NO
	if (state == 9 && button[2].pressed == true && button[2].visible == true) {

		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 0;
	}


	// OK (for textarray index 1 || can be added for any future ones)
	if (state == 9 && button[5].pressed == true && button[5].visible == true) {
		if (message == "Folder 001367 and it's contents has been deleted." || message == "DC_7682 deleted." || message == "DC_9862 deleted.") {
			state = 10;
		}
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}

	//progress bar
	if (state == 9 && progressbar.loaded == true && progressbar.visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 10;
		progressbar.loaded = false;
	}

	// YES switch
	if (state == 9 && button[3].pressed == true && button[3].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 0;
	}

	//NO switch
	if (state == 9 && button[4].pressed == true && button[4].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		state = 10;
	}


}
//

//
function state10() {
	//console.log(button[1].visible)
	message = textarray[s][8];
	popup.show();

	if (message == "Contents included work files. Good luck redoing all that work. Glad I am just a computer. " || message == "01575.mov deleted." || message == "0030.mov deleted." || message == "Correction: DC_7682 contained a group picture with friends." || message == "Correction: DC_9682 contained a family picture.") {
		button[5].show(true);
	} else {
		button[1].show(true);
		button[2].show(true);
	}

	if (state == 10 && button[1].pressed == true && button[1].visible == true) {
		state = 11;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}


	if (state == 10 && button[2].pressed == true && button[2].visible == true) {
		state = 0;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}


	if (state == 10 && button[5].pressed == true && button[5].visible == true) {
		//  delete file[s] 
		// delete textarray[s];
		file.splice(s, 1);
		textarray.splice(s, 1)
		r = r - 1;
		start = true;
		assigned = false;
		state = 0;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}


}
//

//
function state11() {
	message = textarray[s][9];
	popup.show();
	if (message == "DC_04512 deleted." || message == "Reading files completed. Files contain images and videos prior to age 10. " || message == "important.vcf deleted." || message == "File deleted. I don't trust the cloud.") {
		button[5].show(true);
	} else {
		button[1].show(true);
		button[2].show(true);
	}

	if (state == 11 && button[1].pressed == true && button[1].visible == true) {
		state = 12;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}


	if (state == 11 && button[2].pressed == true && button[2].visible == true) {
		state = 0;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}


	if (state == 11 && button[5].pressed == true && button[5].visible == true) {
		if (message == "DC_04512 deleted." || "important.vcf deleted." || "File deleted. I don't trust the cloud.") {
			file.splice(s, 1);
			textarray.splice(s, 1)
			r = r - 1;
			state = 0;
			start = true;
			assigned = false;
		} else if (message == "Reading files completed. Files contain images and videos prior to age 10. ") {
			state = 12
		}
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}


}
//

//
function state12() {
	message = textarray[s][10];
	popup.show();

	if (message == "Folder 4423 deleted." || message == "audio1.mp3 deleted.") {
		button[5].show(true);
	} else {
		button[1].show(true);
		button[2].show(true);
	}


	if (state == 12 && button[1].pressed == true && button[1].visible == true) {
		state = 13;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}


	if (state == 12 && button[2].pressed == true && button[2].visible == true) {
		state = 0;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}

	if (state == 12 && button[5].pressed == true && button[5].visible == true) {
		if (message == "Folder 4423 deleted.") {
			file.splice(s, 1);
			textarray.splice(s, 1)
			r = r - 1;
			state = 0;
			start = true;
			assigned = false;
		} else if (message == "audio1.mp3 deleted.") {
			file.splice(s, 1);
			textarray.splice(s, 1)
			r = r - 1;
			state = 0;
			start = true;
			assigned = false;
		}
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}
}
//

//
function state13() {
	background(0);
	message = "All files deleted. Would you like to continue to your new device?";
	popup.show();
	button[1].show(true);
	button[2].show(true);

	if (state == 13 && button[1].pressed == true && button[1].visible == true) {
		state = 16;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}


	if (state == 13 && button[2].pressed == true && button[2].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		file.splice(0, file.length);
		textarray.splice(0, textarray.length);
		restartSketch();
		sketchrestart = sketchrestart + 1;
	}
}
//

//
function state14() {
	background(0);
	message = "Unselected files deleted. Would you like to continue to your new device?";
	popup.show();
	
	button[1].show(true);
	button[2].show(true);

	if (state == 14 && button[1].pressed == true && button[1].visible == true) {
		state = 16;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}

	if (state == 14 && button[2].pressed == true && button[2].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		file.splice(0, file.length);
		textarray.splice(0, textarray.length);
		restartSketch();
		sketchrestart = sketchrestart + 1;
	}
}

function state15() {
	background(0);
	image(glitch[9], 0, 0, width, height)
	message = "Data corrupted. All files lost. Continue to new device?";
	popup.show();
	
	button[1].show(true);
	button[2].show(true);

	if (state == 15 && button[1].pressed == true && button[1].visible == true) {
		state = 16;
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
	}

	if (state == 15 && button[2].pressed == true && button[2].visible == true) {
		for (i = 0; i < 6; i++) {
			button[i].pressed = false;
			button[i].visible = false;
		}
		file.splice(0, file.length);
		textarray.splice(0, textarray.length);
		restartSketch();
		sketchrestart = sketchrestart + 1;
	}
}

function state16() {
	background(0);
	popup.show();
	message = "Welcome to your new device. Press 'OK' to set up.";

	button[5].show(true);

	if (state == 16 && button[5].pressed == true && button[5].visible == true) {
		state = 17
	}
}

function state17() {
	background(0);

	if (width <= 400) {
		textSize(24)
	} else if (width >= 800 && width < 1200) {
		textSize(28);
	} else if (width >= 1200 && width < 1600) {
		textSize(32);
	} else if (width >= 1600) {
		textSize(36);
	}
	fill(255)
	textAlign(CENTER);
	text('Thank you for playing Memory Loss. If you would like to know how to prevent losing your data when migrating, please refer to Memory Loss: A guide to computer migration and safely transferring your data. \n \n If you would like to replay Memory Loss, please reload the browser.', width / 2, height / 1.5, width / 2.5, height);
}

