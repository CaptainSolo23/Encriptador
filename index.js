// Text encrypter
 /**
  * 
  * cypher keys
  * 
"e" for "enter"
"i" for "imes"
"a" for "ai"
"o" for "ober"
"u" for "ufat"

  */


// Encryption
const encryption = document.getElementById("encryptionButton");


encryption.addEventListener("click",(event) => {
  event.preventDefault();

  const s = document.getElementById("textToProcess").value;

  encryptMessage(s)
  
});

// Decryption

const decryption = document.getElementById("decryptionButton");


decryption.addEventListener("click",(event) => {
  event.preventDefault();

  const s = document.getElementById("textToProcess").value;

  decryptMessage(s)
  
});

// Methods to be used

// Encrypt
function encryptMessage(s){
    
  var sustitution = s.toLowerCase()
                    .replace(/e/img, "enter")
                    .replace(/o/img, "ober")
                    .replace(/i/img, "imes")
                    .replace(/a/img, "ai")
                    .replace(/u/img, "ufat");

  document.getElementById("resultText").innerHTML = sustitution;
  return sustitution
}

// Decrypt

function decryptMessage (s){
    
  var sustitution = s.toLowerCase()
                    .replace(/enter/img, "e")
                    .replace(/ober/img, "o")
                    .replace(/imes/img, "i")
                    .replace(/ai/img, "a")
                    .replace(/ufat/img, "u");

  document.getElementById("resultText").innerHTML = sustitution;
  return sustitution
}


//Copy to clipboard

const copyButton = document.getElementById("copy");
copyButton.addEventListener("click", (event) =>{
  event.preventDefault();
  const resultText = document.getElementById("resultText");
  resultText.select();
  document.execCommand("copy");
});

// Clear

const clear = document.getElementById("clear");
clear.addEventListener("click", (event) =>{
  event.preventDefault();
  const clear = document.getElementById("resultText");
  clear.innerHTML = '';
});