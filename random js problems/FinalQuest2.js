function solveTheRiddle(arrayInput) {
    const questToSolve = arrayInput.shift().split(' ');
    let currentCommands = arrayInput.shift().split(' ');

    while (currentCommands[0] !== 'Stop') {
        if (currentCommands[0] === 'Delete') {
            const index = +currentCommands[1] + 1;
            if (index >= 0 && index < questToSolve.length) {
                questToSolve.splice(index, 1);
            }
        } else if (currentCommands[0] === 'Swap') {
            let word1 = currentCommands[1];
            let word2 = currentCommands[2];
            if (questToSolve.includes(word1) && questToSolve.includes(word2)) {
                const word1Index = questToSolve.indexOf(word1);
                const word2Index = questToSolve.indexOf(word2);
                const savedFirst = questToSolve[word1Index];
                questToSolve[word1Index] = word2;
                questToSolve[word2Index] = savedFirst;
            }
        } else if (currentCommands[0] === 'Put') {
            let word = currentCommands[1];
            let index = +currentCommands[2] - 1;

            if (index >= 0 && index <= questToSolve.length) {
                questToSolve.splice(index, 0, word);
            }
        } else if (currentCommands[0] === 'Replace') {
            let word1 = currentCommands[1];
            let word2 = currentCommands[2];
            let word2Index = questToSolve.indexOf(word2);
            if (word2Index !== -1) {
                questToSolve[word2Index] = word1;
            }
        } else if (currentCommands[0] === 'Sort') {
            questToSolve.sort((a, b) => b.localeCompare(a));
        }
        currentCommands = arrayInput.shift().split(' ');
    }
    console.log(questToSolve.join(' '));
}
solveTheRiddle([
    'This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop',
    ''
]);
