<!---------------------------
Explorer 
--------------------------->


<div class="center-thing" id="explorer">
	<div class="wTopBar" id="explorerheader"> 
		<p>Mes Créations</p>
		<div class="button-3d">
			<button id="btnMinimize" onclick="closeExplorer()"></button>
			<button id="btnMaximize" onclick="resizeExplorer()"></button>
			<button id="btnClose" onclick="closeExplorer()"></button>
		</div>
	</div>

</div>

<script type="text/javascript" src="js/dragme.js"></script>



<!---------------------------
Minesweeper
--------------------------->


<div class="center-thing" id="minesweeper">
	<div class="wTopBar"> 
		<p>Démineur</p>
		<div class="button-3d">
			<button id="btnMinimize" onclick="closeMinesweeper()"></button>
			<button id="btnClose" onclick="closeMinesweeper()"></button>
		</div>
	</div>
	<iframe src="prgms/minesweeper/minecore.html" height="223" width="173" scrolling="no"></iframe>
</div>

<!---------------------------
Crédits
--------------------------->


<div class="center-thing" id="credits">
	<div class="wTopBar"> 
		<p>Crédits</p>
		<div class="button-3d">
			<button id="btnMinimize" onclick="closeCredits()"></button>
			<button id="btnMaximize" onclick="resizeCredits()"></button>
			<button id="bntClose" onclick="closeCredits()"></button>
		</div>
	</div>
	<iframe src="prgms/credits.html" width="748" height="574" scrolling="yes"></iframe>
</div>

<!---------------------------
Startup Sound script
--------------------------->

<!--  <audio id="startup-sound" controls">
  <source src="sounds/QUACK.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>  -->
