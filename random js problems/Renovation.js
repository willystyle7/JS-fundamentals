function solve(input) {
    let height = parseInt(input[0]);
    let width = parseInt(input[1]);
    let percentNotDyed = parseInt(input[2]);
    let totalDyeSurface = Math.ceil(height * width * 4 * (100 - percentNotDyed) / 100);
    let index = 3;
    while (index < input.length) {
        let command = input[index];
        if (command === 'Tired!') {
            console.log(totalDyeSurface + ' quadratic m left.');
            break;
        }
        let currentDye = parseInt(command);
        totalDyeSurface -= currentDye;
        index++;
        if (totalDyeSurface < 0) {
            console.log('All walls are painted and you have ' + Math.abs(totalDyeSurface) + ' l paint left!');
            break;
        }
        if (totalDyeSurface === 0) {
            console.log('All walls are painted! Great job, Pesho!');
            break;
        }
    }
}

solve(['3', '5', '10', '2', '3', '4', 'Tired!']);
solve(['2', '3', '25', '6', '7', '8']);
