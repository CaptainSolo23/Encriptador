// Text encrypter
 /**
  * 
  * cypher keys
  * 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

  */

let word = 'fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!'

function encryptMessage (s){
    
  // var phrase = document.getElementById("textToEncrypt").value.toLowerCase();

  var sustitution = s.toLowerCase()
                    .replace(/e/img, "enter")
                    .replace(/o/img, "ober")
                    .replace(/i/img, "imes")
                    .replace(/a/img, "ai")
                    .replace(/u/img, "ufat");

  return sustitution

}

console.log(encryptMessage(word))

function decryptMessage (s){
    
  // var phrase = document.getElementById("textToEncrypt").value.toLowerCase();

  var sustitution = s.toLowerCase()
                    .replace(/enter/img, "e")
                    .replace(/ober/img, "o")
                    .replace(/imes/img, "i")
                    .replace(/ai/img, "a")
                    .replace(/ufat/img, "u");

  return sustitution

}

console.log(decryptMessage(word))