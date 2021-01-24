
const placeWinner = document.querySelector("#theWinnerIs");
const theWinner = window.localStorage.getItem("winner");
console.log(theWinner);

function showWinner () {
  if (theWinner === "Player1") {
    placeWinner.src='images/Roll1.png';
 }
  if (theWinner === "Player2") {
    placeWinner.src='images/Roll2.png';
  }
}
