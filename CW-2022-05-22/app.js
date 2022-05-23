// Triple Trouble
// DESCRIPTION:
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three){
    //Solution
    let newss=''
    
    let onee=one.split('')
    let twoo=two.split('')
    let threee= three.split('')
  
    for (let i=0;i<=onee.length-1;i++){
      
       newss+=onee[i]+twoo[i]+threee[i]
       
    }
    return newss
   
   }