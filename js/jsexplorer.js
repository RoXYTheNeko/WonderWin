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

