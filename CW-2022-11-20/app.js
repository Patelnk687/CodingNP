// 21. Merge Two Sorted Lists

// 
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function(list1, list2) {
    let total= list1.concat(list2)
    console.log(total.sort())
}


mergeTwoLists([1,2,4],  [1,3,4]);
mergeTwoLists([],  []);
mergeTwoLists([],  [0])
