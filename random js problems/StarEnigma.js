function starEnigma(input = []) {
    let messagesCount = Number(input.shift());
    const keyPattern = /[star]/gi;
    let messagePattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>\d+)/g;
    let planets = { A: [], D: [] };
    for (let i = 0; i < messagesCount; i++) {
        let encryptedMessage = input.shift();
        let key =
            encryptedMessage.match(keyPattern) &&
            encryptedMessage.match(keyPattern).length;
        let decryptedMessage = encryptedMessage
            .split('')
            .map((char) => String.fromCharCode(char.charCodeAt(0) - key))
            .join('');
        let info = null;
        // messagePattern.lastIndex = 0;
        while ((info = messagePattern.exec(decryptedMessage)) !== null) {
            let planetName = info.groups['planetName'];
            let attackType = info.groups['attackType'];
            planets[attackType].push(planetName);
        }
    }
    console.log(`Attacked planets: ${planets.A.length}`);
    planets.A.sort((a, b) => a.localeCompare(b)).forEach((planet) =>
        console.log(`-> ${planet}`)
    );
    console.log(`Destroyed planets: ${planets.D.length}`);
    planets.D.sort((a, b) => a.localeCompare(b)).forEach((planet) =>
        console.log(`-> ${planet}`)
    );
}

starEnigma([2, 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);

function decryptMsg(input) {
    let msgCount = input.shift();
    let pattern = /@(?<planetName>[A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!(?<attackType>[AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;
    let attacked = [];
    let destroyed = [];

    for (let i = 0; i < msgCount; i++) {
        let line = input[i];
        let decryptKey =
            line.match(/[star]/gi) && line.match(/[star]/gi).length;
        let decryptedMsg = [];
        for (let letter of line) {
            let symbol = letter.charCodeAt();
            symbol -= decryptKey;
            symbol = String.fromCharCode(symbol);
            decryptedMsg.push(symbol);
        }

        decryptedMsg = decryptedMsg.join('');
        decryptedMsg = pattern.exec(decryptedMsg);

        if (decryptedMsg) {
            if (decryptedMsg.groups.attackType === 'A') {
                attacked.push(decryptedMsg.groups.planetName);
            } else {
                destroyed.push(decryptedMsg.groups.planetName);
            }
        }
    }

    attacked.sort((a, b) => a.localeCompare(b));
    destroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach((planet) => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach((planet) => console.log(`-> ${planet}`));
}

function solve(input) {
    let linesCount = Number(input.shift());
    let starPattern = /[star]/gi;
    let newLines = [];

    for (let line of input) {
        let newLine = '';
        let starCount = line.match(starPattern) && line.match(starPattern).length;

        for (let i = 0; i < line.length; i++) {
            let ascNum = line.charCodeAt(i);
            newLine += String.fromCharCode(ascNum - starCount);
        }

        newLines.push(newLine);
    }

    let obj = {
        'Attacked planets': [],
        'Destroyed planets': [],
    };

    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->\d+/g;

    for (let i = 0; i < linesCount; i++) {
        let match = planetPattern.exec(newLines[i]);

        if (match && match.groups.attackType == 'A') {
            obj['Attacked planets'].push(match.groups.name);
        } else if (match && match.groups.attackType == 'D') {
            obj['Destroyed planets'].push(match.groups.name);
        }

        match = planetPattern.exec(newLines[i]);
    }

    Object.entries(obj).forEach((kvp) => {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        kvp[1]
            .sort((a, b) => a.localeCompare(b))
            .forEach((planet) => {
                console.log(`-> ${planet}`);
            });
    });
}
