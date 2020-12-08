// for (let i = 1; i < 100; i++) {
//     console.log(`${i} - ${BigInt(2 ** i)} - ${BigInt(2 ** i) % 67n}`);
// }

let i = 1;
while ((2n ** BigInt(i)) % 67n !== 1n) i++;
console.log(i);
// so we find that 2 ** 66 mod 67 = 1 !!!
// and use alegbra (modulus calculus): (a * b) mod c = ((a mod c) * (b mod c)) mod c

const alpha = '-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? -';

let decode = function (w) {
    return [...w].map((e, i) => {
        for (let ind = 1; ind < 68; ind++) {
            if ((ind * 2 ** (i + 1)) % 67 === alpha.indexOf(e) ) return alpha[ind];
        }
    }).join('');
}

// much faster
let decode2 = function (w) {
    return [...w].map((e, i) => {
        let coef = 2 ** ((i + 1) % 66);
        let index = alpha.indexOf(e);
        for (let ind = 1; ind < 68; ind++) {
            if ((ind * coef) % 67 === index) return alpha[ind];
        }
    }).join('');
}

// console.time('1');
// console.log(decode('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz'));
// console.timeEnd('1');
// console.time('2');
// console.log(decode2('yFNYhdmEdViBbxc40,ROYNxwfwvjg5CHUYUhiIkp2CMIvZ.1qPz'));
// console.timeEnd('2');

// PROBLEM: solve equation  (x * 2**i) % 67 = n  ->  x = ?
// i - integer (could be big), n - integer 0..66

// PROBLEM with max safe integer
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Math.log2(Number.MAX_SAFE_INTEGER)); // 53 (so with i > 53 we are not accurate)!!! may be shoud use bigInt

function solve(i, b) {
    let coef = 2 ** (i % 66);
    for (let idx = 1; idx < 68; idx++) {
        if ((idx * coef) % 67 === b) return idx;
    }
}

function solve2(i, b) {
    let coef = 2 ** i;
    for (let idx = 1; idx < 68; idx++) {
        if ((idx * coef) % 67 === b) return idx;
    }
}

function solve3(i, b) {
    let coef = 2n ** (BigInt(i) % 66n);
    for (let idx = 1; idx < 68; idx++) {
        if ((BigInt(idx) * coef) % 67n === BigInt(b)) return idx;
    }
}

// // (x * 2**3) % 67 = 5
// console.log(solve(3, 5)); // 9
// // (x * 2**2020) % 67 = 66
console.log(solve(2020, 66)); // 11
console.log(solve3(2020, 66)); // 11
// console.log(2 ** 51);