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

let word = 'perre'
const eKey = 'enter'

function sustitution (string){
    string.split()
    for(let i  = 0; i < string.length; i++){
        if(string[i] === 'e'){
            string[i] = eKey
        }
    }
}

console.log(sustitution(word))
