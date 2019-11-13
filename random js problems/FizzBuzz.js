// for (let num = 1; num <= 100; num++) {
//     let output = '';
//     if (num % 3 === 0) output += 'Fizz';
//     if (num % 5 === 0) output += 'Buzz';
//     console.log(output || num);
// }

// for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);

// function isEven(n) {
//     if (n == 0) {
//         console.log('is even');
//     } else if (n == 1) {
//         console.log('is odd');
//     } else if (n < 0) {
//         return isEven(n + 2);
//     } else {
//         return isEven(n - 2);
//     }
// }

// const isEven = n => n % 2 === 0;

const isEven = n => !(n & 1);

console.log(isEven(53.01));