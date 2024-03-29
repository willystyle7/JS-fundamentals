// https://adventofcode.com
// Find a way to simulate lanternfish. How many lanternfish would there be after 80 days?

function solve(arr) {
    let lastDay = 80;
    for (let day = 1; day <= lastDay; day++) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            if (arr[i] === 0) {
                arr[i] = 6;
                arr.push(8);
            } else {
                arr[i] -= 1;
            }
        }
    }
    return arr.length;
}

let arr = [3, 4, 3, 1, 2];

console.log(solve(arr)); // 5934

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

console.log(solve(arr1)); // 380612
