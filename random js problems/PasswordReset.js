function pwReset(input = []) {
    let rawPw = input.shift();
    for (const line of input) {
        let tokens = line.split(' ');
        if (tokens === 'Done') {
            break;
        }
        if (tokens[0] === 'TakeOdd') {
            let newPw = '';
            for (let i = 0; i < rawPw.length; i++) {
                if (i % 2 !== 0) {
                    newPw += rawPw[i];
                }
            }
            rawPw = newPw;
            console.log(rawPw);
        } else if (tokens[0] === 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            let firstPart = rawPw.substring(0, index);
            let secondPart = rawPw.substring(index + length);
            rawPw = firstPart + secondPart;
            console.log(rawPw);
        } else if (tokens[0] === 'Substitute') {
            let elToReplace = tokens[1];
            let substitute = tokens[2];

            if (rawPw.indexOf(elToReplace) === -1) {
                console.log('Nothing to replace!');
                continue;
            } else {
                while (rawPw.indexOf(elToReplace) >= 0) {
                    rawPw = rawPw.replace(elToReplace, substitute);
                }
            }
            console.log(rawPw);
        }
    }
    console.log(`Your password is: ${rawPw}`);
}

pwReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done',
]);
