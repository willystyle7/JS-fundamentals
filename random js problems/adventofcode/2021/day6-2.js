// https://adventofcode.com
// Find a way to simulate lanternfish. How many lanternfish would there be after 80 days?

function solve(arr) {
    let lastDay = 256;
    // prepare counters
    let counters = {};
    for (let dayIdx = 0; dayIdx <= 8; dayIdx++) {
        counters[dayIdx] = 0;
    }
    for (let fish of arr) {
        counters[fish] += 1;
    }
    // go through days
    for (let day = 1; day <= lastDay; day++) {
        let zeroDay = counters[0];
        for (let dayIdx = 1; dayIdx <= 8; dayIdx++) {
            counters[dayIdx - 1] = counters[dayIdx];
        }
        counters[6] += zeroDay;
        counters[8] = zeroDay;
    }
    // sum all counters
    let all = 0;
    for (let dayIdx = 0; dayIdx <= 8; dayIdx++) {
        all += counters[dayIdx];
    }
    return all;
}

let arr = [3, 4, 3, 1, 2];

console.log(solve(arr)); // 26984457539

let arr1 = [
    3, 1, 4, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 2, 1, 1, 2, 1, 3, 4, 5, 1, 1,
    4, 1, 3, 3, 1, 1, 1, 1, 3, 3, 1, 3, 3, 1, 5, 5, 1, 1, 3, 1, 1, 2, 1, 1, 1,
    3, 1, 4, 3, 2, 1, 4, 3, 3, 1, 1, 1, 1, 5, 1, 4, 1, 1, 1, 4, 1, 4, 4, 1, 5,
    1, 1, 4, 5, 1, 1, 2, 1, 1, 1, 4, 1, 2, 1, 1, 1, 1, 1, 1, 5, 1, 3, 1, 1, 4,
    4, 1, 1, 5, 1, 2, 1, 1, 1, 1, 5, 1, 3, 1, 1, 1, 2, 2, 1, 4, 1, 3, 1, 4, 1,
    2, 1, 1, 1, 1, 1, 3, 2, 5, 4, 4, 1, 3, 2, 1, 4, 1, 3, 1, 1, 1, 2, 1, 1, 5,
    1, 2, 1, 1, 1, 2, 1, 4, 3, 1, 1, 1, 4, 1, 1, 1, 1, 1, 2, 2, 1, 1, 5, 1, 1,
    3, 1, 2, 5, 5, 1, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 4, 5, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 3, 4, 4, 1, 1, 4, 1, 3, 4, 1, 5, 4, 2, 5, 1, 2, 1, 1, 1, 1, 1, 1,
    4, 3, 2, 1, 1, 3, 2, 5, 2, 5, 5, 1, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    1, 1, 1, 3, 1, 4, 1, 4, 2, 1, 3, 4, 1, 1, 1, 2, 3, 1, 1, 1, 4, 1, 2, 5, 1,
    2, 1, 5, 1, 1, 2, 1, 2, 1, 1, 1, 1, 4, 3, 4, 1, 5, 5, 4, 1, 1, 5, 2, 1, 3,
];

console.log(solve(arr1)); // 1710166656900
