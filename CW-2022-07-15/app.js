// Calculate average
// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    //   // your code here
    //   //Math.sum(array)/(array.length)
    //   let nu=0,
    //   for (let i=0, i>=array.length,i++){
    //      nu += array[i]
    //     return nu
    //   }
     return (array.length==0?  0:  array.reduce((a, b) => a + b, 0) / array.length)
    
    }