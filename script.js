
// Data from JSON file to be displayed in cards

fetch('API/characters.json')
	.then(result => result.json())
	.then((res) => {
		retrieveData(res);
	})
	.catch(err => console.log(err))

function retrieveData(info) {

}




// Random method

function randomFunction(secondValue) {
	var x = Math.floor((Math.random()*6)+1);
	document.getElementById("number").innerHTML = x;


// Adding the value of x 
	document.getElementById("number").addEventListener("click", function() {

	})

}




const board = document.querySelector(".circles");

function boardGame () {
	for(let i = 1; i <= 30; i++) {
		board.innerHTML += '<div class="circle"><div class="token"></div></div>';
	}
}

boardGame ();
