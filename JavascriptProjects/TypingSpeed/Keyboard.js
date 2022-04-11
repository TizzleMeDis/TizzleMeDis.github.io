const keys = document.querySelectorAll("div[key]");
const keyPressed = document.getElementById("key-box");

keyPressed.addEventListener("keypress", (event) => {
	console.log("key pressed: " + event.key);
	keys.forEach(key => {

		let keyBoard = event.key;
		console.log("key board: " + keyBoard)
		if(keyBoard.match(/${key.innerText}/i)) {
			console.log("It worked.")
			changeColor(key);
		}
	});
});

function changeColor(key) {
	key.style.background = "white";
	key.style.color = "black";
}	

function changeColorBack(key) {
	key.style.background = "black";
	key.style.color = "white";
}