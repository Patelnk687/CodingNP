// Sum of positive

// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
    let positiveSumz=arr.filter(ind => ind >0);
     //console.log(positiveSumz.length)
    let positiveSum=0
    for (let i=0;i<positiveSumz.length;i++){
      positiveSum=positiveSum+positiveSumz[i]
      //console.log(positiveSum[positiveSumz.length])
       //let positiveSumee=positiveSum
     } let positiveSumee=positiveSum
     return (positiveSumee)
   }