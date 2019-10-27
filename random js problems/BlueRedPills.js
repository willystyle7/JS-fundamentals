// You’re given a single-layered horizontal rack in the form of a array with n elements.
// Each cell is occupied either by a red pill (marked by r) or a blue pill (marked by b).
// Find the minimum number of swaps required such that all the blue pills and all the red pills are together.

function solve(input) {
    let numberTests = input.shift();
    for (let i = 0; i < numberTests; i++) {
        let n = input.shift();
        let line = input.shift();
        console.log(findMinSwaps(line.replace(/r/g, 0).replace(/b/g, 1).split(' ')));
    }
}

function findMinSwaps(arr) {
    let sorted = [...arr];
    sorted.sort((a, b) => a - b);
    let swaps1 = countSwaps(arr, sorted);
    sorted.reverse();
    let swaps2 = countSwaps(arr, sorted);
    return Math.min(swaps1, swaps2);
}

function countSwaps(arr1, arr2) {
    let swaps = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) swaps++;
    }
    return swaps / 2;
}

let input = [2, 7, 'r b r b r b r', 4, 'b r b r'];
solve(input);

