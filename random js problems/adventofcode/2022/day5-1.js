// https://adventofcode.com
// After the rearrangement procedure completes, what crate ends up on top of each stack?

function solve(input) {
    // handle input
    let [positionsInput, movesInput] = input.split('\n\n');
    positionsInput = positionsInput.split('\n');
    positionsInput.pop(); // remove numbers row
    movesInput = movesInput.split('\n');
    // read initial position
    const N = 10; // max columns
    let positions = {};
    for (let i = 1; i <= N; i++) {
        positions[i] = [];
    }
    while(true) {
        let row = positionsInput.shift();
        if (!row) break;
        for (let i = 1; i <= N; i++) {
            let letter = row[i + (i - 1) * 3];
            if (letter && letter !== ' ') {
                positions[i].push(letter);
            }
        }
    }
    // console.log(positions);
    // make moves
    for (const move of movesInput) {
        let [allMatch, count, from, to] = move.match(/^move (\d+) from (\d+) to (\d+)$/);
        let toMove = positions[from].splice(0, count);
        positions[to] = [...toMove.reverse(), ...positions[to]];
    }
    // console.log(positions);
    // extract last letters
    let lastLetters = '';
    for (let i = 1; i <= N; i++) {
        if (positions[i][0]) {
            lastLetters += positions[i][0];
        }
    }
    return lastLetters;
}

let input =
`    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

console.log(solve(input)); // CMZ

let input1 =
`[N]         [C]     [Z]
[Q] [G]     [V]     [S]         [V]
[L] [C]     [M]     [T]     [W] [L]
[S] [H]     [L]     [C] [D] [H] [S]
[C] [V] [F] [D]     [D] [B] [Q] [F]
[Z] [T] [Z] [T] [C] [J] [G] [S] [Q]
[P] [P] [C] [W] [W] [F] [W] [J] [C]
[T] [L] [D] [G] [P] [P] [V] [N] [R]
 1   2   3   4   5   6   7   8   9

move 6 from 2 to 1
move 4 from 6 to 3
move 1 from 6 to 5
move 8 from 3 to 8
move 13 from 8 to 2
move 2 from 7 to 6
move 10 from 1 to 6
move 3 from 2 to 8
move 5 from 4 to 2
move 15 from 6 to 5
move 1 from 1 to 4
move 2 from 7 to 3
move 2 from 4 to 2
move 12 from 5 to 1
move 4 from 8 to 9
move 15 from 1 to 3
move 10 from 9 to 7
move 1 from 5 to 1
move 1 from 4 to 8
move 3 from 7 to 6
move 8 from 2 to 6
move 1 from 9 to 8
move 5 from 2 to 3
move 1 from 4 to 1
move 16 from 3 to 1
move 2 from 2 to 7
move 13 from 1 to 6
move 1 from 2 to 4
move 2 from 2 to 9
move 1 from 4 to 7
move 2 from 8 to 2
move 2 from 2 to 9
move 1 from 6 to 8
move 2 from 3 to 8
move 2 from 1 to 9
move 1 from 3 to 9
move 1 from 3 to 2
move 5 from 5 to 1
move 2 from 9 to 3
move 1 from 2 to 3
move 2 from 1 to 3
move 3 from 3 to 2
move 1 from 5 to 7
move 2 from 7 to 6
move 2 from 8 to 3
move 1 from 8 to 9
move 6 from 3 to 4
move 3 from 9 to 6
move 8 from 6 to 4
move 1 from 2 to 3
move 1 from 2 to 6
move 1 from 2 to 9
move 1 from 3 to 9
move 5 from 9 to 5
move 7 from 7 to 4
move 14 from 4 to 6
move 1 from 5 to 3
move 5 from 1 to 9
move 4 from 5 to 4
move 1 from 1 to 7
move 1 from 3 to 8
move 1 from 8 to 4
move 4 from 9 to 7
move 6 from 6 to 5
move 10 from 4 to 6
move 1 from 9 to 6
move 1 from 4 to 3
move 1 from 3 to 6
move 1 from 4 to 2
move 35 from 6 to 3
move 1 from 2 to 3
move 4 from 5 to 8
move 2 from 5 to 4
move 3 from 8 to 2
move 2 from 4 to 8
move 26 from 3 to 8
move 3 from 2 to 9
move 6 from 3 to 5
move 3 from 5 to 7
move 3 from 7 to 4
move 3 from 4 to 5
move 1 from 9 to 5
move 6 from 5 to 1
move 2 from 8 to 6
move 11 from 8 to 5
move 9 from 5 to 4
move 1 from 9 to 7
move 2 from 7 to 9
move 3 from 1 to 4
move 1 from 5 to 7
move 8 from 6 to 1
move 5 from 7 to 9
move 7 from 9 to 2
move 3 from 2 to 9
move 3 from 7 to 1
move 4 from 9 to 8
move 2 from 5 to 6
move 2 from 2 to 8
move 2 from 6 to 9
move 13 from 8 to 1
move 1 from 2 to 8
move 3 from 3 to 5
move 1 from 9 to 8
move 3 from 5 to 4
move 1 from 9 to 3
move 1 from 2 to 3
move 4 from 8 to 2
move 3 from 2 to 4
move 19 from 1 to 2
move 8 from 1 to 8
move 1 from 4 to 3
move 1 from 4 to 1
move 7 from 2 to 1
move 1 from 3 to 1
move 2 from 3 to 1
move 15 from 4 to 5
move 1 from 1 to 7
move 11 from 2 to 8
move 2 from 2 to 9
move 1 from 3 to 5
move 2 from 9 to 4
move 12 from 8 to 3
move 16 from 5 to 1
move 3 from 4 to 3
move 1 from 7 to 5
move 2 from 8 to 6
move 1 from 5 to 4
move 1 from 4 to 9
move 18 from 1 to 9
move 8 from 3 to 8
move 9 from 8 to 2
move 4 from 9 to 2
move 8 from 1 to 2
move 2 from 6 to 4
move 17 from 2 to 1
move 1 from 4 to 5
move 3 from 2 to 6
move 1 from 2 to 9
move 2 from 6 to 1
move 3 from 3 to 6
move 1 from 4 to 6
move 2 from 3 to 2
move 16 from 9 to 5
move 14 from 5 to 4
move 3 from 5 to 8
move 1 from 2 to 4
move 4 from 8 to 6
move 1 from 2 to 8
move 1 from 3 to 9
move 1 from 3 to 9
move 2 from 9 to 1
move 10 from 8 to 7
move 7 from 6 to 9
move 16 from 1 to 5
move 7 from 4 to 3
move 1 from 8 to 4
move 5 from 4 to 2
move 1 from 5 to 9
move 5 from 9 to 1
move 5 from 1 to 2
move 2 from 9 to 7
move 1 from 1 to 7
move 1 from 6 to 8
move 4 from 4 to 5
move 1 from 6 to 9
move 9 from 2 to 1
move 11 from 5 to 6
move 2 from 9 to 2
move 4 from 3 to 4
move 4 from 4 to 6
move 1 from 3 to 4
move 11 from 7 to 4
move 9 from 4 to 7
move 11 from 7 to 2
move 2 from 3 to 5
move 2 from 4 to 8
move 7 from 5 to 2
move 1 from 8 to 3
move 1 from 5 to 1
move 1 from 3 to 7
move 6 from 2 to 9
move 1 from 8 to 9
move 6 from 9 to 2
move 15 from 6 to 2
move 1 from 7 to 2
move 31 from 2 to 7
move 22 from 7 to 3
move 2 from 5 to 1
move 3 from 7 to 4
move 1 from 4 to 9
move 3 from 4 to 3
move 1 from 8 to 6
move 1 from 9 to 6
move 15 from 1 to 5
move 1 from 9 to 5
move 1 from 1 to 8
move 2 from 6 to 8
move 1 from 8 to 4
move 1 from 4 to 6
move 1 from 6 to 9
move 10 from 3 to 1
move 1 from 9 to 7
move 2 from 7 to 8
move 10 from 5 to 1
move 12 from 1 to 4
move 1 from 3 to 8
move 11 from 4 to 8
move 1 from 8 to 3
move 5 from 5 to 8
move 1 from 5 to 8
move 6 from 8 to 6
move 3 from 2 to 1
move 1 from 6 to 2
move 5 from 1 to 6
move 3 from 1 to 4
move 3 from 2 to 8
move 1 from 2 to 9
move 8 from 3 to 5
move 2 from 1 to 3
move 3 from 7 to 5
move 2 from 3 to 5
move 3 from 5 to 2
move 1 from 7 to 9
move 2 from 9 to 1
move 1 from 6 to 9
move 2 from 4 to 8
move 5 from 6 to 5
move 1 from 6 to 7
move 1 from 9 to 8
move 3 from 6 to 5
move 7 from 8 to 9
move 5 from 9 to 1
move 2 from 4 to 8
move 11 from 5 to 9
move 3 from 2 to 3
move 2 from 5 to 8
move 4 from 3 to 7
move 11 from 9 to 5
move 3 from 7 to 5
move 1 from 3 to 5
move 8 from 1 to 4
move 5 from 3 to 9
move 15 from 5 to 4
move 8 from 4 to 1
move 12 from 8 to 1
move 4 from 5 to 8
move 12 from 4 to 5
move 3 from 7 to 2
move 11 from 5 to 7
move 8 from 8 to 7
move 7 from 9 to 8
move 2 from 5 to 7
move 4 from 7 to 8
move 9 from 8 to 4
move 11 from 4 to 5
move 6 from 7 to 8
move 9 from 8 to 7
move 18 from 7 to 5
move 1 from 8 to 1
move 4 from 1 to 5
move 1 from 7 to 2
move 6 from 1 to 9
move 1 from 2 to 4
move 1 from 4 to 3
move 3 from 1 to 7
move 1 from 4 to 2
move 3 from 2 to 5
move 2 from 9 to 5
move 1 from 2 to 6
move 4 from 7 to 8
move 1 from 6 to 2
move 1 from 2 to 4
move 4 from 8 to 5
move 3 from 9 to 7
move 1 from 9 to 5
move 1 from 4 to 3
move 2 from 3 to 8
move 2 from 7 to 4
move 28 from 5 to 8
move 1 from 8 to 9
move 1 from 9 to 3
move 6 from 5 to 6
move 5 from 5 to 2
move 1 from 3 to 4
move 1 from 7 to 4
move 1 from 5 to 6
move 16 from 8 to 3
move 7 from 1 to 8
move 4 from 4 to 9
move 1 from 2 to 4
move 3 from 2 to 3
move 6 from 6 to 8
move 10 from 3 to 8
move 1 from 2 to 7
move 1 from 6 to 7
move 11 from 8 to 5
move 2 from 7 to 8
move 1 from 1 to 9
move 5 from 9 to 5
move 4 from 3 to 2
move 1 from 4 to 2
move 1 from 3 to 8
move 3 from 8 to 2
move 19 from 8 to 7
move 6 from 7 to 6
move 4 from 5 to 2
move 9 from 7 to 5
move 1 from 7 to 1
move 5 from 6 to 9
move 1 from 7 to 4
move 1 from 6 to 7
move 1 from 4 to 7
move 1 from 1 to 2
move 2 from 7 to 3
move 6 from 5 to 9
move 9 from 9 to 1
move 17 from 5 to 4
move 2 from 3 to 1
move 13 from 4 to 7
move 3 from 3 to 5
move 7 from 1 to 4
move 1 from 5 to 8
move 2 from 5 to 2
move 6 from 7 to 3
move 1 from 5 to 7
move 1 from 9 to 1
move 2 from 3 to 2
move 1 from 9 to 3
move 9 from 7 to 3
move 10 from 3 to 5
move 8 from 4 to 2
move 1 from 4 to 1
move 13 from 2 to 4
move 5 from 4 to 3
move 1 from 5 to 9
move 1 from 7 to 2
move 6 from 4 to 2
move 4 from 1 to 8
move 3 from 4 to 6
move 9 from 8 to 9
move 17 from 2 to 3
move 2 from 8 to 6
move 1 from 4 to 3
move 2 from 6 to 3
move 2 from 1 to 3
move 13 from 3 to 4
move 8 from 9 to 8
move 7 from 4 to 6
move 3 from 5 to 6
move 5 from 8 to 2
move 9 from 6 to 1
move 7 from 2 to 4
move 2 from 6 to 9
move 1 from 1 to 5
move 18 from 3 to 8
move 5 from 1 to 3
move 1 from 6 to 1
move 9 from 4 to 7
move 11 from 8 to 7
move 5 from 7 to 5
move 2 from 4 to 5
move 1 from 6 to 2
move 13 from 7 to 8
move 1 from 4 to 9
move 1 from 9 to 6
move 4 from 1 to 5
move 1 from 7 to 6
move 9 from 5 to 7
move 8 from 5 to 6
move 10 from 7 to 2
move 1 from 5 to 7
move 1 from 7 to 1
move 17 from 8 to 2
move 9 from 6 to 7
move 6 from 7 to 1
move 2 from 7 to 2
move 1 from 4 to 2
move 12 from 2 to 8
move 7 from 1 to 2
move 6 from 8 to 6
move 3 from 8 to 2
move 1 from 7 to 2
move 2 from 3 to 4
move 1 from 4 to 9
move 2 from 3 to 5
move 2 from 3 to 7
move 1 from 4 to 6
move 2 from 7 to 1
move 7 from 2 to 7
move 6 from 7 to 1
move 1 from 5 to 2
move 6 from 8 to 4
move 4 from 9 to 7
move 1 from 5 to 2
move 3 from 8 to 1
move 1 from 9 to 4
move 1 from 7 to 8
move 1 from 8 to 1
move 4 from 7 to 8
move 1 from 4 to 2
move 3 from 6 to 9
move 2 from 9 to 7
move 1 from 9 to 3
move 2 from 4 to 3
move 2 from 8 to 3
move 5 from 3 to 4
move 4 from 6 to 2
move 8 from 2 to 9
move 1 from 6 to 5
move 10 from 2 to 3
move 2 from 8 to 3
move 8 from 9 to 3
move 9 from 2 to 5
move 1 from 2 to 4
move 1 from 2 to 3
move 7 from 5 to 6
move 1 from 5 to 7
move 13 from 3 to 4
move 2 from 7 to 8
move 5 from 3 to 1
move 1 from 5 to 3
move 1 from 8 to 5
move 1 from 2 to 8
move 1 from 7 to 9
move 1 from 4 to 2
move 15 from 4 to 8
move 6 from 4 to 7
move 6 from 7 to 8
move 1 from 6 to 5
move 1 from 4 to 6
move 1 from 9 to 6
move 2 from 5 to 2
move 6 from 6 to 4
move 6 from 1 to 8
move 6 from 4 to 9
move 2 from 6 to 1
move 1 from 2 to 9
move 26 from 8 to 1
move 4 from 3 to 7
move 2 from 2 to 5
move 16 from 1 to 4
move 3 from 9 to 8
move 3 from 8 to 7
move 3 from 5 to 1
move 2 from 9 to 2
move 1 from 9 to 7
move 1 from 9 to 1
move 8 from 4 to 1
move 4 from 4 to 9
move 1 from 2 to 3
move 1 from 3 to 7
move 2 from 8 to 2
move 3 from 4 to 2
move 1 from 4 to 7
move 9 from 7 to 5
move 1 from 9 to 8
move 2 from 9 to 8
move 5 from 5 to 7
move 1 from 9 to 5
move 6 from 2 to 6
move 1 from 8 to 2
move 5 from 6 to 5
move 1 from 7 to 4
move 3 from 8 to 9
move 3 from 9 to 7
move 1 from 6 to 4
move 2 from 4 to 1
move 2 from 5 to 8
move 1 from 2 to 9
move 2 from 8 to 9
move 3 from 9 to 3
move 8 from 7 to 3
move 4 from 5 to 8
move 1 from 3 to 9
move 3 from 5 to 8
move 1 from 5 to 3
move 6 from 8 to 6
move 3 from 3 to 9
move 5 from 3 to 2
move 5 from 6 to 4
move 14 from 1 to 5
move 8 from 5 to 6
move 2 from 3 to 2
move 4 from 9 to 1
move 1 from 8 to 7
move 7 from 2 to 3
move 6 from 3 to 7
move 3 from 5 to 3
move 1 from 3 to 9
move 12 from 1 to 5
move 1 from 9 to 7
move 2 from 3 to 1
move 1 from 7 to 8
move 1 from 8 to 7
move 2 from 3 to 6
move 2 from 1 to 9
move 2 from 5 to 6
move 2 from 9 to 7
move 9 from 7 to 3
move 7 from 1 to 5
move 5 from 5 to 2
move 8 from 6 to 8
move 5 from 8 to 9`;

console.log(solve(input1)); // SVFDLGLWV

