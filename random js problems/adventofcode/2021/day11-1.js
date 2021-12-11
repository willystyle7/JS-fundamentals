// https://adventofcode.com
// How many total flashes are there after 100 steps?

function solve(arr) {
    let steps = 100;
    let len = 10;
    arr = arr.split('\n').map(r => r.split('').map(Number));

    function flash(row, col, flashes) {
        // console.log(`flash ${row},${col}`);
        flashes.count += 1;
        arr[row][col] = 0;
        for (let i = Math.max(row - 1, 0); i < Math.min(row + 2, len); i++) {
            for (let j = Math.max(col - 1, 0); j < Math.min(col + 2, len); j++) {
                if (arr[i][j] !== 0) {
                    arr[i][j] += 1;
                    if (arr[i][j] > 9) {
                        flash(i, j, flashes);
                    }
                }
            }
        }
    }

    let totalFlashes = 0;
    for (let step = 0; step < steps; step++) {
        let flashes = {
            count: 0
        };
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                arr[i][j] += 1;
            }
        }
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (arr[i][j] > 9) {
                    flash(i, j, flashes);
                }
            }
        }
        totalFlashes += flashes.count;
        // console.log(arr);
    }
    return totalFlashes;
}

// let arr0 = // len = 5, step = 2
// `11111
// 19991
// 19191
// 19991
// 11111`;

// console.log(solve(arr0)); // 9

let arr =
`5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

console.log(solve(arr)); // 1656

let arr1 =
`4134384626
7114585257
1582536488
4865715538
5733423513
8532144181
1288614583
2248711141
6415871681
7881531438`;

console.log(solve(arr1)); // 1725

