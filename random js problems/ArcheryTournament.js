function solve(input) {
    let field = input.shift().split('|').map(Number);
    let points = 0;

    for (let i = 0; i < input.length; i++) {
        let [command, commandIndex, length] = input[i].split('@');
        commandIndex = Number(commandIndex);
        length = Number(length);

        switch (command) {
            case 'Shoot Left':
                if (commandIndex >= 0 && commandIndex <= field.length - 1) {
                    let fieldIndex = (commandIndex - length) % field.length;
                    if (fieldIndex < 0) {
                        fieldIndex = field.length + fieldIndex;
                    }
                    if (field[fieldIndex] >= 5) {
                        points += 5;
                        field[fieldIndex] -= 5;
                    } else {
                        points += field[fieldIndex];
                        field[fieldIndex] = 0;
                    }
                }
                break;

            case 'Shoot Right':
                if (commandIndex >= 0 && commandIndex <= field.length - 1) {
                    let fieldIndex = (commandIndex + length) % field.length;
                    if (field[fieldIndex] >= 5) {
                        points += 5;
                        field[fieldIndex] -= 5;
                    } else {
                        points += field[fieldIndex];
                        field[fieldIndex] = 0;
                    }
                }
                break;

            case 'Reverse':
                field.reverse();
                break;

            case 'Game over':
                console.log(field.join(' - '));
                console.log(`Iskren finished the archery tournament with ${points} points!`);
                return;
        }
    }
}

solve([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
]);
