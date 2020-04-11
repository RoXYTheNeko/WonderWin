/*

Creer cette div

<div class="center-thing" id="minesweeper" style="visibility: visible;">
	bidule
</div>

*/


/*
En js vanilla
------------------------------------
*/

var body = document.getElementById("body");

var minesweeper = document.createElement("div");
minesweeper.setAttribute("class","center-thing");
minesweeper.setAttribute("id","minesweeper");
minesweeper.setAttribute("style","visibility: visible;");
minesweeper.innerHTML = "bidule";

body.append(minesweeper);

/*
------------------------------------
*/

/*
Avec elemCreate de https://github.com/avakyeramian
------------------------------------
*/

var body = document.getElementById("body");

function elemCreate(type,dicoAtt,text){
    var dom = document.createElement(type);
    for(var key in Object.keys(dicoAtt)){
        dom.setAttribute(Object.keys(dicoAtt)[key],dicoAtt[Object.keys(dicoAtt)[key]]);
    }
    dom.innerHTML = text;
    return dom;
}

var minesweeper = elemCreate("div",{class:"center-thing",id:"minesweeper",style:"visibility: visible;"},"bidule");

body.append(minesweeper);

/*
------------------------------------
*/