function solve(input) {
    let word = input.shift();
    for (let el of input) {
        if (el === 'Finish') {
            break;
        }
        let [command, elOne, elTwo] = el.split(' ');
        switch (command) {
            case 'Replace':
                while (word.includes(elOne)) {
                    word = word.replace(elOne, elTwo);
                }
                console.log(word);
                break;
            case 'Cut':
                let start = +elOne;
                let end = +elTwo;
                if (
                    start >= 0 &&
                    start <= end &&
                    end < word.length
                ) {
                    let cutA = word.substring(0, start);
                    let cutB = word.substring(end + 1);
                    word = cutA + cutB;
                    console.log(cutA + cutB);
                } else {
                    console.log(`Invalid indexes!`);
                }
                break;
            case 'Make':
                if (elOne === 'Upper') {
                    word = word.toUpperCase();
                } else if (elOne === 'Lower') {
                    word = word.toLowerCase();
                }
                console.log(word);
                break;
            case 'Check':
                if (word.includes(elOne)) {
                    console.log(`Message contains ${elOne}`);
                } else {
                    console.log(`Message doesn't contain ${elOne}`);
                }
                break;
            case 'Sum':
                let startInd = +elOne;
                let endInd = +elTwo;
                if (
                    startInd >= 0 &&
                    startInd <= endInd &&
                    endInd < word.length
                ) {
                    let cuttedWord = word.substring(startInd, endInd + 1);
                    let sum = 0;
                    cuttedWord.split('').forEach(el => {
                        sum += el.charCodeAt(0);
                    });
                    console.log(sum);
                } else {
                    console.log(`Invalid indexes!`);
                }
                break;
        }
    }
}

// solve([
//     'ILikeSharan',
//     'Replace a e',
//     'Make Upper',
//     'Check SHEREN',
//     'Sum 1 4',
//     'Cut 1 4',
//     'Finish'
// ]);

solve([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'
]);
