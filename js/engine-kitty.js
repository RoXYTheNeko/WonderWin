// elemCreate by Avak

function elemCreate(type,dicoAtt,text){
    var dom = document.createElement(type);
    for(var key in Object.keys(dicoAtt)){
        dom.setAttribute(Object.keys(dicoAtt)[key],dicoAtt[Object.keys(dicoAtt)[key]]);
    }
    dom.innerHTML = text;
    return dom;
}

/*Creer une fenetre*/

function buttonsSetup(tab){
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
