function AirPollution(mapSofia, forcesAffecting) {
    let matrix = [];
    for (let i = 0; i < mapSofia.length; i++) {
        matrix[i] = mapSofia[i].split(' ').map(Number);
    }
    for (let k = 0; k < forcesAffecting.length; k++) {
        let token = forcesAffecting[k].split(' ');
        let force = token[0];
        let index = Number(token[1]);
        switch (force) {
            case 'breeze':
                let row = index;
                for (let j = 0; j < matrix[row].length; j++) {
                    matrix[row][j] -= 15;
                    if (matrix[row][j] < 0) matrix[row][j] = 0;
                }
                break;
            case 'gale':
                let column = index;
                for (let i = 0; i < matrix.length; i++) {
                    matrix[i][column] -= 20;
                    if (matrix[i][column] < 0) matrix[i][column] = 0;
                }
                break;
            case 'smog':
                let value = index;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        matrix[i][j] += value;
                    }
                }
                break;
        }
    }
    let polutedBlocks = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50) {
                polutedBlocks.push(`[${i}-${j}]`);
            }
        }
    }
    if (polutedBlocks.length > 0) {
        console.log('Polluted areas: ' + polutedBlocks.join(', '));
    } else {
        console.log('No polluted areas');
    }
};

AirPollution([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
], ["breeze 1", "gale 2", "smog 25"]);
console.log();
AirPollution([
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
], [
    "smog 11", "gale 3",
    "breeze 1", "smog 2"
]);
console.log();
AirPollution([
    "5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24",
], ["breeze 1", "gale 2", "smog 35"]);