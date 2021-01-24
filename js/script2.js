let total1 = 0;
let total2 = 0;
let playerTurn = 1;
const totalSteps = 30;

const numberContainer = document.querySelector("#number");
const dice = document.querySelector("#diceValue");
const player1Button = document.querySelector(".player1");
const player2Button = document.querySelector(".player2");

const board = document.querySelector(".circles");

//show the value of the dice
function showDice () {
  if (newRoll === 1) {
    dice.src='images/Roll1.png';
 }
  if (newRoll === 2) {
    dice.src='images/Roll2.png';
  }
  if (newRoll === 3) {
    dice.src='images/Roll3.png';
  }
  if (newRoll === 4) {
    dice.src='images/Roll4.png';
  }
  if (newRoll === 5) {
    dice.src='images/Roll5.png';
  }
  if (newRoll === 6) {
    dice.src='images/Roll6.png';
  }
}



function drawBoard() {
    for (let i = 1; i <= totalSteps; i++) {
        board.innerHTML += `<div class="circle" id="Circle${i}">${i}</div>`;
    }
}

drawBoard();
let newRoll;

function rollDice() {

    console.log("playerTurn: " + playerTurn);

    newRoll = Math.floor((Math.random() * 6) + 1);
    //numberContainer.innerHTML = newRoll;

    if (playerTurn === 1) {
        total1 = total1 + newRoll;
        if (total1 >= totalSteps) {
            // store player1 in localstorage
            location.href = "winner1.html";
        }
        if (total1 === 7) {
          total1 = 4;
          alert("Woops! You got set up! Move back to 4");
        }
        if (total1 === 15) {
          total1 = 8;
          alert("Woops! You got set up! Move back to 8");
        }
        if (total1 === 28) {
          total1 = 19;
          alert("Woops! You got set up! Move back to 19");
        }
    }
    else {
        total2 = total2 + newRoll;
        if (total2 >= totalSteps) {
            // store player1 in localstorage
            location.href = "winner2.html";
        }
        if (total2 === 7) {
          total2 = 4;
          alert("Woops! You got set up! Move back to 4");
        }
        if (total2 === 15) {
          total2 = 8;
          alert("Woops! You got set up! Move back to 8");
        }
        if (total2 === 28) {
          total2 = 19;
          alert("Woops! You got set up! Move back to 19");
        }
    }
    drawToken();

    if (playerTurn === 1 && newRoll < 6) {
        player1Button.disabled = true;
        player2Button.disabled = false;
        playerTurn = 2;
    }
    else if (playerTurn === 2 && newRoll < 6) {
        player2Button.disabled = true;
        player1Button.disabled = false;
        playerTurn = 1;
    }
    //chooseCharacter1();
    //chooseCharacter2();
    showDice();
    console.log(newRoll);
}


function drawToken() {

    // get all circles
    const circles = document.querySelectorAll(".circle");
    console.log(circles);

    for (let i = 0; i < circles.length; i++) {

        if (playerTurn === 2) {
            if (total2 === i + 1) {
                circles[i].innerHTML += `<div class="token2">${total2}</div>`;
            }
            else {
                if (circles[i].innerHTML.includes('<div class="token1" id="token1">') === false) {
                    circles[i].innerHTML = i + 1;
                }
            }
        }
        else if (playerTurn === 1) {
            if (total1 === i + 1) {
                circles[i].innerHTML += `<div class="token1" id="token1">${total1}</div>`;
            }
            else {
                if (circles[i].innerHTML.includes('<div class="token2">') === false) {
                    circles[i].innerHTML = i + 1;
                }
            }
        }
    }
}

const character1 = window.localStorage.getItem("firstPlayer");
const character2 = window.localStorage.getItem("secondPlayer");
console.log(character1);
console.log(character2);



function chooseCharacter1() {
  if (character1 === "Tormund") {
    document.getElementById("token1").style.background = url("tokens/Tormund.png");
  }
  else if (character1 === "Ramsay") {
      document.getElementById("token1").style.background = url("tokens/Ramsay.png");
 }
  else if (character1 === "Arya") {
    document.getElementById("token1").style.background = url("tokens/Arya.png");
  }
  else if (character1 === "Brienne") {
    document.getElementById("token1").style.background = url("tokens/Brienne.png");
  }
  else if (character1 === "Daenerys") {
    document.getElementById("token1").style.background = url("tokens/Daenerys.png");
  }
  else if (character1 === "Tyrion") {
    document.getElementById("token1").style.background = url("tokens/Tyrion.png");
  }
  else if (character1 === "Samwell") {
    document.getElementById("token1").style.background = url("tokens/Samwell.png");
 }
}
function chooseCharacter2() {
 if (character2 === "Tormund") {
   document.getElementById("token2").style.background = url("tokens/Tormund.png");
 }
 else if (character2 === "Ramsay") {
     document.getElementById("token2").style.background = url("tokens/Ramsay.png");
}
 else if (character2 === "Arya") {
   document.getElementById("token2").style.background = url("tokens/Arya.png");
 }
 else if (character2 === "Brienne") {
   document.getElementById("token2").style.background = url("tokens/Brienne.png");
 }
 else if (character2 === "Daenerys") {
   document.getElementById("token2").style.background = url("tokens/Daenerys.png");
 }
 else if (character2 === "Tyrion") {
   document.getElementById("token2").style.background = url("tokens/Tyrion.png");
 }
 else if (character2 === "Samwell") {
   document.getElementById("token2").style.background = url("tokens/Samwell.png");
}
}
