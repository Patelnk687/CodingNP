// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

 

// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.
 

// Constraints:

// 1 <= name.length, typed.length <= 1000
// name and typed consist of only lowercase English letters.


/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */


var isLongPressedName = function(name, typed) {
    // Initialize two pointers for name and typed
    let p1 = 0;
    let p2 = 0;

    // Loop through the characters in name and typed
    while (p1 < name.length || p2 < typed.length) {
        // If the current character in name matches typed, increment both pointers
        if (name[p1] === typed[p2]) p1 ++, p2++;

        // If the previous character in name matches typed, increment typed pointer
        else if (name[p1 - 1] === typed[p2]) p2 ++;

        // If there's a mismatch, return false
        else return false;
    }

    // If all characters in name have been matched, return true
    return p1 === name.length;
};



isLongPressedName("saeed", "ssaaedd")