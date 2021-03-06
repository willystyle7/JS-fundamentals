// What do you get if you multiply together the number of trees encountered on each of the listed slopes?

function solve(matrix) {
    let total = 1;
    let slopes = [
        { right: 1, down: 1 },
        { right: 3, down: 1 },
        { right: 5, down: 1 },
        { right: 7, down: 1 },
        { right: 1, down: 2 },
    ];
    slopes.forEach(slope => {
        let trees = solveSlope(matrix, slope);
        total *= trees;
    });

    return total;

    function solveSlope(matrix, slope) {
        let trees = 0;
        let row = 0;
        let col = 0;
        do {
            if (matrix[row][col] === '#') {
                trees++;
            }
            row += slope.down;
            col += slope.right;
            col %= matrix[0].length; // wood spread on right
        } while (row < matrix.length);

        return trees;
    }
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

console.log(solve(matrix)); // 336

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

console.log(solve(matrix2)); // 5140884672
