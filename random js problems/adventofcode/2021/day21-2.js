// https://adventofcode.com
// Using your given starting positions, determine every possible outcome.
// Find the player that wins in more universes; in how many universes does that player win?

function solve(arr) {
    // arr = arr.split('\n').map(row => row.split(' ').pop()).map(Number);
    let players = arr.split('\n').map(row => row.split(' ').pop()).map(Number);
    // console.log(players);

    let winSum = 8; // 21
    let player0wins = 0;
    let player1wins = 0;
    let universeStatus = {
        player0pos: players[0],
        player0sum: 0,
        player1pos: players[1],
        player1sum: 0,
        nextPlayer: 0
    }
    let queue = [universeStatus];
    while (queue.length > 0) {
        // TODO
        let status = queue.shift();
        // console.log(status);
        if (status.nextPlayer === 0) {
            let pos = status.player0pos;
            let sum = status.player0sum;
            for (let dice1 = 1; dice1 <= 3; dice1++) {
                for (let dice2 = 1; dice2 <= 3; dice2++) {
                    for (let dice3 = 1; dice3 <= 3; dice3++) {
                        let dice = dice1 + dice2 + dice3;
                        let newPos = (pos + dice) % 10 === 0 ? 10 : (pos + dice) % 10;
                        let newSum = sum + newPos;
                        if (newSum >= winSum) {
                            player0wins += 1;
                        } else {
                            let newStatus = {
                                player0pos: newPos,
                                player0sum: newSum,
                                player1pos: status.player1pos,
                                player1sum: status.player1sum,
                                nextPlayer: 1
                            }
                            queue.push(newStatus);
                        }
                    }
                }
            }
        } else if (status.nextPlayer === 1) {
            let pos = status.player1pos;
            let sum = status.player1sum;
            for (let dice1 = 1; dice1 <= 3; dice1++) {
                for (let dice2 = 1; dice2 <= 3; dice2++) {
                    for (let dice3 = 1; dice3 <= 3; dice3++) {
                        let dice = dice1 + dice2 + dice3;
                        let newPos = (pos + dice) % 10 === 0 ? 10 : (pos + dice) % 10;
                        let newSum = sum + newPos;
                        if (newSum >= winSum) {
                            player1wins += 1;
                        } else {
                            let newStatus = {
                                player0pos: status.player0pos,
                                player0sum: status.player0sum,
                                player1pos: newPos,
                                player1sum: newSum,
                                nextPlayer: 0
                            }
                            queue.push(newStatus);
                        }
                    }
                }
            }
        }
    }

    return Math.max(player0wins, player1wins);
}

let arr =
`Player 1 starting position: 4
Player 2 starting position: 8`;

console.log(solve(arr)); // 444356092776315
// player 1 wins in 444356092776315 universes, while player 2 merely wins in 341960390180808 universes.
// 444356092776315
// 341960390180808

let arr1 =
`Player 1 starting position: 5
Player 2 starting position: 6`;

// console.log(solve(arr1)); // ?

