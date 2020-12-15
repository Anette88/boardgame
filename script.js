

// Random method

let diceRoll;
let player1Score = 0;


function rollDice(secondValue) {
diceRoll = Math.floor((Math.random()*6)+1);
	document.getElementById("number").innerHTML = diceRoll;

	player1Score = player1Score + diceRoll;
}





//creating board

const board = document.querySelector(".circles");

let makeCircle;

function boardGame () {
	for(let makeCircle = 1; makeCircle <= 30; makeCircle++) {
		board.innerHTML += `<div class="circle">${makeCircle}</div>`;
	}
}







//<div class="token"></div>


boardGame ();
