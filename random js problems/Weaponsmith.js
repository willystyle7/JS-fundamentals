function solve(arr) {
    let weaponNameParts = arr.shift().split('|');
    for (let element of arr) {
        if (element === 'Done') {
            break;
        }
        let [command, position, index] = element.split(' ');
        switch (command) {
            case 'Move':
                index = +index;
                switch (position) {
                    case 'Left':
                        if (index > 0 && index < weaponNameParts.length) {
                            [weaponNameParts[index - 1], weaponNameParts[index]] = [weaponNameParts[index], weaponNameParts[index - 1]];
                            break;
                        }
                        break;
                    case 'Right':
                        if (index >= 0 && index < weaponNameParts.length - 1) {
                            [weaponNameParts[index + 1], weaponNameParts[index]] = [weaponNameParts[index], weaponNameParts[index + 1]];
                            break;
                        }
                        break;
                }
                break;
            case 'Check':
                switch (position) {
                    case 'Even':
                        console.log(weaponNameParts.filter((el, index) => index % 2 === 0).join(' '));
                        break;
                    case 'Odd':
                        console.log(weaponNameParts.filter((el, index) => index % 2 !== 0).join(' '));
                        break;
                }
                break;
        }
    }
    console.log(`You crafted ${weaponNameParts.join('')}!`);
}

solve([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
]);

function Weapon(input) {
    let w = input.shift();
    let weapon = w.split('|');
    let command = input.shift();
    while (command !== 'Done') {
        let arrEvenOdd = [];
        if (command.includes('Move Right')) {
            let num = command.split(' ');
            let indexR = +num[2];
            if (indexR >= 0 && indexR < weapon.length - 1) {
                let val = weapon[indexR + 1];
                weapon[indexR + 1] = weapon[indexR];
                weapon[indexR] = val;
            }
        } else if (command.includes('Move Left')) {
            let num = command.split(' ');
            let indexL = +num[2];
            if (indexL > 0 && indexL < weapon.length) {
                let val = weapon[indexL - 1];
                weapon[indexL - 1] = weapon[indexL];
                weapon[indexL] = val;
            }
        } else if (command.includes('Odd')) {
            for (let k = 0; k < weapon.length; k++) {
                if (k % 2 !== 0) {
                    arrEvenOdd.push(weapon[k]);
                }
            }
        } else if (command.includes('Even')) {
            for (let k = 0; k < weapon.length; k++) {
                if (k % 2 === 0) {
                    arrEvenOdd.push(weapon[k]);
                }
            }
        }
        if (arrEvenOdd.length > 0) {
            console.log(arrEvenOdd.join(' '));
        }
        command = input.shift();
    }
    console.log(`You crafted ${weapon.join('')}!`);
}
