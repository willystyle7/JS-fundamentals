function wordsTracker(array) {
    let wantedWords = array.shift().split(' ');
    let counter = 0;
    let objWontedWords = [];
    for (let i = 0; i < wantedWords.length; i++) {
        array.forEach((element) => {
            if (wantedWords[i] === element) {
                counter++;
            }
        });
        if (counter > 0) {
            let word = wantedWords[i];
            let count = counter;
            objWontedWords.push({ word, count });
        }
        counter = 0;
    }
    objWontedWords.sort((a, b) => b.count - a.count);
    for (let i = 0; i < objWontedWords.length; i++) {
        console.log(`${objWontedWords[i].word} - ${objWontedWords[i].count}`);
    }
}

function wordsTracker2(array) {
    let wantedWords = array.shift().split(' ');
    let wantedWordsCounts = {};
    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
    array.forEach(word => word in wantedWordsCounts && wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word => console.log(`${word} - ${wantedWordsCounts[word]}`));
}
