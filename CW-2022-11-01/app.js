// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


// From: https://www.codewars.com/kata/5878520d52628a092f0002d0/


// Hint: make an array, map through it making your changes to each letter, and join back into a string
function reversed(string){
let reverseStr= string.split('').reverse().join('')
let transformStr = reverseStr.split('').map(l=> l === l.toUpperCase()? l.toLowerCase() : l.toUpperCase()).join('')
return transformStr
}

console.log(reversed('hello Motto how '),'hello Motto how ')