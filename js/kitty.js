// elemCreate by Avak

function elemCreate(type,dicoAtt,text){
    var dom = document.createElement(type);
    for(var key in Object.keys(dicoAtt)){
        dom.setAttribute(Object.keys(dicoAtt)[key],dicoAtt[Object.keys(dicoAtt)[key]]);
    }
    dom.innerHTML = text;
    return dom;
}


/*Crédits*/

function openCredits() {
	document.getElementById("credits").style.visibility = "visible";
} 

function closeCredits() {
  	document.getElementById("credits").style.visibility = "hidden";
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

/*
function selectOn() {
	 document.body.style.backgroundColor = "#0b7bcd"; 
}

function selectOff() {
	 document.body.style.backgroundColor = "transparent"; 
}*/

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

function windowCreate(name, wTitle, /*pos,*/ size, butts, docker, execTime) {
	var frame = elemCreate("div", {class:"frame", id:name+execTime}, "");
	var wTopBar = elemCreate("div", {class:"wTopBar", id:name+"Header"+execTime}, "");
	var title = elemCreate("p", {}, wTitle);

	wTopBar.append(title); // On assemble title dans wTopBar.
	wTopBar.append(butts); // On assemble les boutons dans wTopBar.
	frame.append(wTopBar); // On assemble wTopBar dans le cadre de la fenêtre.
	frame.append(docker); // On assemble le conteneur dans le cadre de la fenêtre.

	frame.style.width=size.width;
	frame.style.height=size.height;

	return frame;
}

/*---------------------------------------
EXPLORER
-----------------------------------------*/

function explorer() {

	var execTime = Date.now()+"";

	var name = "explorer";
	var wTitle = "Mes Créations";
	var size = {width: "750px", height: "600px"};
	var butts = buttonsSelect(["minimize", "resize", "close"]);
	var docker = elemCreate("div", {class:"docker"}, "LOLILOL");

 	var win =  windowCreate(name, wTitle, /*pos,*/ size, butts, docker, execTime);
 	var desktop = document.getElementById("desktop");
 	desktop.append(win);

 	dragElement(win, name+"Header"+execTime); // On appelle dragElement avec l'id du header.

 	console.log(wTitle+" #"+execTime+" opened! so Patate!");
}

var iconCreas = document.getElementById("iconCreas");
iconCreas.ondblclick = explorer;

/*---------------------------------------
MINESWEEPER
-----------------------------------------*/

function minesweeper() {

	var execTime = Date.now()+"";

	var name = "minesweeper";
	var wTitle = "Démineur";
	var size = {width: "178px", height: "258px"};
	var butts = buttonsSelect(["minimize", "close"]);
	var docker = elemCreate("iframe", {src: "prgms/minesweeper/minecore.html", height: "223", width:173, scrolling: "no"});

 	var window =  windowCreate(name, wTitle, /*pos,*/ size, butts, docker, execTime);
 	var desktop = document.getElementById("desktop");
 	desktop.append(window);

 	dragElement(window, name+"Header"+execTime); // On appelle dragElement avec l'id du header.

 	console.log(wTitle+" #"+execTime+" opened! so Patate!");
}

var iconMinesweeper = document.getElementById("iconMinesweeper");

iconMinesweeper.ondblclick = minesweeper;