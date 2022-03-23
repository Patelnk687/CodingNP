// Find the position!

// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    //Write your own Code!
      
      const lettersarr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    return`Position of alphabet: ${lettersarr.indexOf(letter)+1}`
    }