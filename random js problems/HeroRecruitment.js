function heroes(input = []) {
    let resultObj = {};
    for (const line of input) {
        let [command, name, spell] = line.split(' ');
        if (command === 'End') {
            break;
        } else if (command === 'Enroll') {
            if (!resultObj.hasOwnProperty(name)) {
                resultObj[name] = [];
            } else {
                console.log(`${name} is already enrolled.`);
            }
        } else if (command === 'Learn') {
            if (!resultObj.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else if (!resultObj[name].includes(spell)) {
                resultObj[name].push(spell);
            } else if (resultObj[name].includes(spell)) {
                console.log(`${name} has already learnt ${spell}.`);
            }
        } else if (command === 'Unlearn') {
            if (!resultObj.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else if (!resultObj[name].includes(spell)) {
                console.log(`${name} doesn't know ${spell}.`);
            } else if (resultObj[name].includes(spell)) {
                //Error
                resultObj[name].splice(resultObj[name].indexOf(spell), 1);
            }
        }
    }
    let arrayResult = Object.entries(resultObj).sort(
        (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])
    );

    console.log('Heroes:');
    for (const line of arrayResult) {
        console.log(`== ${line[0]}: ${line[1].join(', ')}`);
    }
}

heroes([
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stefan ItShouldWork',
    'Unlearn Stefan NotFound',
    'End',
]);

console.log('===============================');

heroes([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End',
]);
