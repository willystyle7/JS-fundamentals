function solve(input) {
    let regexp = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/g;
    input[0] = input[0].split(' ').join('');
    let array = [...input[0].matchAll(regexp)];
    let validPairs = [];
    for (i = 0; i < array.length; i++) {
        let firstWord = array[i].groups.word1;
        let secondWord = array[i].groups.word2;
        validPairs.push(firstWord);
        validPairs.push(secondWord);
    }
    if (validPairs.length === 0) {
        console.log(`No word pairs found!`);
    } else {
        let result = Math.round((validPairs.length - 1) / 2);
        console.log(`${result} word pairs found!`);
    }
    let mirrorWords = [];
    for (i = 0; i < array.length; i++) {
        let firstWord = array[i].groups.word1;
        let secondWord = array[i].groups.word2;

        if (firstWord === secondWord.split('').reverse().join('')) {
            mirrorWords.push(firstWord);
            mirrorWords.push(secondWord);
        }
    }
    if (mirrorWords.length > 0) {
        console.log(`The mirror words are:`);
        let output = [];
        let str = '';
        for (i = 0; i <= mirrorWords.length / 2 + 1; i = i + 2) {
            str = `${mirrorWords[i]} <=> ${mirrorWords[i + 1]}`;
            output.push(str);
        }
        console.log(output.join(', '));
    } else {
        console.log(`No mirror words!`);
    }
}

function solve2([input]) {
    let regexp = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/g;
    let validPairs = [];
    let validPair = null;
    while (validPair = regexp.exec(input)) {
        validPairs.push(validPair.groups);
    }
    console.log(validPairs.length ? `${validPairs.length} word pairs found!` : 'No word pairs found!');
    let mirrorWords = validPairs.filter(pair => isMirrorPair(pair));
    if (mirrorWords.length) {
        console.log('The mirror words are:');
        console.log(mirrorWords.map(pair => `${pair.word1} <=> ${pair.word2}`).join(', '))
    } else {
        console.log('No mirror words!');
    }

    function isMirrorPair(pair) {
        return pair.word1 === pair.word2.split('').reverse().join('');
    }
}

solve2(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r  ']);

