function MaximalSquare(strArr) {
    let max = -1;
    for (let row = 0; row < strArr.length; row++) {
        for (let col = 0; col < strArr[0].length; col++) {
            let maxSide = Math.min(strArr.length - row, strArr[0].length - col);
            for (let side = 0; side < maxSide; side++) {
                if (checkSquare (strArr, row, col, side) && side > max) max = side;
            }
        }
    }
    return (max + 1) * (max + 1);
}

function checkSquare (strArr, row, col, side) {
    for (let i = row; i <= row + side; i++) {
        for (let j = col; j <= col + side; j++) {
            if (strArr[i][j] === '0') return false;
        }
    }
    return true;
}

console.log(MaximalSquare(["0111", "1111", "1111", "1111"])); //9
console.log(MaximalSquare(["0111", "1101", "0111"])); //1
console.log(MaximalSquare(["01001", "11111", "01011", "11011"]));  //4
console.log(MaximalSquare( ["101101", "111111", "010111", "111111"])); //9