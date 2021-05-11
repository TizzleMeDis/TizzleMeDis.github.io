let hello = alert("Hello, world!");

function kelly() {
    alert("Thing are getting big...");

    document.getElementById("someText").style.fontSize = "24pt";
}

function fancifyText() {
    alert("Fancy Shmancy!");
    document.getElementById("someText").style.color = "blue";
    document.getElementById("someText").style.textDecoration = "underline";
    document.getElementById("someText").style.fontFamily = "Book Antiqua";
    document.getElementById("someText").style.fontSize = "12pt";
    document.getElementById("someText").style.fontStyle = "italic";

}

function boringText() {
    alert("Text is boring...");
    document.getElementById("someText").style.color = "black";
    document.getElementById("someText").style.textDecoration = "none";
    document.getElementById("someText").style.fontStyle = "normal";
    document.getElementById("someText").style.fontSize = "12pt";
    document.getElementById("someText").style.fontFamily = "Arial";
}

function Mooify() {
    var text = document.getElementById("someText").value;
    text = text.toUpperCase();
    console.log(text);
    var parts = text.split(".");  // ["How", "are", "you?"]
    text = parts.join("moo."); 

    document.getElementById("someText").value = text;
}