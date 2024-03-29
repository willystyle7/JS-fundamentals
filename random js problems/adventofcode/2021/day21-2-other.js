// https://adventofcode.com
// https://github.com/leyanlo/advent-of-code/blob/main/2021/day-21.js
// Using your given starting positions, determine every possible outcome.
// Find the player that wins in more universes; in how many universes does that player win?

const rolls = [1, 2, 3];

function solve2(input) {
    let positions = input.split('\n').map((line) => +line.split(': ')[1]);
    let scores = [0, 0];

    const wins = [0, 0];

    let gameCounts = {
        [[positions, scores].join(';')]: 1,
    };

    while (Object.entries(gameCounts).length > 0) {
        for (const i of [0, 1]) {
            const nextGameCounts = {};
            for (const [state, gameCount] of Object.entries(gameCounts)) {
                [positions, scores] = state.split(';').map((s) => s.split(',').map(Number));

                for (const r1 of rolls) {
                    for (const r2 of rolls) {
                        for (const r3 of rolls) {
                            const nextPositions = [...positions];
                            nextPositions[i] = (positions[i] + r1 + r2 + r3 - 1) % 10 + 1;

                            const nextScores = [...scores];
                            nextScores[i] += nextPositions[i];

                            if (nextScores[i] >= 21) {
                                wins[i] += gameCount;
                                continue;
                            }

                            const nextState = [nextPositions, nextScores].join(';');
                            nextGameCounts[nextState] = (nextGameCounts[nextState] || 0) + gameCount;
                        }
                    }
                }
            }
            gameCounts = nextGameCounts;
        }
    }

    console.log(Math.max(...wins));
}

let input = `Player 1 starting position: 5
Player 2 starting position: 6`;

solve2(input); // 919758187195363
