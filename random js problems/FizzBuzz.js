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

// const isEven = n => !(n & 1);

// console.log(isEven(53.01));

function fizzBuzz(n) {
    for (let i = 0; i < n;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
}

function lastLetters(word) {
    return word.slice(-2).split('').reverse().join(' ');
}

function arraySum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

fizzBuzz(15);
console.log(lastLetters('bat'));
console.log(arraySum([3, 13, 4, 11, 9]));
