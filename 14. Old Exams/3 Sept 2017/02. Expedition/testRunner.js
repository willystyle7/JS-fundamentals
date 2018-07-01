// Adapter for Problem 2
function adapter(input, code) {
    input = input.filter(r => r !== '');
    let primary = [];
    let secondary = [];
    let targets = [];
    let startingPoint = [];
    while (true) {
        let row = input.shift();
        if (row === '-') break;
        primary.push(row.split(' ').map(Number));
    }
    while (true) {
        let row = input.shift();
        if (row === '-') break;
        secondary.push(row.split(' ').map(Number));
    }
    while (true) {
        let row = input.shift();
        if (row === 'STOP') break;
        targets.push(row.split(' ').map(Number));
    }
    let row = input.shift();
    startingPoint = row.split(' ').map(Number);
    return code(primary, secondary, targets, startingPoint);
}

function runTests(zero=false) {
    const fs = require('fs');
    let code = eval('(' + fs.readFileSync('./solution.js', 'utf-8') + ')');
    let n = 10;

    for (let i = 1; i <= n; i++) {
        let test = '';
        try {
            test = fs.readFileSync(`./tests/test.${zero === true ? '000.' : ''}${('000' + i).substr(-3)}.in.txt`, 'utf-8');
        } catch (err) {
            continue;
        }
        test = test.split('\r\n');

        console.log(`-- Test ${i}:`);
        console.log(test);
        console.log('\n-- Result --');
        adapter(test, code);
        console.log('\n');
    }
}

runTests(true);
runTests();