const keys = document.querySelectorAll("div[key]");
const inputBox = document.getElementById("input-box");

for (var i = keys.length - 1; i >= 0; i--) {

	if(keys[i].hasAttribute('two-keys')) {
		keys[i].setAttribute("keyname", keys[i].innerText.substring(0, 1));
		keys[i].setAttribute("lowerCaseName", keys[i].innerText.substring(1, 2));
	} else {
		keys[i].setAttribute("keyname", keys[i].innerText);
		keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
	}

}

inputBox.focus();

inputBox.addEventListener('keydown', (event) => {
	console.log("key: " + event.key);
	for (var i = keys.length - 1; i >= 0; i--) {
	 	if(keys[i].getAttribute('keyname') == event.key || keys[i].getAttribute('lowerCaseName') == event.key){
	 		keys[i].setAttribute("class", "active");
	 	} else if (event.key == "CapsLock" && keys[i].getAttribute("keyname") == "Caps") {
	 		keys[i].setAttribute("class", "active");
	 	} else if (event.key == " " && keys[i].hasAttribute("space-bar")) {
	 		keys[i].setAttribute("class", "active");
	 	} else if (event.key == "Control" && keys[i].hasAttribute("ctrl")) {
	 		keys[i].setAttribute("class", "active");
	 	}
	}

	if (event.key == "Tab") {
		keys[14].removeAttribute("class");
	}
});

inputBox.addEventListener('keyup', (event) => {
	for (var i = keys.length - 1; i >= 0; i--) {
	 	if(keys[i].getAttribute('keyname') == event.key || keys[i].getAttribute('lowerCaseName') == event.key){
	 		keys[i].removeAttribute("class", "active");
	 	} else if (event.key == "CapsLock" && keys[i].getAttribute("keyname") == "Caps") {
	 		keys[i].removeAttribute("class", "active");
	 	} else if (event.key == " " && keys[i].hasAttribute("space-bar")) {
	 		keys[i].removeAttribute("class", "active");
	 	} else if (event.key == "Control" && keys[i].hasAttribute("ctrl")) {
	 		keys[i].removeAttribute("class", "active");
	 	}
	}
});

console.log("done");
