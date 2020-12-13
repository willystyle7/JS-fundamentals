// Starting at the top-left corner of your map and following a slope of right 3 and down 1,
// how many trees would you encounter?

function solve(matrix) {
    let trees = 0;
    let row = 0;
    let col = 0;
    do {
        if (matrix[row][col] === '#') {
            trees++;
        }
        row += 1;
        col += 3;
        col %= matrix[0].length; // wood spread on right
    } while (row < matrix.length);

    return trees;
}

let matrix = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
];

console.log(solve(matrix)); // 7

let matrix2 = [
    '..#..#......#..#.......#...#.#.',
    '...##.....##..#..#....#.##.##.#',
    '...#...#.##...##.....#.....#.#.',
    '..#....#.....#...##.##.###.#...',
    '.#.....#......#..#.##.#...###..',
    '#..#..#.#......#...........###.',
    '#......####.#....##........##..',
    '.#.......#.....#......#...#....',
    '...#...#.....#.......##.....##.',
    '#...##.........#.#..##..#..#.##',
    '#.#.##.........#.#..#.#.....###',
    '.##..##...#....##.....#..#.....',
    '........#.......###.#.#.....#.#',
    '...#.#....#.##..#...##..##..#..',
    '......#....#........######.#...',
    '.##...#.#...###......#.#.#..#.#',
    '........#.##...##.#...#..#...##',
    '.#..#.#..##....###..#.#.......#',
    '..#..##..#.#...#.##......#.....',
    '##.....#..##.#.#..#......##...#',
    '......................#..#..#..',
    '..#.##....####.........###.##..',
    '##..###..#...#....#..#.#...#...',
    '.##.#......#..#....#........#..',
    '.#.....#..#..#.#.#....#.....##.',
    '..........#..#....#..##...#..##',
    '.#...#.#....#.##..#.....#....#.',
    '#..............#.#.#..#..#....#',
    '...#.#...............##........',
    '#.#.##...#.##..##.....#........',
    '...#.......###..###..#...#..#..',
    '####..#.#..##.....##.#.#......#',
    '.#.#.......#..##.......#.......',
    '#....#...#.##.#.......#..#.....',
    '.#...##..#..#..##.......##...#.',
    '.#..#......#.........#.........',
    '#.##.#.....#....#..##..#.....#.',
    '#.#....#.#....#...#.#..#....#..',
    '#..#.....#.##..#.....#...##...#',
    '#....#...##.#.........#.#....##',
    '.......##.##......##.......##..',
    '#.....#..#........#........#...',
    '#....#.#..#.#........##.#...#..',
    '#.......#.#.#.#....#.......##.#',
    '...#..###..........#...#.#.###.',
    '....#..#....#...#....##.#.....#',
    '.#..##.....#..#....##..##...#.#',
    '#.........#....#.#..###...##...',
    '.#.#.........#.#.......#.#.#..#',
    '..........#........##..#.......',
    '.....#.......#...#.....#..##.##',
    '...#.........#.............####',
    '##..#...#..#.#......#...#......',
    '.#..###...#.#.#.#...#...#......',
    '....#..##.#....#..#.#..##..##.#',
    '..#.......#......#..#.......#..',
    '....###......#...##...#....#...',
    '..#..#.....#...#..###....#.#..#',
    '.........##..#.##....#..##..#..',
    '##...#...#.#.........##......#.',
    '###..#.#....#......##..##.#...#',
    '.##...##..#.#.#.#......#..#....',
    '###......#..#..#.....#..#....#.',
    '.#.#..##....##........##..#.#..',
    '###...####.#....#.......###....',
    '..#....###..#.#.#..#.......##..',
    '.......#.#...#.....#.#....##.#.',
    '......#......#.#....#..##..###.',
    '....####..........#.....#......',
    '.###.....#...#..#...##.#...###.',
    '...##....##....###....#.#..#.#.',
    '##.#..........##.........#.##..',
    '..#..#.#.###..##..#....##.....#',
    '..#....##.....#...##....###..##',
    '....#.......##..#..#..........#',
    '............#..#.###..#.#......',
    '...........##......#.#.#...#..#',
    '...##.##....#...##.##.....#.#..',
    '.####...#....###...#.....#....#',
    '.##........#..##..#.#.....#....',
    '..................#.....#..##..',
    '..###.....#.##..#..#....##...#.',
    '...#.##.#.####.#.###.#....#..##',
    '.#....##..##......####.#####...',
    '#...#.#....##.........##....#..',
    '..#.##.....##.............#.##.',
    '###.....#.#..#..#......#.##.#..',
    '...#..##.....#...##...#......#.',
    '.##.#...#......##.#..##....#...',
    '.....##.....#......#.#.........',
    '#.....#.....#........##........',
    '.#......##...#..#.#....###.#..#',
    '#.####...#....#.........#..#...',
    '#..##.#.....#.##.##.#....#...#.',
    '#########..#....#..#...#......#',
    '..##..##...###.######...##.##..',
    '##.......#.......#.#....###..#.',
    '.....#...#.######..#.....#.....',
    '.#......#..#.............#.##.#',
    '..###.#.#......##...###........',
    '.......####.#..##....#........#',
    '..#......#.##....##.##....#....',
    '....#......#.#....#..#.#.....##',
    '####.....#....#.#......#.#.#.##',
    '#...##....#.#.##.........#....#',
    '....#..###......#......#...#...',
    '.....##.#..#..#...#..#.#.#.....',
    '.##............#.....#.........',
    '##...#..#.....##.#..#..........',
    '#.....#####.......#..#....#.#..',
    '.........#..#.....###........#.',
    '#....#..#...###........#..#.#..',
    '...##...#..#...#.##..#.........',
    '.........#.#.....#.......#...#.',
    '.#.....#..####....#.##.......##',
    '...............##....##.##..##.',
    '............#....#....#...##.#.',
    '..#...#........#.......#..#....',
    '##....####....#.##...#..##..#.#',
    '.#.#.....#......#.#........#.#.',
    '....#......#.#....##..##.......',
    '.#..#.#..#..##.....#...........',
    '..#........#.##..#......##..#..',
    '...##.#...#...#..#........#....',
    '##..##....#......#...#..#.#.#.#',
    '......#.....#..#..#....#.......',
    '.....##......#..#.#.##...#.....',
    '...#.....#.#..........#..##...#',
    '.####.##....#...........#.....#',
    '.....###..##...#....##..#...#..',
    '..##...#.#...#..........#..#.#.',
    '...#..#..............#.##.#....',
    '##.#....#...#..#....#..........',
    '.##..........#..#........#.....',
    '#...#.#......#...#.....##..#...',
    '.##...#.#.#....###.####..#....#',
    '.#......#.#...#.#....#.#...#...',
    '#....##.###.............#.#....',
    '....#.###..##..##.##...##......',
    '##....#..###.##.##.....#......#',
    '..#..#..#......#..#..#.........',
    '#.##......#.#....#..#..#.......',
    '....#.#...#..###......##.......',
    '.###.......##.......#....###...',
    '..#..#.##..#.#....#..#.#.....#.',
    '.#..##.##..............#....#..',
    '#...#.#...#..#.##..##.#.#......',
    '#...#..#..##..##.###......#....',
    '.#..#.....#...#....#.....#...#.',
    '.....#....#..#.....###...#.####',
    '.#.....#......#...##...#..#....',
    '.#......#............#.#.......',
    '....##....#.#..#..#...#..#.#...',
    '#...#.....###...##...#.##.....#',
    '.......#.....#....#.......#...#',
    '#.......###.......#.#..........',
    '...#.#.###.#........#.###...#..',
    '....#............#....#..#.....',
    '#......#.##.#...##.......#..#.#',
    '.....#....#....#.#.#...###..#..',
    '.....#.#...#...#.#..#....#.#..#',
    '.#.......#.#..#...###.......##.',
    '.......#..#.##.........#.......',
    '.##.#........#.##...##....#....',
    '.#....#..#...#......####...#..#',
    '...#.....#..##.#..#.#....#....#',
    '...##....#........#.#........#.',
    '.....#....##..#.##..........#..',
    '#.....#.#.#......##....##.#..#.',
    '.#.#.##..#.#....##.#....##.....',
    '.....#.....#..#.#....#..#....##',
    '...#........#....#......###.#..',
    '.....##...#.....##.##.#.#.##...',
    '...#.....#####....##.#.#.###.#.',
    '.#..#.#..##...###.........#.#.#',
    '#...#...#.#..#...#...........#.',
    '.##..............#...#..#....#.',
    '....###.........#.#.#....#.....',
    '..#...##.#.#....##.#..#...#..#.',
    '..#.....#.#......#....#......#.',
    '.......##....#.#.##....#...#..#',
    '##.#.#...#..#......#..#..#....#',
    '...#.#......#............###.##',
    '..###..#..##..#...##........#..',
    '.#...#...##...#....#....##.#..#',
    '..##...####....#....#..#....#.#',
    '...#......##....#.........##.#.',
    '##.#.......#..#..#.............',
    '..#.#.#.#......#...#.#..##.....',
    '.#..##.....###...##.#..#......#',
    '##...#..........#.####....##...',
    '#..........#...#..##....#......',
    '....##...#....#..####...#.##.##',
    '.#.######...##...#..##.........',
    '....##.........#.......##.##...',
    '.#.....#.#..........##......#..',
    '...#..#.#.###..#........#.....#',
    '..##..#............##.......#..',
    '......##....##..#.##..#.......#',
    '.......##....#.......#..#...#.#',
    '#.#......#.###.....#.##........',
    '.#..##..........#..#.....#.##..',
    '..#.#...#....#.........#..##..#',
    '.#......#.......#...#..#..###..',
    '......#.##.....#.#......#....#.',
    '....#....#...#.......#...##.##.',
    '#....#...##...#..##........###.',
    '##......#.#..#.......#.......#.',
    '...##.##..#......#.###..#.#.##.',
    '.............#..#.............#',
    '..#.......##..#..#....##...#...',
    '...............##..##........#.',
    '##...#.##.......#....#.......##',
    '....##.##.#.#.....##.....##.##.',
    '#.#......#.......#..#.#..#.....',
    '....##....#.##........##.##.#..',
    '......##....#..##..#..##....##.',
    '.............#.....#.......#...',
    '.......###.......#..........#..',
    '......##.#..#.....#.#...#.#...#',
    '.#...#..#..###.###...#....##...',
    '#......#..#.#...#...#.....#..##',
    '.###.....#..#.#......##..#.##..',
    '.##.#.....#..#.#..#....##......',
    '#......#..............#.....#.#',
    '...#..#....#.....#.....##.#...#',
    '......#..##..##.....#...#......',
    '.....####..#..#.##.......#..#.#',
    '###.#.#........#.......#.....##',
    '..#.#.#.#...#...#........#....#',
    '....##.#.#..#...##.....#......#',
    '#..#.##....#..#.##..####.......',
    '...####.#...#......#......##..#',
    '#....#.#..###......#..#..##..#.',
    '...........#....#...#......#...',
    '......###.#.....#.#....#.#...#.',
    '.......#.##..............#..##.',
    '..##...........#..#.#...#.....#',
    '#..#............##.........#.#.',
    '.......###.#...#.#...#.#.#...#.',
    '..#...##.......#..#......#.#.##',
    '#.#...#.....#...##.#.#.......##',
    '.#.#.##...#..##.#......#.......',
    '#.......#.......#.#....#.....#.',
    '.....#..#..#.......#..#........',
    '##...##...##......#..##.###....',
    '..#...#.###.#.###..#.....###...',
    '.....####.......#.#.....##....#',
    '....#....#.#....#...#..#.#..#..',
    '..##.....#....#.#.#.###...#....',
    '......#.#....#.#..#....#.#..#..',
    '#...#...#....#.......#......#.#',
    '#..#.#......#..#...........#.##',
    '...............#....#.....#...#',
    '.#.#.#...#.##...#.#.#..#....#..',
    '...#.#.####..##.#...##.........',
    '##.........##.##.....##....#...',
    '................#...#.##.#.#..#',
    '.#..#....#...#..#..#..###.#..#.',
    '...#..#.##.#.####..........#..#',
    '........#....##......#..#.#....',
    '........##.........#..#..#..#.#',
    '#......#.#...#...#...##.....#..',
    '#...#.....#..#..##.#...#.#.#...',
    '....#..##...##.....#...#.#.....',
    '..#..##....#....#...#....#.....',
    '.#..#...##.......###...#...#...',
    '.#......#......#..##..#..##....',
    '....##....#..#.#....#.#..##....',
    '###......#...........#.....###.',
    '.....#...#..##.#..#..#.....#..#',
    '#.#....#...........#.##..#..###',
    '#....#...###.#...#..##..#.....#',
    '.#....#......##.#..#....#.#....',
    '....#.#....#..#.#....#..#..#...',
    '..#......#..#.#.#....#.........',
    '.#...#.#.....#........#.#...###',
    '....#..##.......#.###....##....',
    '#.#.......#......#.###........#',
    '#.........#.....####.##..#..#..',
    '.#.#..##...#.#.....##.#.#..#...',
    '.#..#..#..#.##..#...###.#...#..',
    '.....##..##..##..#.#.#.....###.',
    '.#..#...#..#......##.#.........',
    '....#..##....#.##.........#...#',
    '........#...#...###.........##.',
    '#.........#..##....#.#...#.....',
    '.......#.......#..#.......#....',
    '#......##......#.#.##..........',
    '.#..##..####...#.....####.....#',
    '........#.#....#..##..###.#...#',
    '.#...#...#.........###..#...#.#',
    '#.........#....##...#..........',
    '.#.#....#..........#...........',
    '.#.#..........#.##.....#.##....',
    '..#....#...##..###..........##.',
    '.#.#..#.##..#..#.##.##..##.....',
    '........#...#....#...#.#..##...',
    '......#......##..#..#.....#..#.',
    '.##.#....#...#....#...#..##..##',
    '##............#..........###...',
    '....#.......#.#..#.#####.....#.',
    '#......#.....#...#........#....',
    '..##.....###..#.#.#.#....#....#',
    '#...#...#.#..#..#....#..#......',
    '......#....#...#..#....#####...',
    '....#.......##....#....##......',
    '.....##...#.##.#.....##....#...',
    '.#....###.#..##...##.##.......#',
    '....#.#.#.##.............#..##.',
    '...........##......#...#.#.##..',
    '....##......#....#....##..##.#.',
    '.#.#...#.....##.....#.........#',
    '#.#..........#.......#.##...#..',
    '....#.##..#.#....#.....#...#...',
    '##.............##.......#.##.#.',
    '....#...#.....##...#..........#',
    '##..#...#...#.#.##...#.......##',
    '..#........#.....###...##..##.#',
    '.....#...##.#.#.##.....#...#...',
    '####.###...##..##...#..#..#..##',
    '......#..#..#.........#...#.#..',
    '....###.....##.##....#.##.....#',
];

console.log(solve(matrix2)); // 198