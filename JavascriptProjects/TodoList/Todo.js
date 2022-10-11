alert("Click once to cross. \nClick twice to delete.");

const entryBox = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const list = document.getElementById("list");


var queryItem = document.querySelectorAll("li");
var deletebtn = document.querySelectorAll("input[delete]");
var slashbtn = document.querySelectorAll("input[slash]");


submitBtn.addEventListener('click', () => {
	if(entryBox.value != "") {
		const newEntry = document.createElement("li");
		newEntry.style.display = "flex";
		newEntry.innerHTML = "<p>" + entryBox.value + "</p>";
		list.appendChild(newEntry);
		entryBox.value = "";
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

