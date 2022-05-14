// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

// DESCRIPTION:
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    //coding and coding....
    let vowels =['a','e','i','o','u','A','E','I','O','U']
  //       found =s.some()
  //   s.replace((vowels),"!")
    return s.split('').map(item =>vowels.includes(item)? '!':item).join('')
  }