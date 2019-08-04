function solve(input) {
    let sentence = input.shift();
    let finalWord = input.shift();

    const convertFromAscii = string => {
        let output = [];
        string.split(':').forEach(letter => {
            output.push(String.fromCharCode(Number(letter)));
        });
        return output.join('');
    };

    finalWord = ':' + convertFromAscii(finalWord) + ':';

    const findAllEmoji = string => {
        let pattern = /(?<=[\s])(:[a-z]{4,}:)(?=[\s,.!?])/g;
        let validEmojis = [];
        let validEmoji = null;
        while (validEmoji = pattern.exec(string)) {
            validEmojis.push(validEmoji[1]);
        }
        return validEmojis;
    };

    let validEmojisArray = findAllEmoji(sentence);

    const sumAllLetters = arr => {
        let sum = 0;
        arr.forEach(elem => {
            for (let i = 1; i < elem.length - 1; i++) {
                let current = Number(elem.charCodeAt(i));
                sum += current;
            }
        });
        return sum;
    };

    let totalSum = sumAllLetters(validEmojisArray);

    if (validEmojisArray.includes(finalWord)) {
        totalSum *= 2;
    }

    if (validEmojisArray.length > 0) {
        console.log(`Emojis found: ${validEmojisArray.join(', ')}`);
    }
    console.log(`Total Emoji Power: ${totalSum}`);
}
