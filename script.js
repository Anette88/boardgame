

// Random method

function randomFunction(secondValue) {
	var x = Math.floor((Math.random()*6)+1);
	document.getElementById("number").innerHTML = x;


	var fValue = document.getElementById("number");
      number.innerHTML = parseInt(fValue.innerHTML) +
      parseInt(secondValue);
}




const board = document.querySelector(".circles");

function boardGame () {
	for(let i = 1; i <= 30; i++) {
		board.innerHTML += '<div class="circle"><div class="token"></div></div>';
	}
}

boardGame ();
