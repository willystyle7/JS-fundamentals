// Adapter for Problem 1
function adapter(input, code) {
    input = input.filter(r => r !== '');
    let meals = JSON.parse(input.shift().replace(/'/g, '"'));
    return code(meals, input);
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