// Consider an array of n distinct integers, arr = [a[0], ..., a[n-1]].
// George can swap any two elements of the array any number of times.
// An array is beautiful if the sum of |arr[i] - arr[i-1]| among 0 < i < n is minimal.
// Given the array arr, determine and return the minimum number of swaps that should be performed in order to make the array beautiful.

function solve(arr) {
    // let sorted = arr.slice().sort((a, b) => a - b);
    let sorted = [...arr].sort((a, b) => a - b);
    let swapsAsc = findSwaps([...arr], sorted);
    let swapsDesc = findSwaps([...arr], sorted.reverse());
    return Math.min(swapsAsc, swapsDesc);
}

function findSwaps(arr, sorted) {
    // map value to index
    // let value2index = arr.reduce((acc, curr, index) => {acc[curr] = index; return acc}, {});
    let value2index = {};
    arr.forEach((val, i) => value2index[val] = i);
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        // At index i there must be value sorted[i]
        if (arr[i] != sorted[i]) {
            // Find the position of value sorted[i] in the input array
            let position = value2index[sorted[i]];
            // Swap sorted[i] with arr[i]
            // let temp = arr[i];
            // arr[i] = arr[position];
            // arr[position] = temp;
            [arr[i], arr[position]] = [arr[position], arr[i]];
            // Update the position of arr[position] in the value2index map
            value2index[arr[position]] = position;
            // Increment swap count
            swaps++;
        }
    }
    return swaps;
}

console.log(solve([2, 5, 3, 1])); // should return 2

// console.log([2, 5, 3, 1].reduce((acc, curr, index) => {acc[curr] = index; return acc}, {}));