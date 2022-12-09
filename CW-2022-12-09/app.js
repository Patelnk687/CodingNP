let array =[1,2,23,42,3,28]

console.log(array.sort());

//sorting numerically
console.log(array.sort(function(a,b){return a-b}));

//sorting largerst to smallest
console.log(array.sort(function(a,b){return b-a}));