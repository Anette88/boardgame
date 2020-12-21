let total = 0;
const totalSteps = 30;

function rollDice() {
	const newRoll = Math.floor((Math.random() * 6) + 1);
	total = total + newRoll;
	// got to winners page 
	if (total >= totalSteps) {
		location.href = "winner.html";
	}
	console.log(total);
	drawToken();
}


const board = document.querySelector(".circles");

function drawBoard() {
	for (let i = 1; i <= totalSteps; i++) {
		board.innerHTML += `<div class="circle" id="${i}">${i}</div>`;
	}
}

drawBoard();


function drawToken() {
	// clear previous token

	// get all circles
	const circles = document.querySelectorAll(".circle");

	// loop through the cirles and make the innerHTML just a number, this will remove the token if it had one
	for (let i = 0; i < circles.length; i++) {
		circles[i].innerHTML = i + 1;
	}

	// get the circle with the id equal to the total
	const currentPlace = document.getElementById(total.toString());
	console.log(currentPlace);
	// add the token to the circle
	currentPlace.innerHTML = `<div class="token">${total}</div>`;
}