function solve(input) {
    let username = input[0];

    let actions = {
        Case,
        Reverse,
        Replace,
        Cut,
        Check
    };

    for (let i = 1; i < input.length; i++) {
        let currentLine = input[i].split(' ');

        let toDo = currentLine.shift();
        if (toDo !== 'Sign') {
            actions[toDo](...currentLine);
        } else {
            break;
        }
    }

    function isValidIndex(startIndex, endIndex) {
        return (
            username[startIndex] !== undefined &&
            username[endIndex] !== undefined &&
            endIndex >= startIndex
        );
    }

    function Case(type) {
        type == 'lower'
            ? (username = username.toLowerCase())
            : (username = username.toUpperCase());
        return console.log(username);
    }

    function Reverse(startIndex, endIndex) {
        if (isValidIndex(Number(startIndex), Number(endIndex))) {
            return console.log(
                username
                    .slice(Number(startIndex), Number(endIndex) + 1)
                    .split('')
                    .reverse()
                    .join('')
            );
        }
    }

    function Cut(substring) {
        if (username.includes(substring)) {
            username = username.replace(substring, '');
            console.log(username);
        } else {
            console.log(`The word ${username} doesn't contain ${substring}.`);
        }
    }

    function Replace(char) {
        // while (username.includes(char)) {
        //     username = username.replace(char, '*');
        // }
        let pattern = new RegExp(escapeRegExp(char), 'g');
        username = username.replace(pattern, '*');
        return console.log(username);
    }

    function Check(char) {
        return username.includes(char)
            ? console.log('Valid')
            : console.log(`Your username must contain ${char}.`);
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
}
