function solve(input) {
    let skill = input.shift();
    let line = input.shift();
    while (line != 'For Azeroth') {
        let [command, firstArg, secondArg, thirdArg] = line.split(' ');
        switch (command) {
            case 'GladiatorStance':
                skill = skill.toUpperCase();
                console.log(skill);
                break;
            case 'DefensiveStance':
                skill = skill.toLowerCase();
                console.log(skill);
                break;
            case 'Dispel':
                let index = Number(firstArg);
                let letter = secondArg;
                if (index >= 0 && index < skill.length) {
                    skill = skill.substring(0, index) + letter + skill.substring(index + 1);
                    console.log(`Success!`);
                } else {
                    console.log(`Dispel too weak.`);
                }
                break;
            case 'Target':
                if (firstArg == 'Change') {
                    while (skill.includes(secondArg)) {
                        skill = skill.replace(secondArg, thirdArg);
                    }
                    console.log(skill);
                } else if (firstArg == 'Remove') {
                    while (skill.includes(secondArg)) {
                        skill = skill.replace(secondArg, '');
                    }
                    console.log(skill);
                } else {
                    console.log("Command doesn't exist!");
                }
                break;
            default:
                console.log("Command doesn't exist!");
                break;
        }
        line = input.shift();
    }
}

solve([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth',
]);
