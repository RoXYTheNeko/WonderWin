// elemCreate by Avak

function elemCreate(type,dicoAtt,text){
    var dom = document.createElement(type);
    for(var key in Object.keys(dicoAtt)){
        dom.setAttribute(Object.keys(dicoAtt)[key],dicoAtt[Object.keys(dicoAtt)[key]]);
    }
    dom.innerHTML = text;
    return dom;
}


// Startup Sound

function openExplorer() {
	document.getElementById("explorer").style.visibility = "visible";
	document.getElementById("explorerItem").style.visibility = "visible";
} 

function closeExplorer() {
  	document.getElementById("explorer").style.visibility = "hidden";
	document.getElementById("explorerItem").style.visibility = "hidden";

  }

function resizeExplorer() {
	document.getElementById("explorer").style.height = "100%"; 
  }



/*Minesweeper*/

function openMinesweeper() {
	document.getElementById("minesweeper").style.visibility = "visible";
} 

function closeMinesweeper() {
  	document.getElementById("minesweeper").style.visibility = "hidden";
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

var butts = buttonsSelect(["close", "resize", "minimize"]);

/*var pos = {150};  // On s'est arrêtés là !

function windowCreate(name, pos, size, butts, docker) {


}*/