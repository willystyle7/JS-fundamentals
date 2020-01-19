function solve(input) {
    let output = '';
    switch (true) {
        case input >= 0 && input <= 2:
            output = 'baby';
            break;
        case input >= 3 && input <= 13:
            output = 'child';
            break;
        case input >= 14 && input <= 19:
            output = 'teenager';
            break;
        case input >= 20 && input <= 65:
            output = 'adult';
            break;
        case input >= 66:
            output = 'elder';
            break;
        default:
            output = 'out of bounds';
            break;
    }
    console.log(output);
}
