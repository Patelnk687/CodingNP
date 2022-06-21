// The Feast of Many Beasts
// DESCRIPTION:
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    //your function here
    }
    
    //Parameters two strings that each can containing at least 2 letters, no numbers, 
    //and lowercase, no special chars at start or end
    //result boolean
    
    //examples- 
    //console.log(feast("great blue heron", "garlic naan"), true)
    //console.log(feast("chickadee", "chocolate cake"), true)
    //console.log(feast("brown bear", "bear claw"), false)
    //psuedo code get the start and the end letters of the animalsnae=me and compair them 
    //in turn to thte start ans dend letters of the dish they are bringing. REturn
    function feast(beast,dish){
      return(beast[0]===dish[0]  && beast.slice(-1)=== dish[dish.length-1])
    }
    
    feast("great blue heron", "garlic naan")