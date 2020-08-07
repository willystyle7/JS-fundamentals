function starEnigma(input = []) {
    let messagesCount = Number(input.shift());
    const keyPattern = /[star]/gi;
    let messagePattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>\d+)/g;
    let planets = { A: [], D: [] };
    for (let i = 0; i < messagesCount; i++) {
        let encryptedMessage = input.shift();
        let key = encryptedMessage.match(keyPattern) && encryptedMessage.match(keyPattern).length;
        let decryptedMessage = encryptedMessage
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) - key))
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
    planets.A.sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${planets.D.length}`);
    planets.D.sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
}

starEnigma([2, "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);