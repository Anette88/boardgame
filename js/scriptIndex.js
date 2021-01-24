
function chooseCharacter1(character) {
	if (character === "Tormund") {
    window.localStorage.setItem("firstPlayer", "Tormund");
  }
  else if (character === "Ramsay") {
    window.localStorage.setItem("firstPlayer", "Ramsay");
  }
  else if (character === "Arya") {
    window.localStorage.setItem("firstPlayer", "Arya");
  }
  else if (character === "Brienne") {
    window.localStorage.setItem("firstPlayer", "Brienne");
  }
  else if (character === "Daenerys") {
    window.localStorage.setItem("firstPlayer", "Daenerys");
  }
  else if (character === "Tyrion") {
    window.localStorage.setItem("firstPlayer", "Tyrion");
  }
  else if (character === "Samwell") {
    window.localStorage.setItem("firstPlayer", "Samwell");
  }
}

function chooseCharacter2(character) {
	if (character === "Tormund") {
    window.localStorage.setItem("secondPlayer", "Tormund");
  }
  else if (character === "Ramsay") {
    window.localStorage.setItem("secondPlayer", "Ramsay");
  }
  else if (character === "Arya") {
    window.localStorage.setItem("secondPlayer", "Arya");
  }
  else if (character === "Brienne") {
    window.localStorage.setItem("secondPlayer", "Brienne");
  }
  else if (character === "Daenerys") {
    window.localStorage.setItem("secondPlayer", "Daenerys");
  }
  else if (character === "Tyrion") {
    window.localStorage.setItem("secondPlayer", "Tyrion");
  }
  else if (character === "Samwell") {
    window.localStorage.setItem("secondPlayer", "Samwell");
  }
	location.href="board.html";
}
