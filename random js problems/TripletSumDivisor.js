function tripletSum(arr) {
    let foundPairs = 0;
    let foundPairsArr = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let a = arr[i],
                    b = arr[j],
                    c = arr[k],
                    sum = a + b + c;
                if (
                    (sum % a === 0 && sum % b === 0) ||
                    (sum % a === 0 && sum % c === 0) ||
                    (sum % b === 0 && sum % c === 0)
                )
                    continue;
                else {
                    foundPairs++;
                    foundPairsArr.push(`${i + 1},${j + 1},${k + 1}`);
                }
            }
        }
    }
    // return foundPairs * 6; // Times 6 since 3! = 6
    return foundPairsArr;
}

function tripletSumDivisor(arr) {
    let foundPairs = 0;
    let foundPairsArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (i === j || j === k || k == i) continue;
                let a = arr[i],
                    b = arr[j],
                    c = arr[k],
                    sum = a + b + c;
                if ((sum % a === 0 && sum % b !== 0 && sum % c !== 0) ||
                    (sum % b === 0 && sum % a !== 0 && sum % c !== 0) ||
                    (sum % c === 0 && sum % a !== 0 && sum % b !== 0)) {
                    foundPairs++;
                    foundPairsArr.push(`${i + 1},${j + 1},${k + 1}`);
                }
            }
        }
    }
    // return foundPairs;
    return foundPairsArr;
}

tripletSum([1, 2, 2, 1, 5]).map(x => console.log(x));
console.log('count: ', tripletSum([1, 2, 2, 1, 5]).length);
tripletSumDivisor([1, 2, 2, 1, 5]).map(x => console.log(x));
console.log('count: ', tripletSumDivisor([1, 2, 2, 1, 5]).length);
