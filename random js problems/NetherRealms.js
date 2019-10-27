function solve([input]) {
    let splitPattern = /[,\s]+/g;
    let demonsArr = input.split(splitPattern).filter(d => d !== '');
    let demons = {};
    let healthPattern = /[^0-9\s.\/+*-]/g;
    // let sumPattern = /([+-]?[0-9]*[.]?[0-9]+)/g;
    let sumPattern = /[+-]?\d+\.?\d*/g;
    // let dmgPattern = /(\*|\/)/g;
    let dmgPattern = /([*\/])/g;

    for (const demon of demonsArr) {
        let hp = 0;
        let dmg = 0;
        // if (demon.match(healthPattern) != null) {
        //     // console.log('match: ', demon.match(healthPattern));
        //     for (const char of demon.match(healthPattern)) {
        //         hp += +char.charCodeAt(0);
        //     }
        // }
        for (const char of demon.split('').filter(c => !'0123456789+-*/.'.includes(c))) {
            hp += +char.charCodeAt(0);
        }

        let digits = demon.match(sumPattern);

        if (digits != null) {
            for (const digit of digits) {
                dmg += +digit;
            }
        }

        // let subtractOrMultiply = demon.match(dmgPattern);

        // if (subtractOrMultiply != null) {
        //     for (const operand of subtractOrMultiply) {
        //         if (operand == '*') {
        //             dmg *= 2;
        //         } else {
        //             dmg /= 2;
        //         }
        //     }
        // }
        let asterics = demon.split('').filter(c => c === '*').length;
        let slashes = demon.split('').filter(c => c === '/').length;
        dmg = dmg * Math.pow(2, asterics - slashes);

        demons[demon] = {};
        demons[demon]['health'] = hp;
        demons[demon]['damage'] = dmg;
    }

    let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
    // let sorted = Object.entries(demons).sort();
    for (const [name, valuesObj] of sorted) {
        console.log(`${name} - ${valuesObj['health']} health, ${valuesObj['damage'].toFixed(2)} damage`);
    }
}

function solve2(input) {
    let splitPattern = /[, ]+/g;
    let demonsArr = input[0].split(splitPattern);
    let demons = {};
    let healthPattern = /[^0-9.\/+*-]/g;
    let sumPattern = /[+-]?\d+\.?\d*/g;
    let dmgPattern = /\*|\//g;

    for (const demon of demonsArr) {
        let hp = 0;
        let dmg = 0;
        if (demon.match(healthPattern) != null) {
            for (const char of demon.match(healthPattern)) {
                hp += char.charCodeAt(0);
            }
        }

        let digits = demon.match(sumPattern);

        if (digits != null) {
            for (const digit of digits) {
                dmg += Number(digit);
            }
        }

        let subtractOrMultiply = demon.match(dmgPattern);

        if (subtractOrMultiply != null) {
            for (const operand of subtractOrMultiply) {
                if (operand == '*') {
                    dmg *= 2;
                } else {
                    dmg /= 2;
                }
            }
        }

        demons[demon] = {};
        demons[demon]['health'] = hp;
        demons[demon]['damage'] = dmg;
    }

    let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, valuesObj] of sorted) {
        console.log(`${name} - ${valuesObj['health']} health, ${valuesObj['damage'].toFixed(2)} damage`);
    }
}

solve(['M3ph-0.5s-0.5t0.0**']);
solve(['M3ph1st+0**, *Az*a/zel-10']);