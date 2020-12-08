function solve(input) {
    let arr = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';

    for (let line of input) {
        [currRow, currCol] = line.split(' ').map(Number);

        if (arr[currRow][currCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        arr[currRow][currCol] = player;

        // check horizontal and vertical
        for (let i = 0; i < 3; i++) {
            if (
                arr[i][0] === player &&
                arr[i][1] === player &&
                arr[i][2] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            } else if (
                arr[0][i] === player &&
                arr[1][i] === player &&
                arr[2][i] === player
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
        }

        // check left to right
        if (
            arr[0][0] === player &&
            arr[1][1] === player &&
            arr[2][2] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }

        // check right to left
        else if (
            arr[0][2] === player &&
            arr[1][1] === player &&
            arr[2][0] === player
        ) {
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }

        // check for end game
        let theresFalse = false;

        for (let row = 0; row < arr.length; row++) {
            if (arr[row].includes(false)) {
                theresFalse = true;
            }
        }

        if (!theresFalse) {
            console.log('The game ended! Nobody wins :(');
            printMatrix();
            return;
        }

        player = player === 'X' ? 'O' : 'X';
    }

    function printMatrix() {
        for (let row = 0; row < arr.length; row++) {
            console.log(arr[row].join('\t'));
        }
    }
}


function play(matrix) {
    let dashboard =
        [[false, false, false],
        [false, false, false],
        [false, false, false]];
    let player = 'X';
    let hasWon = false;
    for (let i = 0; i < matrix.length; i++) {
        let line = matrix[i];
        let [row, col] = line.split(' ').map(num => (Number(num)));
        if (dashboard[row][col] === false) {
            dashboard[row][col] = player;
            if (ifWins(dashboard, player)) {
                hasWon = true;
                break;
            }
            player = player === 'X' ? 'O' : 'X';
        } else if (dashboard.every(row => row.every(el => el !== false))) {
            break;
        }
        else {
            console.log('This place is already taken. Please choose another!');
        }
    }
    if (hasWon) {
        console.log(`Player ${player} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(');
    }
    printMatrix(dashboard);

    function ifWins(dashboard, player) {
        return checkFirstDiagonal(dashboard, player) ||
            checkSecondDiagonal(dashboard, player) ||
            checkCols(dashboard, player) ||
            checkRows(dashboard, player);
    };

    function checkFirstDiagonal(dashboard, player) {
        return dashboard[0][0] === player &&
            dashboard[1][1] === player
            && dashboard[2][2] === player;
    }

    function checkSecondDiagonal(dashboard, player) {
        return dashboard[2][0] === player
            && dashboard[1][1] === player
            && dashboard[0][2] === player;
    }

    function checkRows(dashboard, player) {
        return (dashboard[0][0] === player
            && dashboard[0][1] === player && dashboard[0][2] === player)
            || (dashboard[1][0] === player && dashboard[1][1] === player
                && dashboard[1][2] === player)
            || (dashboard[2][0] === player && dashboard[2][1] === player
                && dashboard[2][2] === player);
    }

    function checkCols(dashboard, player) {
        return (dashboard[0][0] === player &&
            dashboard[1][0] === player
            && dashboard[2][0] === player)
            || (dashboard[0][1] === player && dashboard[1][1] === player
                && dashboard[2][1] === player) ||
            (dashboard[0][2] === player && dashboard[1][2] === player
                && dashboard[2][2] === player);
    }

    function printMatrix(dashboard) {
        dashboard.forEach(row => {
            console.log(row.join('\t'));
        });
    }
}