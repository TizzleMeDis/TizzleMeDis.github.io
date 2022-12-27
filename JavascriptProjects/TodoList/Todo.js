alert("Click once to cross. \nClick twice to delete.");

const entryBox = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const list = document.getElementById("list");
const container = document.querySelector("div[class='display-container']");

var queryItem = document.querySelectorAll("li");
var deletebtn = document.querySelectorAll("span[delete]");
var slashbtn = document.querySelectorAll("span[check]");


submitBtn.addEventListener('click', () => {
	if(entryBox.value != "") {
		const newEntry = document.createElement("li");
		newEntry.innerHTML = 
		"<div class='list-item'>" + 
			"<div class='text-content'>" + 
				"<p>" + entryBox.value + "</p>" + 
			"</div>" + 
			"<div class='buttons'>" +
				"<span class='glyphicon glyphicon-ok-circle' check></span>" +
				"<span class='glyphicon glyphicon-remove-circle' delete></span>" +
			"</div>" +
		"</div>";
		list.appendChild(newEntry);
		entryBox.value = "";
		container.style.display = "initial";
	}
});

list.addEventListener('click', () => {
	queryItem = document.querySelectorAll("li");
	queryItem.forEach(item => {
    	item.addEventListener('click', () => {
    		item.style.textDecoration = 'line-through';
    	});

    	item.addEventListener('dblclick', () => {
    		list.removeChild(item);
			if(queryItem.length == null) {
				container.style.display = "none";
			} else {
				container.style.display = "initial";
			}

    	});
	});
});

//Need to update list on a click of the x or - buttons

slashbtn.forEach(btn => {
   	btn.addEventListener('click', () => {
  		btn.style.textDecoration = 'line-through';
    	console.log("This is the clicked item button " + btn.innerText + " Strikethrough");
   	});
});

