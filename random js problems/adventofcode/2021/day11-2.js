// https://adventofcode.com
// What is the first step during which all octopuses flash?

function solve(arr) {
    let len = 10;
    arr = arr.split('\n').map(r => r.split('').map(Number));

    function flash(row, col, flashes) {
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

    let step = 0
    while (true) {
        step += 1;
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
        if (flashes.count === 100) {
            break
        }
    }
    return step;
}

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

console.log(solve(arr)); // 195

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

console.log(solve(arr1)); // 308

