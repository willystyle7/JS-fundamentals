function solve(arr, [bombNum, power]) {
    let bombInd = arr.indexOf(bombNum);
    while (bombInd >= 0) {
        let startInd = bombInd - power < 0 ? 0 : bombInd - power;
        arr.splice(startInd, 2 * power + 1);
        bombInd = arr.indexOf(bombNum);
    }
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}

function solve(arr, bomb) {
    let bombNum = bomb[0];
    let power = bomb[1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === bombNum) {
            if (i - power < 0) {
                arr.splice(0, 2 * power + 1);
            } else {
                arr.splice(i - power, 2 * power + 1);
            }
            i -= power + 1;
        }
    }
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}

// solve([7,7,7,1,2],[7,1]);
// solve([1,2,2,4,2,2,2,9],[4,2]);
// solve([1, 4, 4, 2, 8, 9, 1],[9, 3]);
// solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])
// solve([1, 7, 7, 1, 2, 3], [7, 1]);
