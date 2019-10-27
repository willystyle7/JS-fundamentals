function isMagicMatrix(matrix) {
    let sumRow = row => matrix[row].reduce((a, b) => a + b);
    let sumCol = col => matrix.map(row => row[col]).reduce((a, b) => a + b);

    if (matrix.length > 0) {
        let targetSum = sumRow(0);

        for (let i = 1; i < matrix.length; i++) {
            let rowSum = sumRow(i);
            if (rowSum !== targetSum) {
                return false;
            }
        }

        for (let j = 0; j < matrix[0].length; j++) {
            let colSum = sumCol(j);
            if (colSum !== targetSum) {
                return false;
            }
        }
    }

    return true;
}

function magicMatrices(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;
    for (let i = 1; i < matrix.length; i++) {
        if (sum != matrix[i].reduce((a, b) => a + b)) {
            isMagic = false;
            continue;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            sumCol += matrix[row][col];
        }
        if (sumCol != sum) {
            isMagic = false;
            continue;
        }
    }
    console.log(isMagic);
}

console.log(isMagicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
