// Quick Response Challenge: Given an array A, the only operation is to move an item to the start,
// what is the minimum steps to transform it in to array B?

// Below is complete algorithm.
// 1) Find if arrA can be transformed to arrB or not by first creating a count array for all elements of arrA, then checking with arrB if arrB has same count for every element.
// 2) Initialize result as 0.
// 2) Start traversing from end of both arrays.
// ……a) If current element of arrA and arrB match, i.e., arrA[i] == arrB[j]
// ………then do i = i-1 and j = j-1
// ……b) If current elements don’t match, then search arrB[j] in remaining
// ………A. While searching, keep incrementing result as these elements
// ………must be moved ahead for A to B transformation.

function minimumOperations(arr1, arr2) {
    // check if arrays could be transformed else return -1
    if (arr1.length !== arr2.length) return -1;
    let counters = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!counters.hasOwnProperty(arr1[i])) counters[arr1[i]] = 0;
        if (!counters.hasOwnProperty(arr2[i])) counters[arr2[i]] = 0;
        counters[arr1[i]]++;
        counters[arr2[i]]--;
    }
    for (const counter in counters) {
        if (counters[counter] !== 0) return -1;
    }

    // main algorithm
    let result = 0;
    i = arr1.length - 1;
    j = arr2.length - 1;
    while (i >= 0) {
        if (arr1[i] != arr2[j]) {
            result++;
        } else {
            j--;
        }
        i--;
    }
    return result;
}

let minOps = (arr1, arr2) => {let result = 0, i = j = arr1.length -1; while (i >= 0) {if (arr1[i] != arr2[j]) {result++} else j--;i--} return result};

console.log(minimumOperations([3, 7, 1, 2], [7, 1, 3, 2])); // should return 2
console.log(minimumOperations([1, 6, 1, 7, 5, 6, 2, 3, 4, 9], [5, 1, 1, 9, 6, 2, 4, 6, 7, 3])); // should return 7

console.log(minOps([3, 7, 1, 2], [7, 1, 3, 2])); // should return 2
console.log(minOps([1, 6, 1, 7, 5, 6, 2, 3, 4, 9], [5, 1, 1, 9, 6, 2, 4, 6, 7, 3])); // should return 7

// https://pastebin.com/nxgURZuT