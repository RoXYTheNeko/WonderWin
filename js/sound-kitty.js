/*-------------------------------
Gestion du son
-------------------------------*/
/*
function soundInit() {
	console.log("Si "+);
	var execTime = Date.now()+"";
	var icon = elemCreate("img", {src: "icons/sound_on.png", id: "iconSound"}, "");
	
 	var systray = document.getElementById("systray");
 	systray.prepend(icon); //Création de l'icone dans la div systray.
 	
 	getMuteState = false;
 		console.log("Si "+);
 	console.log("Sound initialized at "+execTime+"!");

}
var systray = document.getElementById("systray");
soundInit();

// Mute tout le contenu de la page
function mutePage(bool) {
    var elemsMedia = document.querySelectorAll("video, audio");
	console.log("mutePage "+bool);
	for(var mediaElements in elemsMedia) {
		elemsMedia[mediaElements].muted=bool;
	}
}

function getMuteState() {
    var elemsMedia = document.querySelectorAll("video, audio");
		return elemsMedia[0].muted;
}

function soundMute() {
	var idIcon = document.getElementById("iconSound");
	var state = getMuteState;
		if(!state.muted) {
			mutePage(true);
			idIcon.setAttribute("src", "icons/sound_off.png");
 			var systray = document.getElementById("systray");
 			console.log("Sound muted!");
 			}

			else {
			mutePage(false);
			idIcon.setAttribute("src", "icons/sound_on.png");
 			var systray = document.getElementById("systray");
 			var audio = elemCreate("audio", {controls: ""}, "");
			var source = elemCreate("source", {src:"sounds/startup.mp3", type:"audio/mpeg"}, "");
			audio.append(source);
 			audio.play(); // Joue le son 
 			console.log("Ding!");
	}
}

document.getElementById("iconSound").onclick = soundMute();

*/
