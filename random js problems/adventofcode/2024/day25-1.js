// https://adventofcode.com
// Analyze your lock and key schematics.
// How many unique lock/key pairs fit together without overlapping in any column?

function solve(input) {
    function scanLock(matrix) {
        let result = [];
        for (let col = 0; col < matrix[0].length; col++) {
            let len = 0;
            for (let row = 1; row < matrix.length; row++) {
                if (matrix[row][col] === '.') {
                    break;
                }
                len++
            }
            result.push(len);
        }
        return result;
    }
    function scanKey(matrix) {
        let result = [];
        for (let col = 0; col < matrix[0].length; col++) {
            let len = 0;
            for (let row = matrix.length - 2; row >= 0; row--) {
                if (matrix[row][col] === '.') {
                    break;
                }
                len++
            }
            result.push(len);
        }
        return result;
    }
    function checkOvelap(lock, key) {
        for (let col = 0; col < lock.length; col++) {
            if (lock[col] + key[col] > 5) {
                return true;
            }
        }
        return false;
    }

    input = input.split('\n\n').map(el => el.split('\n'));
    let locks = [];
    let keys = [];
    for (const item of input) {
        if (item[0][0] === '#') {
            locks.push(scanLock(item));
        } else {
            keys.push(scanKey(item));
        }
    }
    // console.log(locks);
    // console.log(keys);
    let fits = 0;
    for (const lock of locks) {
        for (const key of keys) {
            if (!checkOvelap(lock, key)) {
                fits++;
            }
        }
    }
    return fits;
}

let input = `#####
.####
.####
.####
.#.#.
.#...
.....

#####
##.##
.#.##
...##
...#.
...#.
.....

.....
#....
#....
#...#
#.#.#
#.###
#####

.....
.....
#.#..
###..
###.#
###.#
#####

.....
.....
.....
#....
#.#..
#.#.#
#####`;

console.log(solve(input)); // 3

let input1 = `#####
#.###
..###
...##
...##
...#.
.....

#####
###.#
###..
#.#..
#.#..
#.#..
.....

.....
...#.
#..#.
#.###
#####
#####
#####

.....
.....
....#
..#.#
#.#.#
###.#
#####

.....
...#.
.#.#.
.#.##
.#.##
.#.##
#####

#####
#####
###.#
###.#
#.#.#
..#..
.....

.....
.....
.....
...#.
...#.
#.##.
#####

.....
.....
#.#..
####.
####.
#####
#####

#####
####.
##.#.
.#.#.
...#.
...#.
.....

#####
#####
#####
##.#.
##.#.
.#...
.....

.....
...#.
..###
#.###
#####
#####
#####

.....
.#..#
.##.#
###.#
#####
#####
#####

#####
###.#
###..
.##..
..#..
.....
.....

#####
##.#.
##...
#....
#....
#....
.....

.....
....#
.#.##
.#.##
##.##
#####
#####

.....
.....
....#
.#..#
.##.#
.####
#####

#####
#####
.##.#
..#.#
..#..
.....
.....

.....
..#.#
..#.#
..#.#
.####
.####
#####

.....
.....
.#.#.
.####
#####
#####
#####

#####
#.###
#.#.#
#....
.....
.....
.....

.....
...#.
...#.
.#.#.
.#.#.
.#.##
#####

.....
.....
#..#.
#.##.
#.###
#.###
#####

.....
.....
.....
#....
#.#..
###.#
#####

.....
.....
.#...
##..#
###.#
###.#
#####

.....
.....
.#..#
.#.##
.####
#####
#####

#####
#####
#.##.
...#.
...#.
.....
.....

.....
.....
#...#
#..##
#..##
#.###
#####

.....
..#..
#.#..
#.#.#
#.#.#
#####
#####

.....
#....
##...
##.#.
##.##
##.##
#####

.....
...#.
...#.
...#.
#.##.
#####
#####

#####
####.
####.
##.#.
#....
.....
.....

#####
#.##.
#.#..
#.#..
#.#..
..#..
.....

.....
.....
#..#.
##.#.
#####
#####
#####

#####
#####
#.#.#
#...#
.....
.....
.....

#####
####.
####.
#.##.
#.#..
#.#..
.....

.....
.....
..#..
#.#..
###.#
###.#
#####

.....
..#..
..#..
..#..
..#.#
#.###
#####

.....
....#
...##
..###
.####
#####
#####

#####
###.#
###.#
###.#
.#..#
....#
.....

#####
#.###
#..#.
#....
#....
#....
.....

.....
.....
.....
..#..
..#..
#.##.
#####

.....
..#.#
..#.#
..###
.####
#####
#####

.....
..#.#
..#.#
..###
#.###
#.###
#####

#####
###.#
###.#
#.#.#
#...#
#...#
.....

.....
.#...
.#...
.#..#
##.##
##.##
#####

.....
..#..
#.#..
#.#..
#.#..
#.#.#
#####

#####
#####
##.##
.#.##
...#.
.....
.....

.....
.....
....#
....#
...##
.#.##
#####

#####
#.#.#
#.#..
#.#..
#.#..
.....
.....

.....
.....
.#...
##...
##..#
###.#
#####

.....
.#..#
.##.#
.##.#
.##.#
###.#
#####

#####
##.##
##.##
##.##
#..##
#..#.
.....

#####
#.###
#.###
#.###
#.#.#
....#
.....

#####
.####
.##.#
..#.#
..#..
.....
.....

#####
#####
#####
####.
#.#..
#....
.....

.....
...#.
...#.
...##
#.###
#####
#####

#####
##.##
##.#.
.#...
.#...
.....
.....

#####
.####
.#.##
.#.##
.#..#
.....
.....

#####
#.###
...##
...##
...#.
...#.
.....

#####
###.#
###..
#.#..
#.#..
#....
.....

#####
#####
#####
#.###
..#.#
..#.#
.....

#####
##.#.
#..#.
#....
#....
#....
.....

.....
.#...
.#..#
##..#
##.##
##.##
#####

#####
.#.##
.#..#
....#
.....
.....
.....

#####
#.###
#.#.#
#.#.#
.....
.....
.....

#####
.####
.####
.#.##
.#.#.
.#.#.
.....

#####
###.#
###.#
.#..#
.....
.....
.....

.....
.#...
##...
##...
##..#
###.#
#####

.....
...#.
...#.
..##.
.####
#####
#####

#####
####.
####.
##.#.
.#.#.
.#.#.
.....

.....
.....
#....
#....
#....
##.#.
#####

.....
....#
.#..#
.##.#
.##.#
.####
#####

#####
#####
#.###
..###
..#.#
.....
.....

#####
#####
#####
#.#.#
#.#.#
#.#.#
.....

#####
##.#.
##...
##...
.#...
.#...
.....

#####
#####
.#.##
.#.##
...#.
.....
.....

#####
##.##
##.##
##.##
.#.#.
.#...
.....

#####
#####
#.###
#.###
#.###
..#.#
.....

.....
#....
#.#..
#.#..
#.##.
####.
#####

.....
.....
.....
.#...
.##..
####.
#####

.....
.....
.....
#..#.
#.##.
#.##.
#####

#####
###.#
###.#
###.#
#.#.#
#.#.#
.....

#####
.####
.####
.#.#.
.#.#.
.....
.....

#####
#.###
#.##.
..#..
.....
.....
.....

.....
..#.#
..#.#
.##.#
.##.#
.####
#####

#####
##.##
##.##
#...#
.....
.....
.....

#####
##.##
#..##
#...#
.....
.....
.....

#####
#####
.###.
.#.#.
.#.#.
.#.#.
.....

#####
#####
.####
.###.
..#..
..#..
.....

.....
..#..
.##..
.##.#
#####
#####
#####

.....
...#.
...#.
...#.
..###
#.###
#####

#####
#.###
#.###
#..##
#...#
#....
.....

#####
#####
#####
.#.##
...##
....#
.....

#####
##.#.
.#.#.
...#.
...#.
.....
.....

.....
#...#
#...#
##..#
###.#
#####
#####

#####
.###.
..#..
..#..
..#..
.....
.....

#####
.###.
..##.
..#..
.....
.....
.....

.....
.....
.....
#.#..
#.#..
####.
#####

#####
##.##
##.#.
.#.#.
...#.
.....
.....

#####
#####
#.#.#
#.#.#
#.#..
#....
.....

#####
#####
####.
####.
##.#.
#....
.....

.....
.#.#.
.#.#.
.####
.####
#####
#####

.....
.....
...#.
#.##.
#.###
#.###
#####

#####
#####
#.##.
..##.
..#..
..#..
.....

.....
#....
#.#..
###.#
###.#
#####
#####

#####
##.##
.#.##
.#.#.
.#.#.
.#...
.....

.....
.....
#....
#...#
##..#
##.##
#####

.....
.....
.....
...#.
#..##
##.##
#####

.....
.#...
.#.#.
.#.##
.#.##
.####
#####

.....
.....
..#..
..#..
#.##.
#.##.
#####

.....
.....
.#...
.#..#
.#..#
###.#
#####

.....
#...#
#..##
##.##
##.##
#####
#####

#####
#####
####.
#.##.
#..#.
.....
.....

.....
...#.
...##
#..##
#.###
#.###
#####

#####
#.###
#.##.
..##.
..#..
..#..
.....

.....
.#...
.##..
.###.
####.
#####
#####

.....
.....
....#
.#.##
.####
.####
#####

#####
#####
##.##
#..#.
#....
#....
.....

#####
#####
##.##
#..##
#...#
#....
.....

.....
..#..
..#..
.##..
###..
###.#
#####

#####
#.###
#.###
..###
..#.#
..#..
.....

#####
#####
#####
.####
..##.
..#..
.....

.....
.#.#.
.#.#.
####.
####.
####.
#####

#####
#####
###.#
.#..#
.#...
.#...
.....

.....
....#
..#.#
..###
#.###
#.###
#####

.....
.#.#.
.###.
####.
#####
#####
#####

#####
.###.
.##..
.##..
..#..
.....
.....

.....
..#.#
..#.#
.##.#
.##.#
#####
#####

.....
.#...
.#..#
.#..#
.#.##
.####
#####

#####
#####
####.
####.
#.##.
...#.
.....

#####
#####
##.##
.#.#.
.#.#.
.#.#.
.....

#####
#####
#####
.#.##
...#.
.....
.....

.....
.#...
.#.#.
.#.#.
.#.#.
.#.##
#####

.....
.#...
.#...
.#.#.
##.#.
#####
#####

.....
..#..
..#..
..#..
#.##.
#.###
#####

.....
....#
.#..#
##.##
#####
#####
#####

#####
#####
###.#
#.#..
#....
#....
.....

.....
..#..
..#..
.##.#
.####
.####
#####

.....
..#..
..##.
#.##.
#.##.
####.
#####

#####
####.
###..
.##..
..#..
..#..
.....

.....
.....
.#.#.
.####
.####
#####
#####

.....
....#
.#..#
.#..#
.#.##
##.##
#####

#####
#.###
#.###
#..#.
.....
.....
.....

.....
.....
#.#.#
#.#.#
#####
#####
#####

#####
#.##.
#..#.
#..#.
#..#.
#..#.
.....

#####
##.#.
#..#.
#..#.
#..#.
.....
.....

#####
#####
##.##
.#.##
.#.#.
...#.
.....

.....
.#.#.
.#.#.
.#.#.
##.#.
##.#.
#####

.....
.....
.....
.#...
##.#.
##.##
#####

.....
.....
.#...
.##.#
#####
#####
#####

#####
##.##
.#.##
.#..#
....#
.....
.....

.....
.....
....#
....#
.#.##
.####
#####

.....
...#.
.#.#.
.#.#.
.#.#.
##.##
#####

.....
..#..
..#..
..#..
.##.#
.####
#####

.....
.....
..#..
.##..
.###.
.###.
#####

.....
..#..
.###.
.###.
#####
#####
#####

#####
#####
#####
.####
..#.#
....#
.....

.....
..#.#
#.#.#
###.#
###.#
###.#
#####

#####
#####
###.#
#.#..
#.#..
.....
.....

#####
##.##
##.##
#..##
#..#.
#....
.....

.....
#....
#.#..
#.#..
###..
###.#
#####

#####
##.#.
##.#.
##.#.
#..#.
...#.
.....

.....
....#
..#.#
..###
.####
.####
#####

.....
#....
##.#.
##.#.
##.##
#####
#####

.....
.#...
.#.#.
.###.
#####
#####
#####

.....
.....
.....
#.#..
#.#.#
#.#.#
#####

#####
.#.##
.#.##
.#.##
.#.##
.#.#.
.....

.....
.#...
.#...
.#...
##.#.
####.
#####

.....
.....
.....
.#...
.#...
##.#.
#####

#####
#.###
..##.
..##.
..#..
.....
.....

#####
##.##
##.##
##.#.
##.#.
.#...
.....

.....
..#.#
..###
..###
.####
.####
#####

.....
.....
#....
#...#
#.#.#
#####
#####

#####
###.#
#.#.#
#....
#....
.....
.....

.....
.#..#
##.##
##.##
#####
#####
#####

#####
#.##.
..#..
.....
.....
.....
.....

.....
.....
.#..#
.#..#
.#..#
###.#
#####

.....
.#...
.#..#
###.#
###.#
#####
#####

#####
###.#
.##.#
.#..#
.....
.....
.....

#####
#.###
#.##.
#.#..
#....
.....
.....

.....
#....
#..#.
##.#.
####.
####.
#####

#####
#####
#.###
#.##.
..#..
..#..
.....

#####
.####
.#.#.
.#.#.
.#.#.
.#...
.....

.....
.#.#.
.#.##
.#.##
.#.##
.####
#####

.....
.#...
.#...
.##..
####.
####.
#####

#####
##.##
#..##
#..##
#..#.
#..#.
.....

#####
#.##.
#..#.
#....
#....
.....
.....

#####
#####
.#.##
...##
....#
.....
.....

.....
.....
....#
..#.#
.####
#####
#####

.....
.#...
##...
##...
##.#.
##.#.
#####

#####
#####
.####
.####
.##.#
..#.#
.....

.....
..#..
..#..
..#.#
..###
#.###
#####

#####
.####
..###
..#.#
..#..
..#..
.....

.....
.#...
.#.#.
.#.#.
##.##
#####
#####

#####
#####
####.
###..
#.#..
#....
.....

.....
....#
..#.#
#.#.#
#.#.#
###.#
#####

.....
.....
.#...
.#...
##..#
###.#
#####

.....
.....
...#.
.#.#.
.####
.####
#####

.....
...#.
...#.
#.##.
#.##.
####.
#####

#####
##.##
#..#.
#..#.
.....
.....
.....

#####
#####
#.##.
..#..
.....
.....
.....

#####
#####
##.#.
#..#.
...#.
...#.
.....

.....
#....
##...
##.#.
##.##
#####
#####

#####
#.###
#.##.
#.##.
#.##.
...#.
.....

#####
#####
#####
#####
##.##
.#..#
.....

.....
.....
#....
##.#.
##.#.
####.
#####

#####
##.##
##.#.
.#.#.
.#.#.
.#.#.
.....

#####
###.#
###.#
.#..#
.#...
.#...
.....

#####
#####
#####
.##.#
.##.#
.#..#
.....

#####
###.#
###..
#.#..
..#..
..#..
.....

#####
#.###
#..##
....#
....#
.....
.....

.....
.....
...#.
#..#.
#.###
#.###
#####

.....
.#..#
.##.#
.####
.####
.####
#####

#####
##.##
##.##
##..#
#...#
#....
.....

#####
#####
##.##
.#.##
...#.
...#.
.....

.....
#....
#....
##..#
##.##
##.##
#####

.....
.....
...#.
...#.
.#.#.
####.
#####

#####
#.###
#.###
#.#.#
..#..
.....
.....

#####
.#.#.
...#.
...#.
...#.
.....
.....

.....
.#..#
##..#
##..#
###.#
###.#
#####

.....
...#.
...##
#..##
##.##
##.##
#####

#####
####.
###..
###..
###..
.#...
.....

.....
.....
.....
...#.
#.##.
#.##.
#####

#####
#####
#####
#.##.
..#..
.....
.....

#####
####.
##.#.
##...
##...
#....
.....

.....
....#
....#
..#.#
#.#.#
#.###
#####

#####
###.#
###.#
#.#..
..#..
.....
.....

#####
#####
##.##
##.##
##..#
.#..#
.....

#####
#.###
#.##.
#..#.
#....
.....
.....

.....
.#...
##...
###.#
#####
#####
#####

.....
..#.#
#.#.#
#.###
#.###
#.###
#####

#####
#.##.
#.#..
.....
.....
.....
.....

.....
.#...
.##..
.##..
###..
####.
#####

.....
..#..
#.#..
#.#..
###.#
#####
#####

#####
#####
#####
#.###
#..#.
#....
.....

#####
#.###
#..##
...#.
.....
.....
.....

.....
...#.
...#.
#.##.
####.
#####
#####

#####
#####
#####
.###.
.#.#.
.....
.....

.....
.....
....#
...##
.#.##
.####
#####

.....
.....
.#...
.#.#.
.###.
#####
#####

.....
..#.#
..#.#
#.#.#
###.#
#####
#####

.....
.....
.....
.#.#.
.#.#.
####.
#####

.....
.....
..#..
#.#.#
###.#
#####
#####

#####
#####
#.###
#.##.
...#.
...#.
.....

#####
.####
.###.
.###.
.#.#.
.#...
.....

#####
#####
#.###
#..##
....#
....#
.....

#####
.##.#
..#.#
..#..
.....
.....
.....

.....
#....
#....
#.#.#
#.#.#
#.###
#####

.....
..#..
#.#.#
#.#.#
#.#.#
###.#
#####

.....
.....
.....
.....
#.#..
####.
#####

#####
#.###
..##.
..##.
...#.
...#.
.....

#####
#####
.###.
.###.
.###.
..#..
.....

.....
.....
.#...
.#.#.
.#.##
.####
#####

.....
..#..
..#..
#.##.
#.###
#.###
#####

#####
###.#
#.#.#
#.#.#
..#.#
..#.#
.....

.....
.....
..#..
#.#..
###.#
#####
#####

.....
....#
..#.#
.##.#
###.#
###.#
#####

#####
#.#.#
#.#.#
..#.#
..#.#
.....
.....

#####
#####
.####
.#.#.
.#.#.
.#...
.....

#####
####.
##.#.
##...
##...
.#...
.....

#####
###.#
##...
.#...
.#...
.....
.....

#####
.#.##
.#.##
.#.##
...##
...#.
.....

#####
#####
####.
####.
####.
#.#..
.....

.....
.....
..#..
..#.#
#.#.#
#.#.#
#####

#####
.####
.####
.###.
..#..
..#..
.....

.....
#.#..
#.##.
#.##.
#####
#####
#####

.....
.....
.....
.#..#
##.##
##.##
#####

.....
.#...
.#..#
##..#
##..#
##.##
#####

#####
#####
.####
.####
..#.#
.....
.....

.....
.#...
##...
###..
###.#
###.#
#####

#####
##.##
##.##
##.#.
##...
#....
.....

#####
##.#.
##.#.
#....
#....
.....
.....

.....
.#.#.
.###.
.###.
.###.
.####
#####

.....
....#
....#
..#.#
.##.#
###.#
#####

.....
.....
....#
.#.##
.#.##
#####
#####

.....
.#.#.
##.#.
##.#.
####.
#####
#####

.....
.....
#..#.
##.##
##.##
##.##
#####

#####
##.##
##.##
##.##
##..#
.#...
.....

.....
.#...
.##.#
.####
.####
#####
#####

.....
.....
.#..#
.#..#
##.##
##.##
#####

#####
#####
#####
#.###
..##.
...#.
.....

.....
..#..
..##.
..##.
.###.
.####
#####

.....
...#.
...#.
#.##.
#.###
#.###
#####

.....
#.#..
###..
####.
####.
#####
#####

#####
.####
.##.#
.#..#
.#...
.#...
.....

#####
#####
##.##
##.##
#..#.
.....
.....

#####
#####
###.#
###.#
#.#.#
.....
.....

#####
#####
#.###
#.###
#..##
....#
.....

#####
.##.#
.##.#
..#..
.....
.....
.....

.....
.....
#....
##...
##.#.
#####
#####

.....
.#...
.#...
.#...
##.#.
##.##
#####

#####
#####
#.###
..##.
..##.
...#.
.....

#####
###.#
###.#
.##.#
..#.#
....#
.....

#####
#.#.#
....#
....#
.....
.....
.....

.....
....#
....#
#...#
#..##
##.##
#####

#####
#####
####.
###..
#.#..
.....
.....

#####
###.#
###.#
###.#
#.#.#
#.#..
.....

#####
#####
.##.#
..#..
..#..
.....
.....

#####
#.###
#..##
...##
...##
....#
.....

.....
..#..
.##..
.##.#
.####
#####
#####

.....
.....
#...#
#...#
#...#
##.##
#####

.....
..#..
..#..
.###.
#####
#####
#####

#####
#####
#.#.#
#.#..
#.#..
#.#..
.....

.....
.#...
.##..
.##..
.##..
.###.
#####

.....
.....
...#.
.#.##
.#.##
##.##
#####

.....
...#.
.#.#.
.#.#.
.#.#.
##.#.
#####

#####
#.###
#.##.
#.##.
#..#.
.....
.....

.....
#....
#...#
#.#.#
#.#.#
#.###
#####

.....
.....
.....
.#.#.
.#.#.
.####
#####

.....
.....
.#...
.#...
.##.#
.####
#####

#####
#####
##.##
##.#.
##.#.
.#...
.....

#####
#####
.###.
.###.
..#..
..#..
.....

.....
...#.
.#.#.
.#.#.
.#.##
##.##
#####

#####
####.
#.##.
..##.
..#..
.....
.....

#####
####.
#.#..
#.#..
#.#..
.....
.....

#####
#.###
..###
..###
..###
...#.
.....

#####
##.##
.#.#.
.#.#.
...#.
...#.
.....

.....
#...#
##.##
##.##
#####
#####
#####

#####
#.#.#
#.#..
.....
.....
.....
.....

#####
##.##
.#.##
.#.##
.#..#
.#...
.....

.....
.#...
.#..#
.##.#
.####
.####
#####

#####
#####
##.##
#...#
.....
.....
.....

.....
..#..
..#..
.##..
.##..
.##.#
#####

.....
.....
.#...
.#...
.##..
.###.
#####

.....
.....
....#
#...#
#.#.#
#.###
#####

#####
#####
###.#
#.#.#
#.#.#
#....
.....

#####
#####
.###.
.#.#.
.#.#.
.#...
.....

.....
.#...
###.#
###.#
#####
#####
#####

#####
###.#
.##.#
.##.#
.##.#
.#...
.....

#####
#.#.#
#...#
#...#
#...#
#...#
.....

.....
.....
..#..
..#.#
#.#.#
###.#
#####

#####
.#.#.
.#.#.
.#...
.....
.....
.....

#####
#.###
#.###
#.##.
#.#..
.....
.....

.....
..#.#
.####
.####
.####
.####
#####

.....
.#...
.##..
.##..
.##..
####.
#####

#####
###.#
#.#.#
#.#.#
#.#.#
..#..
.....

.....
.#...
.#...
.#.#.
.#.##
#####
#####

#####
#.###
#.#.#
#.#.#
..#.#
.....
.....

.....
#.#..
#.#..
####.
#####
#####
#####

.....
.#...
.#..#
.#..#
.##.#
.##.#
#####

#####
#####
#.###
#.##.
...#.
.....
.....

#####
##.##
##.##
#..#.
#....
.....
.....

#####
.####
..###
..##.
..#..
.....
.....

#####
#####
#.###
#.##.
#..#.
#....
.....

#####
.#.##
...##
...##
....#
.....
.....

#####
#####
##.##
##..#
##..#
.#...
.....

#####
##.##
##..#
##..#
#....
#....
.....

#####
#.###
#.###
#..##
#..##
#...#
.....

#####
####.
####.
#.#..
#....
#....
.....

#####
####.
##.#.
##.#.
#....
#....
.....

#####
###.#
###.#
.##.#
.#..#
....#
.....

.....
...#.
.#.#.
.#.#.
.###.
.###.
#####

.....
.....
....#
#...#
#...#
##.##
#####

#####
.####
.####
.###.
.#.#.
.#...
.....

#####
#.##.
#.##.
#.##.
#.#..
#....
.....

#####
####.
####.
#.#..
#.#..
..#..
.....

#####
##.##
##.##
.#..#
.#...
.....
.....

#####
#####
####.
.##..
.##..
.#...
.....

#####
.#.#.
.#.#.
.#...
.#...
.#...
.....

#####
#.###
#.##.
#.##.
#..#.
...#.
.....

.....
#.#..
###..
###..
###.#
#####
#####

#####
##.##
##.##
##.#.
.#.#.
...#.
.....

#####
.#.##
.#.##
.#.##
.#.#.
.#...
.....

.....
.....
....#
..#.#
..#.#
.####
#####

#####
#####
#.##.
#.##.
#.#..
..#..
.....

.....
#....
#...#
#.#.#
#.#.#
###.#
#####

#####
##.##
##..#
##..#
.#..#
....#
.....

.....
...#.
...#.
.#.##
.#.##
.#.##
#####

#####
#.###
#.#.#
#.#.#
#.#..
.....
.....

#####
#####
#####
.####
.#.##
....#
.....

.....
.#...
##..#
##.##
##.##
#####
#####

.....
....#
.#..#
.#..#
.#.##
.#.##
#####

#####
#.#.#
#.#.#
#.#.#
..#.#
....#
.....

#####
#####
.###.
.###.
.##..
..#..
.....

#####
##.##
##.#.
##.#.
##.#.
.#.#.
.....

.....
#...#
##..#
##.##
##.##
#####
#####

#####
#.###
#.##.
#.##.
..#..
..#..
.....

.....
#....
#..#.
#..#.
#..#.
##.##
#####

.....
.....
#...#
#.#.#
#.#.#
###.#
#####

.....
.....
#...#
#.#.#
#.#.#
#.#.#
#####

.....
....#
....#
....#
.#..#
###.#
#####

#####
#####
###.#
###..
.#...
.....
.....

#####
#####
#.#.#
#.#..
#.#..
#....
.....

.....
...#.
...##
.#.##
.#.##
##.##
#####

.....
....#
....#
...##
...##
#.###
#####

.....
.....
.#...
.##.#
.##.#
.####
#####

#####
#####
#####
#.##.
#.##.
...#.
.....

.....
....#
....#
#..##
##.##
##.##
#####

.....
.....
.#...
##..#
###.#
#####
#####

.....
.....
.....
....#
.#.##
#####
#####

.....
.#...
###..
###..
###..
###.#
#####

.....
.#...
.#...
##...
##.#.
#####
#####

#####
.#.##
...##
...##
...#.
...#.
.....

.....
.#...
.#...
###.#
#####
#####
#####

#####
.#.##
.#.##
.#..#
.....
.....
.....

.....
#...#
#.#.#
#.#.#
#.#.#
#.###
#####

.....
.....
..#..
..##.
.###.
.####
#####

.....
..#..
..#..
..#..
.##.#
#####
#####

.....
.....
...#.
...#.
.#.#.
##.##
#####

#####
#.###
#..##
#..##
#...#
....#
.....

#####
####.
##.#.
##.#.
#..#.
...#.
.....

#####
#####
###.#
###.#
.##..
..#..
.....

.....
.#...
.#..#
.#..#
###.#
#####
#####

.....
...#.
#..#.
#..#.
#.##.
#.###
#####

.....
.....
..#..
#.#..
###..
###.#
#####

#####
#####
####.
####.
.#.#.
...#.
.....

.....
.#...
.#..#
.#.##
#####
#####
#####

#####
##.##
##.##
##.#.
#....
#....
.....

#####
#####
.#.#.
...#.
.....
.....
.....

.....
#.#.#
#.#.#
###.#
###.#
#####
#####

.....
#.#..
#.#..
#.#..
#.#.#
#.#.#
#####

.....
.#.#.
.#.#.
.#.#.
##.#.
#####
#####

.....
..#..
..#.#
..#.#
#.#.#
#.#.#
#####

.....
.....
#...#
##..#
##.##
##.##
#####

#####
#####
#####
#.#.#
..#.#
....#
.....

.....
...#.
.#.##
#####
#####
#####
#####

.....
.....
...#.
.#.#.
.#.##
##.##
#####

#####
#####
###.#
.##..
.#...
.#...
.....

#####
#####
#####
###.#
.#..#
....#
.....

#####
#.###
..#.#
..#.#
....#
.....
.....

#####
.####
.#.#.
.#.#.
.#.#.
...#.
.....

#####
.####
.###.
..##.
...#.
.....
.....

.....
.....
.#...
.#.#.
.#.#.
.#.#.
#####

#####
###.#
###..
.#...
.#...
.#...
.....

#####
#####
#####
#.###
...##
....#
.....

.....
..#.#
..#.#
..#.#
..#.#
#.#.#
#####

.....
#....
#....
#.#..
#.#..
#.#.#
#####

.....
.#..#
.#.##
##.##
#####
#####
#####

#####
#####
#####
###.#
#.#.#
..#..
.....

.....
..#..
..##.
.####
.####
.####
#####

.....
.....
....#
..#.#
..#.#
#.###
#####

#####
.###.
.#.#.
.#.#.
.#.#.
.....
.....

#####
#####
.####
..#.#
....#
....#
.....

.....
#....
##...
##..#
##.##
##.##
#####

#####
#####
#.###
#.#.#
#...#
....#
.....

#####
#.###
...#.
.....
.....
.....
.....

#####
##.##
#..##
#..##
...##
...#.
.....

.....
.....
..#..
..#.#
..###
.####
#####

#####
#.###
..###
..###
..#.#
..#..
.....

#####
####.
##.#.
#..#.
#..#.
#....
.....

.....
#..#.
##.#.
##.##
#####
#####
#####

.....
..#.#
..#.#
#.###
#.###
#####
#####

#####
###.#
###.#
###.#
.#...
.#...
.....

#####
##.##
##..#
##...
#....
#....
.....

.....
#...#
#.#.#
#.#.#
#.###
#####
#####

.....
.#...
.#..#
.#..#
.#.##
#####
#####

#####
###.#
###.#
###.#
.##.#
..#..
.....

#####
#####
#####
.####
.#.##
.#.#.
.....

.....
.....
..#..
.##.#
.##.#
.####
#####

.....
#....
#.#.#
#.###
#.###
#.###
#####

.....
.....
#.#..
#.#..
#.##.
#.###
#####

#####
#.###
..##.
...#.
.....
.....
.....

#####
#####
#####
#####
###.#
.#..#
.....

#####
.####
..#.#
..#.#
..#..
..#..
.....

#####
.#.##
.#.##
...#.
...#.
.....
.....

.....
.....
....#
#..##
#.###
#####
#####

.....
..#.#
..#.#
.##.#
.##.#
###.#
#####

#####
#.###
#.#.#
#....
#....
.....
.....

.....
....#
...##
.#.##
.#.##
##.##
#####

.....
.....
.....
#....
#...#
##.##
#####

.....
...#.
.#.#.
.#.##
##.##
#####
#####

.....
.#...
.#...
.##..
.###.
#####
#####

#####
###.#
#.#.#
....#
....#
....#
.....

.....
.#..#
.#..#
.#.##
.#.##
##.##
#####

#####
#.###
#.#.#
#.#.#
#.#.#
#.#.#
.....

.....
.....
.....
#....
##.#.
##.#.
#####

#####
#####
###.#
#.#..
#.#..
..#..
.....

.....
...#.
...#.
#.##.
#.###
#####
#####

#####
###.#
#.#.#
#.#.#
#.#.#
#.#..
.....

#####
.####
.#.#.
.#.#.
.#...
.#...
.....

#####
#####
#####
.#.#.
.#.#.
.#.#.
.....

#####
#####
###.#
.#...
.#...
.#...
.....

.....
...#.
...##
.#.##
.#.##
.#.##
#####

.....
..#..
#.#..
#.##.
#.##.
#####
#####

#####
#####
.###.
.##..
.#...
.....
.....

.....
.....
.....
...#.
.#.#.
##.##
#####

.....
....#
.#..#
##.##
##.##
#####
#####

.....
..#..
.##..
.###.
#####
#####
#####

#####
#####
#####
.###.
.#.#.
.#...
.....

#####
#.##.
#..#.
.....
.....
.....
.....

.....
..#..
.##..
.##..
.##.#
###.#
#####

#####
####.
###..
##...
#....
#....
.....

#####
.####
.##.#
.##.#
..#.#
..#..
.....

#####
#####
####.
#.#..
#....
.....
.....

.....
#....
#.#..
#.#.#
#.#.#
#####
#####

.....
.....
..#..
..##.
#.##.
#.###
#####

.....
.....
..#.#
..#.#
..#.#
#.###
#####

.....
#.#.#
#.#.#
#.###
#.###
#####
#####

#####
####.
#.##.
#..#.
#..#.
.....
.....

.....
...#.
...#.
...#.
#..#.
##.#.
#####

.....
.#...
.#...
.#.#.
##.##
##.##
#####

#####
#####
.##.#
..#.#
....#
....#
.....

.....
#..#.
##.##
##.##
#####
#####
#####

.....
...#.
...#.
#..#.
##.#.
##.#.
#####

#####
#####
##.#.
##.#.
.#.#.
.#.#.
.....

.....
.....
..#.#
..#.#
#.#.#
###.#
#####

.....
.....
#....
#.#.#
#.#.#
#####
#####

.....
.....
...#.
...#.
.#.#.
.#.#.
#####

#####
###.#
###.#
##..#
#...#
.....
.....

#####
####.
####.
.##..
.##..
..#..
.....`;

console.log(solve(input1)); // 3360
