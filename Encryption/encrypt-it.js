/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  window.addEventListener("click", init);
  /**
   * TODO: Write a function comment using JSDoc.
   *
   * Need to pass the newText back to the result text field
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    document.getElementById("encrypt-it").addEventListener("click", function() {
      document.getElementById("input-text").innerHTML = getText();
    });
  }

  function getText() {
    
    var text = document.getElementById("input-text");
    alert("Encrypting: " + text.value);
    var encryption = encrypt(text.value);

    document.getElementById("result").innerHTML = encryption;
  }

  function encrypt(text) {
    var lowerCase = "a".charCodeAt(0);
    var upperCase = "A".charCodeAt(0);
    var newText = "";
    var nextCharacter;
    console.log(lowerCase.toString() + "_" + upperCase.toString());
    
    for(var i = 0; i < text.length; i++) {

      nextCharacter = String.fromCharCode(text.charCodeAt(i)+1);

      if((text.charCodeAt(i) % 65) < 25) {
        /* This will check on the upper case */
        nextCharacter = String.fromCharCode(text.charCodeAt(i)-25);

      } else if((text.charCodeAt(i) % 97) < 25) {
        /* This will check on the lower case */
        nextCharacter = String.fromCharCode(text.charCodeAt(i)-25);
      }
      newText = newText + nextCharacter;
      console.log(newText);
    }

    return newText;
  }
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
 