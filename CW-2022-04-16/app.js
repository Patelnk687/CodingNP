// Beginner - Lost Without a Map
// DESCRIPTION:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x){
    // x.map(v=>2*v);
      let u=[]
      for (let i=0;i<x.length;i++){
       u.push(x[i]*2) 
      }return u
    }