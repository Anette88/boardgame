// Data from JSON file to be displayed in cards

fetch('API/characters.json')
	.then(result => result.json())
	.then((res) => {
		retrieveData(res);
	})
	.catch(err => console.log(err))

function retrieveData(info) {

}
