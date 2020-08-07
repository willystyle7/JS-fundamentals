function solve(input) {
    let activationKey = input.shift();
    let commandLine = input.shift();
    while (commandLine !== 'Generate') {
        let [command, firstArg, secondArg, thirdArg] = commandLine.split(/\s*>>>\s*/g);
        switch (command) {
            case 'Slice':
                firstArg = Number(firstArg);
                secondArg = Number(secondArg);
                activationKey =
                    activationKey.substring(0, firstArg) +
                    activationKey.substring(secondArg);
                console.log(activationKey);
                break;
            case 'Flip':
                secondArg = Number(secondArg);
                thirdArg = Number(thirdArg);
                if (firstArg === 'Upper') {
                    activationKey =
                        activationKey.substring(0, secondArg) +
                        activationKey
                            .substring(secondArg, thirdArg)
                            .toUpperCase() +
                        activationKey.substring(thirdArg);
                } else if (firstArg === 'Lower') {
                    activationKey =
                        activationKey.substring(0, secondArg) +
                        activationKey
                            .substring(secondArg, thirdArg)
                            .toLowerCase() +
                        activationKey.substring(thirdArg);
                }
                console.log(activationKey);
                break;
            case 'Contains':
                if (activationKey.includes(firstArg)) {
                    console.log(`${activationKey} contains ${firstArg}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
        }
        commandLine = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}

solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>Rs',
    'Contains>>>deF',
    'Generate',
]);
