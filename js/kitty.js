// elemCreate by Avak

function elemCreate(type,dicoAtt,text){
    var dom = document.createElement(type);
    for(var key in Object.keys(dicoAtt)){
        dom.setAttribute(Object.keys(dicoAtt)[key],dicoAtt[Object.keys(dicoAtt)[key]]);
    }
    dom.innerHTML = text;
    return dom;
}

/*Shutdown*/

function showQHalt() {
	document.getElementById("bgHalt").style.visibility = "visible";
	document.getElementById("questionHalt").style.visibility = "visible";

}

function hideQHalt() {
	document.getElementById("bgHalt").style.visibility = "hidden";
	document.getElementById("questionHalt").style.visibility = "hidden";
}

function triggerShutdown() {
	document.getElementById("halt").style.visibility = "visible";
} 

/*Creer une fenetre*/

function buttonsSelect(tab){
	var butts = elemCreate("div", {class:"button-3d"}, "");
	for(var key in tab) {
		var button;
		switch(tab[key]){
			case "close":
				button = elemCreate("button", {id:"btnClose"}, "");
				button.onclick = function(event) {
					var windoze = event.target.parentElement.parentElement.parentElement;
					windoze.remove();
				}
				break;

			case "resize":
				button = elemCreate("button", {id:"btnResize"}, "");
				break;

			case "minimize":
				button = elemCreate("button", {id:"btnMinimize"}, "");
				break;
		}
		butts.append(button);
	}
	return butts;
}



/*var pos = {150};  // On s'est arrêtés là !*/

function windowCreate(name, prgmTitle, prgmIcon, /*pos,*/ size, butts, docker, execTime) {
	var frame = elemCreate("div", {class:"frame", id:name+execTime}, "");
	var wTopBar = elemCreate("div", {class:"wTopBar", id:name+"Header"+execTime}, "");
	var title = elemCreate("p", {class: "prgmTitle"}, prgmTitle);
	var icon = elemCreate("img", {src: prgmIcon, height: 16, width: 16}, "");
	var itemTask = elemCreate("p", {id: name+"Item"+execTime}, prgmTitle);
	var iconTask = elemCreate("img", {src: prgmIcon, height: 16, width: 16}, "");
	var taskBar = document.getElementById("prgms_bar");

	wTopBar.append(icon); // On assemble prgmIcon dans wTopBar.
	wTopBar.append(prgmTitle); // On assemble title dans wTopBar.
	wTopBar.append(butts); // On assemble les boutons dans wTopBar.
	frame.append(wTopBar); // On assemble wTopBar dans le cadre de la fenêtre.
	frame.append(docker); // On assemble le conteneur dans le cadre de la fenêtre.
	itemTask.prepend(iconTask); // On assemble l'icône dans le boutton du programme.
	taskBar.append(itemTask); // On assemble le boutton du programme dans la bare des tâches.


	frame.style.width=size.width; //On applique la largeur de la fenêtre.
	frame.style.height=size.height; // Puis la largeur.

	return frame; // On renvoie le contour de la fenêtre 
}

/*---------------------------------------
EXPLORER
-----------------------------------------*/

function contentExplorer() {
	var content = elemCreate("div", {}, "");
	/*var ... child*/
	return content;
}

function explorer() {

	var execTime = Date.now()+"";

	var name = "explorer";
	var prgmTitle = "Mes Créations";
	var prgmIcon = "icons/pencil.ico"
	var size = {width: "750px", height: "600px"};
	var butts = buttonsSelect(["minimize", "resize", "close"]);
	var docker = contentExplorer();
 	var win =  windowCreate(name, prgmTitle, prgmIcon, /*pos,*/ size, butts, docker, execTime);  // Appel de la fonction windowCreate dont la frame est stocké dans "win".
 	var desktop = document.getElementById("desktop");
 	desktop.append(win); //Création de la fenêtre dans la div desktop.

 	dragElement(win, name+"Header"+execTime); // On appelle dragElement avec l'id du header.

 	console.log(prgmTitle+" #"+execTime+" opened! so Patate!");
}

var iconCreas = document.getElementById("iconCreas");
iconCreas.ondblclick = explorer;



/*---------------------------------------
MINESWEEPER
-----------------------------------------*/

function minesweeper() {

	var execTime = Date.now()+"";

	var name = "minesweeper";
	var prgmTitle = "Démineur";
	var prgmIcon = "icons/minesweeper.png"
	var size = {width: "178px", height: "258px"};
	var butts = buttonsSelect(["minimize", "close"]);
	var docker = elemCreate("iframe", {src: "prgms/minesweeper/minecore.html", height: "232", width:173, scrolling: "no"});
 	var win =  windowCreate(name, prgmTitle, prgmIcon, /*pos,*/ size, butts, docker, execTime); // Appel de la fonction windowCreate dont la frame est stocké dans "win".
 	var desktop = document.getElementById("desktop");
 	desktop.append(win); //Création de la fenêtre dans la div desktop.

 	dragElement(win, name+"Header"+execTime); // On appelle dragElement avec l'id du header.

 	console.log(prgmTitle+" #"+execTime+" opened! so Patate!");
}

var iconMinesweeper = document.getElementById("iconMinesweeper");
iconMinesweeper.ondblclick = minesweeper;

/*---------------------------------------
CRÉDITS
-----------------------------------------*/

function credits() {

	var execTime = Date.now()+"";

	var name = "credits";
	var prgmTitle = "Crédits";
	var prgmIcon = "icons/text.png"
	var size = {width: "750px", height: "600px"};
	var butts = buttonsSelect(["minimize", "resize", "close"]);
	var docker = elemCreate("iframe", {src: "prgms/credits.html", height: "574", width:746, scrolling: "yes"}, "");
 	var win =  windowCreate(name, prgmTitle, prgmIcon, /*pos,*/ size, butts, docker, execTime); // Appel de la fonction windowCreate dont la frame est stocké dans "win".
 	var desktop = document.getElementById("desktop");
 	desktop.append(win); //Création de la fenêtre dans la div desktop.

 	dragElement(win, name+"Header"+execTime); // On appelle dragElement avec l'id du header.

 	console.log(prgmTitle+" #"+execTime+" opened! so Patate!");
}

var itemCredits = document.getElementById("itemCredits");
itemCredits.onclick = credits;

/*-------------------------------
Gestion du son
-------------------------------*/

var soundstate = true;

function soundInit() {
	var execTime = Date.now()+"";
	var icon = elemCreate("img", {src: "icons/sound_on.png", id: "iconSound"}, "");
	
 	var systray = document.getElementById("systray");
 	systray.prepend(icon); //Création de l'icone dans la div systray.
 	
 	soundstate = true;
 	console.log("Sound initialized at "+execTime+"!");

}
var systray = document.getElementById("systray");
soundInit();


function soundMute(elem) {
	var idIcon = document.getElementById("iconSound");
		if(soundstate = true) {
			elem.muted = true;
			/*elem.pause();*/
			idIcon.remove();
			var icon = elemCreate("img", {src: "icons/sound_off.png", id: "iconSound"}, "");
 			var systray = document.getElementById("systray");
 			systray.prepend(icon); //Création de l'icone dans la div systray.
 			soundstate = false;
 			console.log("Sound muted!");
 			}

			else {
			elem.muted = false;
			/*elem.play();*/
			idIcon.remove();
			var icon = elemCreate("img", {src: "icons/sound_on.png", id: "iconSound"}, "");
 			var systray = document.getElementById("systray");
 			systray.prepend(icon); //Création de l'icone dans la div systray.
 			soundstate = true;
 			var audio = elemCreate("audio", {controls: ""}, "");
			var source = elemCreate("source", {src:"sounds/startup.mp3", type:"audio/mpeg"}, "");
			audio.append(source);
 			audio.play(); // Joue le son 
 			console.log("Ding!");
	}
}

document.getElementById("iconSound").onclick = soundMute;


// Mute tout le contenu de la page
function mutePage() {
    var elems = document.querySelectorAll("video, audio");
    [].forEach.call(elems, function(elem) { soundMute(elem); });
}

