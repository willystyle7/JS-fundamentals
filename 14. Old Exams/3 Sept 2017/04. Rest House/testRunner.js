// Adapter for Problem 4
function adapter(input, code) {
    let rooms = [];
    let guests = [];
    while (true) {
        let row = input.shift();
        if (row === 'Guests') break;
        rooms.push(JSON.parse(row));
    }
    while (input.length > 0) {
        let row = input.shift();
        if (row === 'Guests') break;
        guests.push(JSON.parse(row));
    }
    return code(rooms, guests);
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