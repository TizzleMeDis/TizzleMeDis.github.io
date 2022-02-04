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

//------------------------ Text/Result -----------------------------

    var textArea = document.getElementById("input-text");
    var result = document.getElementById("result");

    var encryptionText;
//-------------------------- Encrypt Option ------------------------

    var cipher = document.getElementById("cipher-type");
    var font = document.querySelectorAll("input[name=text-size]");
    var caps = document.querySelector("input[name=uppercase-output]");
    var encryptButton = document.getElementById("encrypt-it");
    var resetButton = document.getElementById("reset");

//------------------- Cipher Type: ----------------------------------

 for (let i = 0; i < caps.length; i++) {
     caps[i].addEventListener("click", function() {
       caps[i].classList.toggle("red");
     });
 }

    cipher.addEventListener("click", function() {
      console.log("which encryption type?");
    });

//-------------------- Font Size/All-Caps: -----------------------------------
  
  caps.addEventListener("click", function() {
    console.log("boolean value: " + caps.checked);
  });  

  /*console.log("cap nodes: " + caps.length);
  for (let i = 0; i < caps.length; i++) {
    caps[i].addEventListener("click", function() {
      console.log(i + ": caps on or off?");
      console.log("caps value: " + caps[i].checked);
    });
  }*/

//--------------------- Buttons ------------------------------------

    encryptButton.addEventListener("click", function() {

      if (font[0].checked) {
        textArea.style.fontSize = font[0].value;
        result.style.fontSize = font[0].value;
      } else {
        textArea.style.fontSize = font[1].value;
        result.style.fontSize = font[1].value;
      }

      encryptionText = getText(textArea);

      if(caps[0].checked) {
        result.innerHTML = encryptionText.toUpperCase();
      }
      
      result.innerHTML = encryptionText;
    });

    resetButton.addEventListener("click", function() {
      reset();
    });
//-------------------------------------------------------------------


  }

  function getText(text) {
    
    var encryption = encryptShift(text.value);
    return encryption;
  }

  function encryptRandom(text) {

    if(text == null || text == "") {
      return
    }


  }

  function encryptShift(text) {

    if(text == null || text == "") {
      return;
    }

    var lowerCase = "a".charCodeAt(0);
    var upperCase = "A".charCodeAt(0);
    console.log(lowerCase.toString() + "_" + upperCase.toString());
    lowerCase = "z".charCodeAt(0);
    upperCase = "Z".charCodeAt(0);
    console.log(lowerCase.toString() + "_" + upperCase.toString());

    var newText = "";
    var nextCharacter;
    
/*
            Ascii chart
   ascii space = 32
   ascii lowercase = 65 < x < 90
   ascii uppercase = 97 < x < 122

*/
    for(var i = 0; i < text.length; i++) {

      nextCharacter = String.fromCharCode(text.charCodeAt(i));

      //------------------- Shift Cipher --------------------
      if((text.charCodeAt(i) % 65) <= 25) {
        /* This will check on the upper case */
        // shift text by three

        if(text.charCodeAt(i) > 87) {
          nextCharacter = String.fromCharCode(text.charCodeAt(i)-23);
        } else {
          nextCharacter = String.fromCharCode(text.charCodeAt(i)+3);
        }

      } else if((text.charCodeAt(i) % 97) <= 25) {
      
        /* This will check on the lower case */
        // Same concept

        if(text.charCodeAt(i) > 119) {
          nextCharacter = String.fromCharCode(text.charCodeAt(i)-23);
        } else {
          nextCharacter = String.fromCharCode(text.charCodeAt(i)+3);
        }      
      }
      
      newText = newText + nextCharacter;
    }
    //-----------------------------------------------------------
    return newText;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function reset() {
      document.getElementById("result").innerHTML = "";
  }

  function changeFont(small, large, caps) {
    console.log(small);
    console.log(large);
    console.log(caps);

  }
  
})();
 