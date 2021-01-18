let total1 = 0;
let total2 = 0;
let playerTurn = 1;
const totalSteps = 30;

function rollDice1() {
	const newRoll = Math.floor((Math.random() * 6) + 1);
	document.getElementById("number").innerHTML = newRoll;
	total1 = total1 + newRoll;
	// go to winners page
	if (total1 >= totalSteps) {
		location.href = "winner1.html";
	}
	console.log(total1);
	drawToken1();
	

	//if (playerTurn === 1) {
	//	playerTurn = 2;
	//}
	//else {
	//	playerTurn = 1;
	//}
}

function rollDice2() {
	const newRoll = Math.floor((Math.random() * 6) + 1);
	document.getElementById("number").innerHTML = newRoll;
	total2 = total2 + newRoll;
	// go to winners page
	if (total2 >= totalSteps) {
		location.href = "winner2.html";
	}
	console.log(total2);
	drawToken2();

}

const board = document.querySelector(".circles");

function drawBoard() {
	for (let i = 1; i <= totalSteps; i++) {
		board.innerHTML += `<div class="circle" id="${i}">${i}</div>`;
	}
}

drawBoard();


function drawToken1() {

	// get all circles
	const circles = document.querySelectorAll(".circle");

	// get the circle with the id equal to the total
	const currentPlace1 = document.getElementById(total1.toString());
	console.log(currentPlace1);
	// add the token to the circle
	currentPlace1.innerHTML = `<div class="token1">${total1}</div>`;

	playerNumber();
}


	// loop through the cirles and make the innerHTML just a number, this will remove the token if it had one


	//for (let i = 0; i < circles.length; i++) {
		//circles[i].innerHTML = i + 1;
	//}



function drawToken2() {

	// get all circles
	const circles = document.querySelectorAll(".circle");


	// get the circle with the id equal to the total
	const currentPlace2 = document.getElementById(total2.toString());
	console.log(currentPlace2);
	// add the token to the circle
	currentPlace2.innerHTML = `<div class="token2">${total2}</div>`;

	playerNumber();
}

function playerNumber() {

	const circles = document.querySelectorAll(".circle");

	if (playerTurn === 1) {
		playerTurn = 2;
	}
	else {
		playerTurn = 1;
	}

	for (let i = 0; i < circles.length; i++) {
	if (playerTurn === 2) {
		if(circles[i].innerHTML.includes('<div class="token1">') === false) {
			circles[i].innerHTML = i+1;
		}
		else {
			if(circles[i].innerHTML.includes('<div class="token2">') === false) {
				circles[i].innerHTML = i+1;
			}
		}
	}
}
}
