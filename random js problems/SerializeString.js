function serializeString([input]) {
    let chars = {};
    for (const char in input) {
        if (chars.hasOwnProperty(input[char])) {
            chars[input[char]].push(char);
        } else {
            chars[input[char]] = [char];
        }
    }
    Object.keys(chars).forEach(char => {
        console.log(`${char}:${chars[char].join('/')}`);
    });
}

function serializeString2([input]) {
    let pastChars = new Set();
    for (const key in input) {
        let currentChar = [];
        if (!pastChars.has(input[key])) {
            pastChars.add(input[key]);
            currentChar.push(key);
            for (let i = Number(key) + 1; i < input.length; i++) {
                if (input[i] == input[key]) {
                    currentChar.push(i);
                }
            }
            console.log(`${input[key]}:${currentChar.join('/')}`);
        }
    }
}

serializeString2('abababa');
// serializeString('avjavamsdmcalsdm');
