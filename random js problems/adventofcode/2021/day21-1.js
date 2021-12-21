// https://adventofcode.com
// Play a practice game using the deterministic 100-sided die. The moment either player wins,
// what do you get if you multiply the score of the losing player by the number of times the die was rolled during the game?

function solve(arr) {
    // arr = arr.split('\n').map(row => row.split(' ').pop()).map(Number);
    let players = arr.split('\n').map(row => row.split(' ').pop()).map(Number);
    // console.log(players);

    function makeRound(player, dice) {
        let moves = dice.reduce((a, b) => a + b, 0);
        let start = players[player];
        let stop = (start + moves) % 10 === 0 ? 10 : (start + moves) % 10;
        players[player] = stop;
        return stop;
    }

    function rollDice(dice) {
        return dice.map(num => num + 3 > 100 ? num + 3 - 100 : num + 3);
    }


    let dice = [-2, -1, 0];
    let round = 0;
    let loser = 0;
    let playersPoints = {
        0: 0,
        1: 0
    }
    while (true) {
        dice = rollDice(dice);
        round += 1;
        playersPoints[0] += makeRound(0, dice);
        // console.log('round: ', round);
        // console.log('dice: ', dice);
        // console.log('playersPoints: ', playersPoints);
        if (playersPoints[0] >=  1000) {
            loser = playersPoints[1];
            break;
        }
        dice = rollDice(dice);
        round += 1;
        playersPoints[1] += makeRound(1, dice);
        // console.log('round: ', round);
        // console.log('dice: ', dice);
        // console.log('playersPoints: ', playersPoints);
        if (playersPoints[1] >=  1000) {
            loser = playersPoints[0];
            break;
        }
    }
    // console.log('loser: ', loser);
    let diceRolls = 3 * round;
    return loser * diceRolls;
}

let arr =
`Player 1 starting position: 4
Player 2 starting position: 8`;

console.log(solve(arr)); // 739785 // 745 (loser) * 993 (dice rolls) = 739785

let arr1 =
`Player 1 starting position: 5
Player 2 starting position: 6`;

console.log(solve(arr1)); // 1002474

