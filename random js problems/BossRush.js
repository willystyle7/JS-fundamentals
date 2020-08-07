// with exec
function solve(input) {
    let n = Number(input.shift());
    let pattern = /^\|(?<boss>[A-Z]{4,})\|:#(?<title>[a-zA-Z]+ [a-zA-Z]+)#$/g;
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let match = null;
        if ((match = pattern.exec(line)) !== null) {
            let boss = match.groups['boss'];
            let title = match.groups['title'];
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armour: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}

// with match
function solve3(input) {
    let n = Number(input.shift());
    let pattern = /^\|(?<boss>[A-Z]{4,})\|:#(?<title>[a-zA-Z]+ [a-zA-Z]+)#$/;
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let match = line.match(pattern);
        if (match) {
            let boss = match.groups['boss'];
            let title = match.groups['title'];
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armour: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}

function solve2(input) {
    let enteredN = Number(input.shift());
    let pattern = /^\|(?<boss>[A-Z]{4,})\|:#(?<title>[a-zA-Z]+ [a-zA-Z]+)#$/g;
    for (let i = 0; i < input.length; i++) {
        if ((valid = pattern.exec(input[i])) !== null) {
            let boss = valid.groups['boss'];
            let title = valid.groups['title'];
            let bossN = boss.length;
            let titleN = title.length;
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${bossN}`);
            console.log(`>> Armour: ${titleN}`);
        } else {
            console.log('Access denied!');
        }
    }
}

solve3([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#',
]);

function solve(input) {
    let numberOfInputs = Number(input.shift());
    let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;
    for (let line of input) {
        match = pattern.exec(line);
        if (match) {
            console.log(match.groups.boss + ', ' + 'The ' + match.groups.title);
            console.log(`>> Strength: ${match.groups.boss.length}`);
            console.log(`>> Armour: ${match.groups.title.length}`);
        } else {
            console.log(`Access denied!`);
        }

    }
}
