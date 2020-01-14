function solve(input) {
    let number1 = +input.shift();
    let number2 = +input.shift();
    let maxPasswords = +input.shift();
    let passwordsCounter = 0;
    let symbol1 = 35;
    let symbol2 = 64;
    let combo = '';
    for (let symbol3 = 1; symbol3 <= number1; symbol3++) {
        for (let symbol4 = 1; symbol4 <= number2; symbol4++) {
            let codeToCharSymbol1 = String.fromCharCode(symbol1);
            let codeToCharSymbol2 = String.fromCharCode(symbol2);
            combo += `${codeToCharSymbol1}${codeToCharSymbol2}${symbol3}${symbol4}${codeToCharSymbol2}${codeToCharSymbol1}|`;
            passwordsCounter++;
            if (passwordsCounter >= maxPasswords) {
                console.log(combo);
                return;
            }
            symbol1++;
            if (symbol1 > 55) {
                symbol1 = 35;
            }
            symbol2++;
            if (symbol2 > 96) {
                symbol2 = 64;
            }
        }
    }
    console.log(combo);
}

function solve2([a, b, maxPasswords]) {
    let passwords = '';
    let A = 35;
    let B = 64;
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            let symbolA = String.fromCharCode(A);
            let symbolB = String.fromCharCode(B);
            let password = `${symbolA}${symbolB}${i}${j}${symbolB}${symbolA}`;
            passwords += password + '|';
            if ((i - 1) * b + j == maxPasswords) {
                console.log(passwords);
                return;
            }
            // A++;
            A = 35 + ((++A - 35) % 21);
            // B++;
            B = 64 + ((++B - 64) % 33);
        }
    }
    console.log(passwords);
}
