<!---------------------------
Shutdown script
--------------------------->
<div id="bgHalt">

	<div class="center-thing" id="questionHalt">
		<div class="wTopBar"> 
			<p>Arrêter l'ordinateur</p>
			<div class="button-3d">
				<button id="btnClose" onclick="hideQHalt()"></button>
			</div>
		</div>
		<div class="grayBg">
			<button id="comfirmBtn" onclick="triggerShutdown()">Yes</button>
			<button id="comfirmBtn" onclick="hideQHalt()">Noooo!</button>
		</div>

	</div>
</div>

<div class="center-thing" id="halt">
	<strong>It's now safe to turn off<br>
	your computer.</strong>
</div>