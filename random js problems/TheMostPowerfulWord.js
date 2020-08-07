function theMostPowerfulWord(input) {
    let command = input.shift();
    let maxPowerWord = Number.MIN_SAFE_INTEGER;
    let powerfulWord = '';
    let isFirstLetter = false;
    while (command !== 'End of words') {
        let word = command;
        let lengthWord = word.length;
        let powerWord = 0;
        for (let i = 0; i < lengthWord; i++) {
            let asciiCode = word.charCodeAt(i);
            if (i < 1) {
                powerWord += asciiCode;
                if (
                    asciiCode === 97 ||
                    asciiCode === 101 ||
                    asciiCode === 105 ||
                    asciiCode === 111 ||
                    asciiCode === 117 ||
                    asciiCode === 121 ||
                    asciiCode === 65 ||
                    asciiCode === 69 ||
                    asciiCode === 73 ||
                    asciiCode === 79 ||
                    asciiCode === 85 ||
                    asciiCode === 89
                ) {
                    isFirstLetter = true;
                }
            } else {
                powerWord += asciiCode;
            }
        }
        if (isFirstLetter) {
            powerWord *= lengthWord;
        } else {
            powerWord = Math.floor(powerWord / lengthWord);
        }
        if (powerWord > maxPowerWord) {
            maxPowerWord = powerWord;
            powerfulWord = word;
        }
        isFirstLetter = false;
        command = input.shift();
    }
    console.log(`The most powerful word is ${powerfulWord} - ${maxPowerWord}`);
}
