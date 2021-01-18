
//function chooseCharacter(character) {
  //if (character === Tormund) {
    //document.getElementById("circle").style.background-image = 'url("tokens/Tormund.png")';
  //}
  //else if (character === Ramsay) {
    //document.getElementById("circle").style.background-image = 'url("tokens/Ramsay.png")';
  //}
  //else if (character === Arya) {
    //document.getElementById("circle").style.background-image = 'url("tokens/Arya.png")';
  //}
  //else if (character === Brienne) {
    //document.getElementById("circle").style.background-image = 'url("tokens/Brienne.png")';
  //}
  //else if (character === Daenerys) {
    //document.getElementById("circle").style.background-image = 'url("tokens/Daenerys.png")';
  //}
  //else if (character === Tyrion) {
    //document.getElementById("circle").style.background-image = 'url("tokens/Tyrion.png")';
  //}
  //else if (character === Samwell) {
    //document.getElementById("circle").style.background-image = 'url("tokens/Samwell.png")';
  //}
  //console.log("Gotoboard")
  //location href="board.html";
//}





let total1 = 0;
let total2 = 0;
let playerTurn = 1;
const totalSteps = 30;

const numberContainer = document.querySelector("#number");
const player1Button = document.querySelector(".player1");
const player2Button = document.querySelector(".player2");

const board = document.querySelector(".circles");

function drawBoard() {
    for (let i = 1; i <= totalSteps; i++) {
        board.innerHTML += `<div class="circle" id="${i}">${i}</div>`;
    }
}

drawBoard();

function rollDice() {

    console.log("playerTurn: " + playerTurn);

    const newRoll = Math.floor((Math.random() * 6) + 1);
    numberContainer.innerHTML = newRoll;

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
                if (circles[i].innerHTML.includes('<div class="token1">') === false) {
                    circles[i].innerHTML = i + 1;
                }
            }
        }
        else if (playerTurn === 1) {
            if (total1 === i + 1) {
                circles[i].innerHTML += `<div class="token1">${total1}</div>`;
            }
            else {
                if (circles[i].innerHTML.includes('<div class="token2">') === false) {
                    circles[i].innerHTML = i + 1;
                }
            }
        }
    }
}
