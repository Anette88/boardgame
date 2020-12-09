

// Random method

function randomFunction() {
	var x = Math.floor((Math.random()*6)+1);
	document.getElementById("number").innerHTML = x;
}




const board = document.querySelector(".circles");

function boardGame () {
	for(let i = 1; i <= 30; i++) {
		board.innerHTML += '<div class="circle"><div class="token"></div></div>';
	}
}

boardGame ();
