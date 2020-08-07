function train(input) {
    let numbers = input.shift().split(' ').map(Number);
    let max = +input.shift();
    for (let i = 0; i < input.length; i++) {
        let [command, passengers] = input[i].split(' ');
        if (command === 'Add') {
            numbers.push(+passengers);
        } else {
            let passengers = +command;
            for (let j = 0; j < numbers.length; j++) {
                if (passengers + numbers[j] <= max) {
                    numbers[j] += passengers;
                    break;
                };
            }
        }
    }
    console.log(numbers.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
