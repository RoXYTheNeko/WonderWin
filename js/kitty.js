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
	var butts = buttonsSetup(name, ["minimize", "resize", "close"], execTime);
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
	var butts = buttonsSetup(name, ["minimize", "close"], execTime);
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
	var butts = buttonsSetup(name, ["minimize", "resize", "close"], execTime);
	var docker = elemCreate("iframe", {src: "prgms/credits.html", height: "574", width:746, scrolling: "yes"}, "");
 	var win =  windowCreate(name, prgmTitle, prgmIcon, /*pos,*/ size, butts, docker, execTime); // Appel de la fonction windowCreate dont la frame est stocké dans "win".
 	var desktop = document.getElementById("desktop");
 	desktop.append(win); //Création de la fenêtre dans la div desktop.

 	dragElement(win, name+"Header"+execTime); // On appelle dragElement avec l'id du header.

 	console.log(prgmTitle+" #"+execTime+" opened! so Patate!");
}

var itemCredits = document.getElementById("itemCredits");
itemCredits.onclick = credits;

function shutdown() {

	var execTime = Date.now()+"";

	var name = "shutdown";
	var prgmTitle = "Arrêter l'ordinateur ?";
	var prgmIcon = "icons/shutdown.png"
	var size = {width: "300px", height: "200px"};
	var butts = buttonsSetup(name, ["close"], execTime);
	var docker = elemCreate("iframe", {src: "_blank", height: "290", width:190, scrolling: "no"}, "");
 	var win =  windowCreate(name, prgmTitle, prgmIcon, /*pos,*/ size, butts, docker, execTime); // Appel de la fonction windowCreate dont la frame est stocké dans "win".
 	var bgHalt = document.getElementById("bgHalt");
 	var desktop = document.getElementById("desktop");
 	desktop.append(win); //Création de la fenêtre dans la div desktop.

 	dragElement(win, name+"Header"+execTime); // On appelle dragElement avec l'id du header.

 	console.log(prgmTitle+" #"+execTime+" opened! so Patate!");
}