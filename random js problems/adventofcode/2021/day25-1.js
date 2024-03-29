// https://adventofcode.com
// Find somewhere safe to land your submarine.
// What is the first step on which no sea cucumbers move?

function solve(arr) {
    arr = arr.split('\n').map(r => r.split(''));

    function moveEast() {
        let isMoved = false;
        for (let i = 0; i < arr.length; i++) {
            let first = arr[i][0];
            let last = arr[i][arr[0].length - 1];
            for (let j = 0; j < arr[0].length - 1; j++) {
                if (arr[i][j] === '>') {
                    next = j + 1;
                    if (arr[i][next] === '.') {
                        arr[i][j] = '.';
                        arr[i][next] = '>';
                        isMoved = true;
                        j++;
                    }
                }
            }
            if (last === '>' && first === '.') {
                arr[i][arr[0].length - 1] = '.';
                arr[i][0] = '>';
                isMoved = true;
            }
        }
        return isMoved;
    }

    function moveSouth() {
        let isMoved = false;
        for (let j = 0; j < arr[0].length; j++) {
            let up = arr[0][j];
            let down = arr[arr.length - 1][j];
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i][j] === 'v') {
                    next = i + 1;
                    if (arr[next][j] === '.') {
                        arr[i][j] = '.';
                        arr[next][j] = 'v';
                        isMoved = true;
                        i++;
                    }
                }
            }
            if (down === 'v' && up === '.') {
                arr[arr.length - 1][j] = '.';
                arr[0][j] = 'v';
                isMoved = true;
            }
        }
        return isMoved;
    }

    let step = 0;
    let isMoved = true;
    while (isMoved) {
        step += 1;
        let isMovedEast = moveEast();
        // console.log(arr);
        let isMovedSouth = moveSouth();
        // console.log(arr);
        isMoved = isMovedEast || isMovedSouth;
    }
    // console.log(arr.map(r => r.join('')).join('\n'));
    return step;
}

let arr =
`v...>>.vv>
.vv>>.vv..
>>.>v>...v
>>v>>.>.v.
v>v.vv.v..
>.>>..v...
.vv..>.>v.
v.v..>>v.v
....v..v.>`;

// console.log(solve(arr)); // 58

let arr1 =
`vv>v......vvvv.v...v>..v..>...>>.>.vv>vv>.v>v...>....v...>>...>..>..v..v.>.>.>v>v.>v>.v>.v.>.>>>>>>.>>v..v...>v..vv>>v.>.vv.v.>>.>.>...v>v.
v>...>>..>v.>>v>...vv..>>..>>v..v........>>.v.>>.>.vv.>.>.>....v.>>.v..>.>>.v.....>.v>>vv>...>>.>..>>..>...v.>...>v.>.....>v>.v>v>>>..>..v.
.>vv..v.>...v>vv.vv..vv>.>...>.....>v....v>>>.v>v.>vvv..v>...v>.v....v>vv>...vvv.v>.>>>>...v>.vvvv>v>vv>.>.vvv.........>>>v..>..vv>...v..>.
..v>>.>>....v..>>v.>.>...>>>v.v.vv.......v>..v>vv>v>v.v..>.>>..>v...>vvv.>.v>>v>v>..v.vv....vvv>>v>vv.>>>v....v.>..v.>.vv>>>>>.....>v>...>v
...>>.>.>vv>>......>vvvv>..v.>.>.>.>..>...>v.v>>v.v.vvv.>vv....vv......>.>>..>..>v.v..>.>>>..>v..>...>v>....vv...v..>>.>v.>...>v.vv>.>.v..v
v....>.>vv.>>>v.>v....v.....vv..>....v..v>>v>.>..>..>.>.>>..vv>.>>.>>>.>.>>v>..>v.v>...>.>...v.>.vv..v.v...>>...vv>...>>v>.>>.>>.>.>..>..>>
...v>.v>>....v>.v.v>vv>..........>.>.>>v..v>..v>.v.v..>v>v>.>vv>..vv..v.v>..>....>...v>..>.vv>.>vv.v>>>.v>>...vv>..v>>..>..v.v>v.v..>...vvv
>.>.v.>...>v.>.>....>..>vvv...v....vv>>>.>>>.v..>>>v>vv>.v.>vvv>.>v..v..v.v>.vv..v...>vv....>v.v.>.v>.v..v..v....>v.>v..v>>.v>>....v>.vv..>
.>.>.v.>vvv...>v.v..v.>.>..v..>.>>v.v.>>.vv>>>>..v..vv>>.v..>.....>.v>.>>>.>vv..>>>..v.vv....vvv>v>..v..>v.....v.v.v...>>>vv..>v.v..v.>..>.
v>v...>...>.v......vv.....>.>>v>.>>.>v.v.v...v.>vv..v>>.v>>.>.>..vvvvv>.>v.v...v...v>..>...v...vv>....v.>>vv....v.v....vv..v..v..vvvv>v....
.vv.>.>v>.v.v.>>.v........>>..>v.v.v.v..v>..>v....vv>..vv....>>...>v>.>...>.vvv>>v...>..vv.>.>>>.vvvv...v>vv..vvv..vv>...vvv.>v.>>.v...>>v.
.....v...>v.v.>.>>>>>.vv>..v.vv>...vv>...v.v..vv.v...v>>..v....v>v..v.v.>v.>>vv>.....>.>>vv..v.v.vv.v>......>>>...>>...v.>.v.vvvv......>>>v
.>.vvvvv>.>..>>.>...v>>>.>>......vv>>.v......v..vv..v.vv>v...vv>.vv.vv....>>.>v..>>.>.......>.>.v.....>>.>.......v.v...v>..>>>..>>>vvvv>.>v
.......v...v>v..v>>>.>.v..vv>.>.v.>.v.v...v>.....>....v.....>......v....>...v.vv.>vvv.>.>v..>>>v....>..v....v.>..v...>>>.vv>>v.>..vv>v>..>.
v.v>..........v>>>.v.v..>v>vvv>.>.>>>v>.v>.v>v....>v>.v...v>.....>..v.v>.v>>>v.v>...v.v>>>v.v>>.>..>.vv>v>...>>..>.>v...>.v....vv..vvv>..vv
v.v..>...v...>...v...v.>..v..v>....v.>>...>>vv..v..v>v...v..>v..v>v>.>.>.>.>.........v.v..>.>.v>v>>..>...>.>.v.v>v..>>v>..>.vvvv..>.v>>.>v.
.v..v>v..v>v.vv>....>v>vv.v....v..>..vv.v>.....v..>.v>v..v.>v>>>....>>.v>v.v>>...>...>.>>>..>..>v>vv.vv>>v.>>>v.>......vv>v.vvv...>>>..v>>.
..vv.......v..>vv>v..>.>>..vvv.>vv>>....v.v>vv>>.>>vv...v..v.vvv.vv...v..vv>>...>.>v..v..>.v>.v>v.v..>>.>..vv>...>..>..>..>>..>.v.>v>>>>..v
v>v.v....>.>.v...>.>v..>>>.>v..v..vvv>.>>.vvv..>v>>>>......>..>...v.v>>>.v>vv.>...>.>.vv>....v.v>vv.>v>v>.....>..v.v....>.vv>v..>v>.>...v..
.>v.>v.>...v.>>>..v.>vv>>v>.v...>..v.....vvvv>.v..>..>.>>..vv..>.>.>>........v>.>.v......>.v..>>v.>v....v>.v.>v.>.>v.>.>>>.>...>vv.>.>.v..v
v..v>.>.>.>.>>v......>v..>.vv.>.>>..vvvv..v..>..>....>>>v.v>.>..v.v>v>..>v.v>>>>v.>....>.v.>v.v.>>>..>.>>.vv..v>v.v..>.>..vvv>v.vv..>v.vv..
.v.>...vvv.v.>.v.>..v...>.......vvv.....v.>.vv>vvvv..v.>..>..>>>...vv...v>vv>.>.v>.v..v...vv.v.vvv...vvv.>v.>>...>v...>.vv>>.>.>v>>v.>>..v.
v.v>>v>v.>...>.v>..v>vv...v>.v........>..>v.vvv>..>>..vv>>..vv.>....v>>..>vvv.>....v>..>>v.>.>v.>.v>v>>v...>...>>v.>>>>>.v>...v>>....v..>..
>v>>.....>>.v>vv>.v.v...>.v...>>>.v....>v.>.>.v>>v.v.......v.v>>>>v.v.v>v.>..>v.v>.vvvv...>.>.vv.>>.vv.v.>v.>>>>v......vv..>v..>....v>>v.>>
vv>vv.v.>.vv....v..>.v......v>.vv...v..>.>v.vvv..>.>vv....v>.>.>..vv...>v>>v..>vv.v.>v..>v.>>...v.v..>..>.v..vv>v>v>...>v>v..>>>.>...vvv>>.
.>.>.vv.v...v>..>...>...v..v>v...>..v.vv..>..v.v....v.>v.v>>>>>..v.v.>...vv>vv>v.>....v..vvvv>>......v.v>..vv.....>>v...>.v>vv...v>>..>.>.>
vvv.v..>.vv>....>vvv....vv.>vv.v.>v.>v>...>.vv>>..vv.....>>>>...>.vv.v.>v.v..>v>>vv>v..v>>....v>.>>.....>>vv..v..v>v....>..>..v.....>vv....
...>...>vvv.>.....>.>vv...>v..v>>.>>..>>.v>>>.>>.>...v...>vvv.........v>....v>>v>....v.>...>.....v..v...v..>.....v..>v>v...>v.v..>>.v..vv>.
..>.>.vv...v.......vvv>.>..vv>v....>v....>.>...>v>v...>.>>.vv.>...v>....>.v........v....>.>.>.v.v...>v.>v.>.v>>>vv..v>.>..>....>.>.v...>v..
v.......>.vv>.v.......>...v.>..v>.....>..>v>v.....v....>vv>>..>v..vv>...v>..v.>v.vv>v...v.>vv.>v...>>.vv>>.>v.>.>.v...>.>>.v.v..vv.v>vvvv.v
.v>..>..>v..>.v>.......v>...v>>>..>.v>v>v.>..v>..vv.>v...v.>v.>v>>.vv...>v..>........>.>..v.>....>v..>..>>....>>.>.v.>vv.>.>.v.>>..>.v...>v
>v....v...v.v..>>.v....v>.v..v..v.v.........>.>>v>..>.>..>>v..>v>vv..v..>.v..v.vvv>>>vv.v.v.v.v..v.>v>.v.v>.>...v..>v...>v..v>>>..v>>..>.v.
v..v..>..>v>...vv>>vv>.>>>.......>.v.vv..>..vv.vv......>......v...v.vvvv>.v.>.v>..>...>>>>vv.>.v.>>.>.v.v>v..>>vv>>>.....vvvvv...v..>...>..
..v.>v>..>.vv....>v.....>>...>v...v..>..v>.vv>..v..vv....>.v....v.....>..v.....vv.v>v>..v......v...v>v.......v..>.>..>>v.....v>.>.v.>.vv...
.v>>vvv>..>v>.>....vv>v..>...v.v..>.vv.....v>>v>>.>v.>.....v..v.>..>.v>.>.>v..v>....>>>...>...>.>..v.>>.>>v...v..>v>.>...v...v>v>v.>>......
.vv.>v>.>v..vv..v..vv>v.>>>....vvvv>v....v...>.>..>.>..>..v>.v.v>.v..v...>.vv>.v..v.>v>>.>..v.v>.>.v...>>v..>v..v.>.v>v>.vv..>...v..>.>vv..
...>.>.>>v.v.v..>.v>.v>.v.vv..v.v...vv...>.vv.v>>...v.>vv.>.v>..>>v>.vv....>.>..>v.v..>>>..>v.v.>vv>.>.....v..>v>>.>.vvv..>....v>.v>vv>...>
v...v...v..>.v>.v..v.v>v..vvv.>.>....v>>...>>.v>...>v...>...>..v>v...vv>...v...>.>>.>.>.....>v...>..vv>v..v.>..>v.v.>v..>>>.v>>.>v.v.vv>.>.
>..v.....v.v>v.....>>vv..>.>.>.....v>....v>v>>.vvvv.>.v...>vv..vv..v...v.>..v..v.v>.v.>v>..>>vvv..>vv..vv>.v.v>>vv>vvv...v..v....vv..>.>...
>v>..v.>>>...>...v>.>.v>v...>v>>.v.>>v>.v.vv..v.v>.v>.>>..vv>..>v>>.>......>.v>..v.v.v.vvv.>v>v.>.>vv....vvv..>.v....v...v...>..>>vv...>...
vvv...>......v>>>..vv>.>>....>.>>v...>.>>.>.v..>>>>.>>...>.vv.v.>.v>.>..>>.v>..>.>v.>..>v.v>vv..>..>>.vvvvv.>.>v.>..v...>>>....vv>>.vv.>vv.
v.>>.>.v...v..>.v.>v.....v.....>v...>.>..v..>.....>vv....>..>>v>vv..v.>..>........>.>..vvvv>....v.>v>v>...>..v.v.>.>vv>>>v.v.>>..>.v>>.vv..
.>v.v>.>v.>>..v.v>....>v..v>.>..>..vv>>v..>vv>.>.v..>vvv>.>>v..v..>...>v.v.v..>...>...>.>>..>..vv..>vvv>>.>v...v>.v>..>vv..v.>v>.....v>v>.>
.v.v...>..>v..>...v>v>.v>>..>.vv..v>>v.>>..>.....>>>>>>>..v....v>.>>>v>.v...........v.v..>v.>>>v>v>>v...>..>v...>.v...>..>v>.>.>>.>>...vvv.
.v...v..v>..>...v.vvv..>..>vv....>...>v>v....>..>v.>>.>>v>.....>>...>v..>..>...>vvv.v...v>...vvvv.v....>.>vv.>>>>....>>>..>..>.v...v>..>v..
..v.>..>....>.>>.>>v.v......v>.>>.>.>.v.v>..>>....>...v>>>.v>.>.>vv.>>.v>..v.>.>.v>>v..>...>v>v>.>..v>.v.>>.>.>>.....>.v>vv..>>vv...v.....>
.vv.>.>v.>>v...>....v...v..v>.v>.>.v.>>>vv...v.v.v>.>>..v>.>...>.v..v>.>.vv.>v>.>...>.>.v...vv.v.v.v..>>..>.>.........>..v>.>.>v>v>.vv>.v..
.>..v>>.>>v.v.>....v....v>v......vvvv.vv.vv.v....>.>.>.v.>v.v...>v.v.v>.>.>v..v..>>v>.>>vv.v>>......>....vvv.v..v..v.>..>>.>>...vv.>>v..v.v
>....v.v>.>.>..>....>>>..v>.>.v..>....>.v>.v>.vv....v..vvv.>>..>>>>.>>vv.>..>.vv.....v..>>..v.>>v.>>..>.v....>>..>>...v>....v>.v>.v..>v>.>.
v.v..v>v...>>v>..vv.>..v.>>v...v..>v.....v.v.>v.vv.....>>v>>vv>.v..>..>v..>v.>v.v..v>v>.v.>....>.>..v>.>.v..>..>v....v...>vv..>v>..>...>v..
v.>vv>.v...v>v..v.v>...>>v.>.>v...v.>...>......v..>.vv.....>v>v.vvv..v.v.>>v>v>v>..>..v>...>..>..>>v>>..>....>v..>>.v.>>>>.>..>........>>..
vvv.>>.....v.>v.v.>.>.vv.>.v....v.v>>..v.v.>v.v.v.v>.v>..v.....v>>v.v.>..>v...v>v.>.v.>.v.v>v.>....>>vv..v..v......>v.....>.vvv.v>>.v>.v.>.
.v.>>v>.v>.>>..v.v...>v....v.v.v.v....v.....>vv>>.....v.>v.v..>>..v..v.>>v.>........v.vv.>v..>.>..v>..v.v>.>>..v..v...>..>v.>>v>v.>v.>..>.>
.vv...>v>v>.>.>...>>.........>.v>..>.v.>>.v.>>>...v.vvv>......v.vv>v...>v>>vvvv>..>..>v.v>vv>.>v..>....>.>.vv.v.v>..v.v.....vv.>>.....>v>..
>...>..>....>...vvv>.>....v>...vvv...v...>.v>>vvvv..>.v>..>...>.v>>v.v.v>>>..v>>>v>>>.>>>...>..>>.........>>.>vvv.>.....>..>...vv...>....v.
>v>>..>..>v..>.vv..>...vv.>.v>v...v>.>...v.v>...v.v...>.v>.>...v.v>>..v.v>..v.>>.>>..>vv>v....v>v..vv>v..v>v>>.....>.>>>v>v..v>>....>v.>.v.
>.>.v.v>v..>>...>..v..v>...>>vv>.v.>.v>>.vv..v.>..v>v.>v>v.>.......>.v>>v..v.>v.vvvv>>v.>v..v.>>vv>.>.>.>.vv>>v..>.>v.vv.v>..v>vv.>.>>..>.v
>.v.v.v.>.>>..v.>.>>.v..v.>.v>.v>.vv...v..v..vvv.v.v.v..>vvv>.v>.>..vv.v.vv..>>v>..v>.>.>.>.>.>v...vvv.>..>..v...v.v.v>.v.>v.>......v..>...
..>.vv>.v.>.>.v.vv.>>v.>v..v.>.v...>.vv>v..>>.v.vvvvv>..>v>>.v.v..>>...v.vv..>..vv...>......>>>....>v..>..vv..>..>v..v>..>..>..>>.v>v...v.>
.>.>>v.>....vvv....v.>.>vv>.vv>>>>....v.v.v>>>.>..>>..>>>..>>..v.>v>>..v>.vv>v.v>.......v>v.>..vv.>v.v..>v>.>..v.v>...>>>...v>..vv..v>vv..>
..v.>>...vvv.vv...v>v.>>.v...>>>>.vv>v.>>v..>vv.>......v...vv.v>>v.v..v.v>.v.....>v>.>.v...>>..v.vv.>>>>>>>v>....>v..>vv.>..>..>v>>.v....v.
vv>>>.v......v..>.vvv.>.>.>v..v.>v>>>v>>....vv>..>..>v...>..vvv........v>>>..v.>v>v.v>..>...>v>>>v.>...>...vv>v......>.>vv..v>.>>.v...>....
>.>..vv.v..>>>v...vv>>>v.>>.vvvvv>>.......>>..v..vv>>v...v....v>v.vv.vvv........v>.v....v..v.>v.>..>>....>>..>vv...vvv.....>>>.>v>>v.v>v.>>
>>.....v.v..>vv.>.....vv.>>>..v..>>..vv>vv..>>v>v.>.>v.>..v.v...>.v.v>.>>.....>..>>.>.v.v>...vvv..v>v>>.....>..vvv.>>>.....v>>....v...>>>>>
...>vv.....>>>vv.>..>>>v.v.v>v>...>>>v..>.>...>.>>...vv.vv.>>.>>>...v...>>.>..v..vv....>..v.v.>v...v..v>.v>..v.v>>..>.>>>>.v.>v.>v.>v.>.v.v
..v>>.vv.v.vv.>v.v>>v.>>>..>.>v..vv.v.....v..v>v>.v..>....vv.vv.>vv.v...>.vv...>..>v...>..v>v.v.v..>>.v..v>.v..>.>vv.>.v>vv>..v.v>.v...v>..
v>.vv....v..>....v>.>v..>...>>.>>v>>..v..v..>v>..>>v...v..>..v....>v..v>..v.>v>v>...>..>....>.>>..>vvv......>...>.>.>...v....v>>v.v>>>.>v.v
v..v..>v.v...v>>.>..>>..v.v.v.....v>...>>.....>.>>..>..>.>..>.vv>.>>>v>>v.>.>>..>...>..vv....v...>>..>>v>.....v>...v>..>v....v.v>vv>>..v>.v
.v.vvv.v>>.....>...v.vv.v.v.....>>v.v.....v....v..v..>...v..>>.>.....>>>>>.v>..>v>vv.vv>.....>.>.>v...vv...>.v.....v....v.v.>......vv..v.v>
>v..v.....>...vvvv>>..>>>.>>v.>>.v.v.>>v..>.v...>.>.v..vvv...v.>.....v..vv>v>>.v.>v.....>...>>.v>...v>.>..vv.v...>.>..>v...v.v.>>..>v>.>...
>....>v>.>v>vv>v..>..>v....v.>>.>.>...v..>>v>v>>v....>vv.vv>>v..>>>.....>>>vv.vv...>v..>>>>.vvv.....>...>>vv.v....>.>>>.v.vv>.....>...>>v.v
.>vv.>..v.vv.>>..v>v>.>.v>>.>........>.v.v..v..>>vv>>>..v.....v.v>..>..>.v.vvv....>.>v>.v.vv.......>v....v..>..>...v>..vvv..v...vv.>.vv>..v
...>v......>..v.>>.>.v>.>.......>>v..vv.>>>>v.v>>v.>...>v..>.v>..>>v>>vvvv.>..>>v.>>...v>>...v......>vv..>..v.>....>>.>v>.>.>v.>>>v.v......
..v.>v..vv.....>...v...v>v.>.v>...........>>>..vvvv>......v.vv..v..v...v....>>v.v.>.v.....v..v>.vv.>>v.vv.>...>v..vvv..>..v.>>.>..v>...vv>>
v>......v..>..>vv.>>v.vv..v....v..>.....v....>..v.v>...v>.>....v>...>.>.v.....>.v>.>....>>v>v.>.>vv.>>v..>.vv..>>vv>..v.>.>v..v..........>.
....v.v>....>..>>..>...v..>..>>vv.vv.vv>..>..vvvvv.>.>v.>>>.vvv.>v..v.>>>..vv...>v>..>.>v...v...v...v.v>vvv>>....>..v>.v.v.v.....>>.>v>..v.
..>..vvv..v>>>.>v...>......v....>..>.>...v>...>>.v>.v..>....>..v>vv>..>>.vvv.>>v>..>.v..v>.vv.....v.>.v.>....>>...>v.>v>vv>.......v....>..>
>>.v>.>v..vv....>v>>>v.>.......>.>...>vv>v....vv.>>v..vv..>v..v>>v>.....v>v>.>...>>..vv.>.>v..>.......v..vvv.v..v...>.vvv.v.>vvv...>..>...>
>.vvv.vv.vvv.>>.>vv...>.>.vvv.>>..>>>>...>v....vv>.>>>..vv.>>>>.......>.vv...>>>v..v>vv...v.>...v.>..>v>..v....>.v.>...>vvvv...>vv..vv..v.v
....v..>...>v>>v..>....v>v.v.>v.v>.v.v....>...v..v>>>.>..v...>vv>..>...v.v...>vv.....>v.>.v...>>.>..>v.>.>..v....>>.>>v...v.>.v>.>..v>.>.vv
...>.v>v>>..>.v.vv>.>....v>.>.>>.vv.......>>vv>vv>.>v>.>v...>.v.>.>.>>v..>>..vvv>.vvv.v.vvv>>..>v>.v.>..v...v.>.v.vv>.>>>>.>v......vv>.....
....>.>.v>>v>>v.>.>.v...v..>.....>.vv...>v>.>v>>v>......>.>v>.>..v.v>vv..>....>>...v.vv..v..v>v>v......v.v.>...>v.>...v>>v.v....vv...>>.v.v
>.v..v..>>v........>.v...v..>.>>>v..vv.v>vv.v>>v.v.>v...>...>...>.>.>.>.v>......>v.>vv>>>...v...v>vvv>..>vvv.>>v>>.v..v>.v.vv..>v..v>>v.>.v
v..v..>.>>.>>.>v.v.>v>>..>.>.>v.vvv.>.v>.>>..>v..vv>v.>>v.>>v.>>.>...v.v...>.v..v....>.v>v>.>.vvv.vv.>v...>v>v>vv...>>..v>....v>>...v>>...v
v..vv>>...v>...vv>>>>v>..v>.>...>.vvv..vv.vv.>>>>>>...>>..>v>v..v.v..v.>v>.>>>>...v...>.v.>.v.>v..>vv>........v.v.>..>..>v>...v.v.>v>..>...
.>....v>..v.v..v>v.v...v>..>......>>.v....>.v.....v.>....v.>.>.v.>v.>.>v>>>>v....v..>..v...v.>.vv.>>.vv.>>..v..vvvv..>v.v..>..>.>>>>..vvv>v
>.....v.....vv...v.v..v....v>v>..v>v>>>vv..v.>..>.....>>>......>>v..>..>>.vv>vv......>v...v...>v.v>>.>.>..v.v.v>>>.......>>.v.>>>v.vv.>vv.>
>v...>..>.v.>vv.v...>...>v..>vv....>>v...vv>.v>vvv.v.>.>vv....>..>.vvv>.vvv...v>>.>v>v>.v.vv>>.>...>..>..v..v>v.vvv.>v.>>.....v...v>v>>v.v.
v>>.....vv..>..>......>v...v>>v.>...>>>v.v....v.>>>.vv.v..>>v...v.>vv.v.>.>>vv..>>.v.v>..>>.>..v>..vv...>.....>...v>>>.>>vv.....>.v>>vv>...
v.....>>.>.v...>v..v.v.v>..v.v>>...>v.v..vv..vv...v>.>>.>...>v>>>.>...v.>>>...v..v>>>..>v.>v....>...vv.>>v>.v.vv.>vv>>v.>.vv.v.vv...v..v.v.
>v>v.>.>>>>..>.v>..>...>......vv.v......v>v...>>.v>v.v>.....v>>>v>..v>>.>v..v.v>vv>v...>...v>v...v...>..vvv>..v.>v....v..>>..v>...v>v.>.>..
...>>..>v>.......vv...v......vv>v...>v.>.>....>.vv.vv.vv>>vv>.v..v.>>....>v.>...>v>>v>....>v>...>>..v.vv>vvv.v...>.>v>>vv....v.>vv.>.>.....
>...v>v>.>>.....v>>...v>.>v.>.>>v>..vvv>.v.>vv>v.>v.>v>.>>vv.....v.v....v..v...v..v.>.>v.....>...>>>>..>.vv.v.....v>.v>..v>.>v>v>...v..>..v
v>.......v>>......>vv.vv>..v.>.>>..>>...v.>.>.>.vv>v>vvv.v..>>>.vv.>..v.>vv.>>.....>..v>vvv>.>.v>..>v......v>>.>>vv.v.v.vv..>vvv>.>>.>...v.
...>.v..vv.vv.v>vvv.>.v..>vv.vv..>v>..>.>vv>...vv...v....v>...>v.>vv>...v>v..v.>..v.v>.>.v.v>.v.vv>>..v.v.v>v>..>.v.>>....v..v..v..v>..>.>v
vv.v.>.>v....v..vv>>>.>>vv>v.>..v..vvvv.>.....>>.v>vv..vvv.>.>.>.>v...v>vvv.>..v..v...>.v>.>...v...vv.v.>>v>v>.>>.vv>.v.>>v..>.v.v>.v.v.vv.
.v>vv...>.v....v>..v...>v.v.>.>.>>.vv>.v.....>...vv..>>>.v....>v...vv>v.v.>.v.v.vv..>v.>.....v...vv...>>>>v>v....>..v...>....v..>v.v>..>>.>
..v>.v>>.>..>>..v>..>.>..>.>.v..vv.v>.vv>>.>.v.v..v.>v.>.>>v>>>.v..>>....>....vvv>...>..>.vv...v.>...>.>.....>>vv>>.>..v.>v.>....>.v.>....>
...>.vvv>>.>>.v..v.vvv..>.>.....v......>>vv>v.v.>...vvvv>>v>v.v...v.v..>.>v.>.v.v..>.v>..v.v.>>.>.v.....>..v.....>...v.>v...>.v..vv>...vvvv
>.>>.v>v>>v.>..>v>........vv....>...>.>>.>.v..>.v.v.>vv>...>v.>>>>.vv...>...>.v....>>vvvvvvv>vv.vv..>vv..>.>v.>..>..v.....v..vvvv>.v..v>.v>
v.v.v..vv>..v.v..v>v..v>....>>..v.vv....>.v....v....>>.>vv.>.v>.>.v>>...>.>.>.v>v.vv.v.v.>...v>..>>>v>.>>>>v.v....>.....vv.>v.>vv..>.v.v...
...v..v...>v...v.v.............>>vv....vv>vvv>>>.v>v>vv>v>..vv>.v>..>>.vvvv..>v.v.>>>v....>.v>..v.>v>>.v>...>>.vv...v>v...v.vv.....>>>>....
>>.>..v..>>v>.>vv....vv>v.>.>.v.....v...>>.>.>......v.v.vv.v...v.v.>>..v........v..vv.>>.vv..v.v.>>>>vvv>....>v..>vv..v>.>.>v....vvvvvv>v..
...vv>>v....v.>v.>..>.>......v>.>.v.>.>.>.v.v.>.>.>.v.vvvv>>.>.vv..>v.>.vv.>>..v>v.v.>.v>v.>.v>vv..>.v..vv>vv>.>v.v.v>......v..v.>v.>v.>..>
v.v>.....>v>.v.v.>.v...>.vv>v>>.....>....>..>.>.v.v..>v.vv..vvv>>.vv>..>>v.v..v.v.>.v.>>..v.>vvv...v>>..vv>vv>.>>.>....v>..>v>.....>v>>v>..
.v..vv.>>vv>.v>..>>>v.>v....v.>v>...v>.v.v....v.>.>>..vv>>.........vvv>.>...>v.>.>.>>>>.vv>>.>...>>..>v..v..>>>..>v>v>...v...>.>v...>......
..>>>.>v>....vv.>....>.>.v..v>...v..>.>.v>.v.>...v>>v>v.v..v>.v...>vv.v>.>>.>>....>..>>vv..vvv>>v.vv...v.v..v.>>.>v.v.v.>.vv.>....>vvv..v..
....vvv>.v>.v.v>v.v..>....v.v>.v...>>v...>.vvvv.vv.v..>vv..>>...>.v.v..v...>..v.vv>>v.>..>v.v.>>..>.>....>>vvvv>vv....v.vv>v.>..>vv>v>..v>.
...v.>>v...vv>v.>vvv.vv.....>v>>....vv...v>.>>>.vv>.v>v...>.v.>...v>..>>>.>vv.v....v...>>...>vvv>.v.>vv>.v...>>>......>v.v.>>vv.>.>..v.....
.....>v>v.v..>v.v>.v.>..v..>>>vv>...vvv>...v..v.>vv..v>>.v......>....v.vvv...>...v.v>...>...v.v.>v..vvv.v>v>.v.v>...v.>vvv>>>....>>..v...>v
.>.>v>.>...>..v>>>v..v.v.v..>..v.vv..>....>.vv>.>...v.>>>>>....vv.>v.>>..>.vvvv.v..>.v..v..>>..v.v.>..>.v....>v.....>v...>.....>v.>v.v.>...
.>>v.v.>v.>vvv>......>v>>>v..v.vv..>>v>.>...>>.>.....vv..>>.>.....>.v...>v.v>..v........vv..>>vv..vv..v>.v....>>>v.vvv>.>v.....v...v>...v..
v..vv..>>...v.>..v..>.>...v.>>v.>.....>>.>.v...>v>v...>>>>.....>.>>.v>...vv...>v.v.....>>.>..>.>...>....>...vv......v.>>v.vvv>>.>...>>..>>>
.v...>>.>..v..vv>.>>..>.>vvv.v.....>v>.>..vv..>>vvv>..>v.>>..>....v>>>....>>.v..v.v..>>.>vvv.>vv.v.>>.v>.......vvv..vv....>.v>>v.>>>>>.>vv>
.>.>..v...>..vv.>..v...v.>.v>>v.>.v.v>>v..>>>v>>vv.>v>v..>..>...vv.....>>..v..>>>.vvvv..vv..v.>..>>>...>....>v..>..>>..>..>.>.>>..v....>...
>v>.vv..v..v.v>...>>.....>.v.>....v>..>>vvv.>>>.>v.v.>...vvvv.>v...v>.>.>v...>>>>v>..vv>>v..>v....vv....vv>......v....v...v.vv..>vv>>.v>v>v
.>vvv...v>v...v..v>.......v>v>>>..v..v..v.>....>...>>>.v>.v>..v.vv.>v>v..>.v...v...>v.>v..vvv.v.....>.>.>>.>>>>vv.....>v>v....v.....v..v.v.
>>.>.v..v.v>>....vv.>.v.....>...v>v...>v....v>>.v.v>......>..v>.>vv.v..>>>v..v...>...>vv.>..>>.>..>v.>v>.>v>...>>...v.v..v.>v.>..>..vv>.>v.
>>.v>v.vvv.>>....>v..>..v>>>..>v.>....v>...vvv....>.vv....v>....>.vvvv.v.v.>..>v..v.>..vv>..v.>...v>.>>>v>v>v.>..v..v>..vv..>v.v.>.>>..v>v>
...>..vv.>......v>.v..>v...>>.v>.v>v..>>..vv.vv...>>.....v>....v.>.v>>v..>v..>....>.>>.v>.>vv..vv>...v>.>>>..>>>..v.>v.>.....>>..v.>.v..>..
v>..v.v>v..v>>v.....v.>>....v..v..>>..v>..>>.v.v.....>..>>>...v....>vv>..vvv.>>......v..>>>>>........v..>>.>>>.>>>v...v.vv..v.vv.v..>vv..v.
>v..v...v>v.v>vvv...vv.v.v.>......>.>.v.....v>>....>>.v...>vv.>...>..vv>..>...>v.>>...v.v>>v...v..>>v>...>vvv....>v..v..>..>....>.>.v.>>vv.
...>v>>>.v>.>vvvvv..>..>.v....>..vv.>>.>...v.....>.v.>.v..v.>>...>.v.v...>>.v>>..v.>.vv...vv.v.>....>.v>.v.>v.v>.>>...vv>vvv>>>>v.vv...v>v.
.v.>v...>.v.v..v.v.v......>>v..>....>....>>..>.v>v>>.>.>..v.>....>..>>.>...v.v.>>......>v.>>v.vvvvv>v.>.v>v..>.v.v...>..>..v....v.>v.>>.>v.
>.>v>v>v.>v..>v.....>..v...>>>v>.vv...v>.>>...vv.>v.v>>>..v...>.>>>..v>v>v.vv>>v.v.>>..>.>.>....>.v>...>>..vv>.vvv>v..>>>.v.>.vv>>>>.vv>vv.
v>>.vv..>..v...>v>.....>.v..v>..v...vvvv.v...>v>>....>...v.>>.>>....>>...>v...v..>>>v.vv.vv>....v>..vv..vv.>.>>...>..v>....>>..v.v>>...>>>v
...v>v....v..>..v.v.>.v.>.v..>vv>v.v.v.v.v.>...v>.v..v....v>v..>>.>>>>..>.v...>....>v..vv.v.vvvv...v>>....>..>.>v>v>..>......vv>.....vvv>>.
.>.>v.>>..>..>.v.v....vv>>>v..>..v>v>v>v>...>>v>>>.vvv...>v>>v..v.vv.>..v>......v>......>>..>.v>>.>>>v>v..v>.vv>v......>>.....>v.v>....vv..
vv>..vvv.v.v.v......>>v...>>.vv....vvvv.>.v>v>.....v.>>v...v..v>..>v..>..>>...>>.v.vv..v>v>.>>.>v..>>v>vv>v>>.>v..v.>.....>...>v.vv.vv.v>..
..>v...v.v.v.>>...>.>>v>.>.v..>.v.>...>...>>v>....v....>>..v>>..>>v>>.>..vv..v>v...v.>.>>.>.v>.>.vv>vvvvv>>.v>.>v>v..v.>v.>...>v>....vvv.vv
v>v..>>v>...v...>v>....>>v..>v..>>.>>.vv.>..v...>>......v..vv.vv..vv.>>>..>.>>v..vv..v....v...v>..v..>.>..>v>>v.>..v..v>.>v.v>..vvv...v>>..
>>v.v>vvv.v...>>.>v..v>....>....v..>>.v>>v>v.v>.........v>v>.v..>.v.>>.>..>....>vvv.>...vv.>>...>.vvv....>.>.v.vv.v>..>..>>>..v..v>>.v.>.v.
.v.v.v.>vv.v..>>vv>v>v>..........>v>.>.>.v..vv..>v>>>v.vv....vv>vv....>>v>.vv>vv..vv..v...>v..v.>>vv.>.v.....vv>v.>.>v>>.>>v...>.>.v.v.v>.v
v.>>vv.>..>..v.vv....>>..>v>v.v..vv.>>>v.vv..>.>>v..v......>>.>>>..>>...>>>>>v>.>>.>>v>.v>>vv.>v...v..v..v.v>...>>>.v>>.v.v..>.>...>>....v.
.>vvv>v>...v>v>..v>>v.>...vvv.v..>>v....v>>vvv..vv>....vv>....vv>v.v.v.>>.v>.....>.>......>.vv.>v...>..>v.v.v>v.vv....v.v....v.>.>>...vvv.>
..>v>>...>.v...>..v>>.vvvv.>v>..>...v.v>.v.vv>>v>vv>.>v.>>v>..v.vv.>v>>.v..>v>>...>v>.vvv..>.v.v.>..>...>>v.v..vv>...vvv.vvv.>>.v.>vv>v>v.v
>..v>.v.>>v>>..v.>>....vvv.v..v.>....>>..v.>>>.vvv.v..v>vv>>....v.....v..>v.v>.>.vvv..>>.>..>.v.v...vvv..>v>...>vvv>.>vvv>.v>v.>>..>.>..vvv`;

console.log(solve(arr1)); // 400

