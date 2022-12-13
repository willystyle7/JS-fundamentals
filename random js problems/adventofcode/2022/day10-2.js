// https://adventofcode.com
// Render the image given by your program.
// What eight capital letters appear on your CRT?

function solve(input) {
    input = input.split('\n');
    let cycle = 1;
    let registerX = 1;
    let CRT = '';
    let crtLength = 40;
    for (let row of input) {
        let [cmd, num] = row.split(' ');
        switch (cmd) {
            case 'noop':
                CRT += getSymbol(cycle, registerX);
                cycle += 1;
                break;
            case 'addx':
                num = Number(num);
                CRT += getSymbol(cycle, registerX);
                cycle += 1;
                CRT += getSymbol(cycle, registerX);
                cycle += 1;
                registerX += num;
                break;
            default:
                break;
        }
    }
    // console.log('CRT: ', CRT);
    // prepare two dimensions
    let CRT2dim = '';
    while (CRT) {
        CRT2dim += CRT.slice(0, crtLength) + '\n';
        CRT = CRT.slice(crtLength);
    }

    return CRT2dim;

    function getSymbol(cycle, registerX) {
        return Math.abs((cycle - 1) % crtLength - registerX) <= 1 ? '#' : '.';
    }
}

let input = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`;

console.log(solve(input));

`##..##..##..##..##..##..##..##..##..##..
 ###...###...###...###...###...###...###.
 ####....####....####....####....####....
 #####.....#####.....#####.....#####.....
 ######......######......######......####
 #######.......#######.......#######.....`

let input1 = `noop
noop
addx 6
addx -1
noop
addx 5
addx 3
noop
addx 3
addx -1
addx -13
addx 17
addx 3
addx 3
noop
noop
noop
addx 5
addx 1
noop
addx 4
addx 1
noop
addx -38
addx 5
noop
addx 2
addx 3
noop
addx 2
addx 2
addx 3
addx -2
addx 5
addx 2
addx -18
addx 6
addx 15
addx 5
addx 2
addx -22
noop
noop
addx 30
noop
noop
addx -39
addx 1
addx 19
addx -16
addx 35
addx -28
addx -1
addx 12
addx -8
noop
addx 3
addx 4
noop
addx -3
addx 6
addx 5
addx 2
noop
noop
noop
noop
noop
addx 7
addx -39
noop
noop
addx 5
addx 2
addx 2
addx -1
addx 2
addx 2
addx 5
addx 1
noop
addx 4
addx -13
addx 18
noop
noop
noop
addx 12
addx -9
addx 8
noop
noop
addx -2
addx -36
noop
noop
addx 5
addx 2
addx 3
addx -2
addx 2
addx 2
noop
addx 3
addx 5
addx 2
addx 19
addx -14
noop
addx 2
addx 3
noop
addx -29
addx 34
noop
addx -35
noop
addx -2
addx 2
noop
addx 6
noop
noop
noop
noop
addx 2
noop
addx 3
addx 2
addx 5
addx 2
addx 1
noop
addx 4
addx -17
addx 18
addx 4
noop
addx 1
addx 4
noop
addx 1
noop
noop`;

console.log(solve(input1)); // BGKAEREZ
`###...##..#..#..##..####.###..####.####.
 #..#.#..#.#.#..#..#.#....#..#.#.......#.
 ###..#....##...#..#.###..#..#.###....#..
 #..#.#.##.#.#..####.#....###..#.....#...
 #..#.#..#.#.#..#..#.#....#.#..#....#....
 ###...###.#..#.#..#.####.#..#.####.####.`
