// Please make sure you understand these before taking a look at the question:

// Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// indexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
// lastIndexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


// From: 
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

// Hint: map through array checking if indexof == lastindexof and return the appropriate character


function exe(string){
  return  string.toLowerCase().split('').map((l,i,a)=>a.indexOf(l)===a.lastIndexOf(l)? '(':')' ).join('')
}

console.log(exe("din"),"(((")