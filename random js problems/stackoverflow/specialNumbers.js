// There are some 'special' numbers in the form of n(n-16) or n(n+16), where n is prime.
// So you have given the input X, find whether 'X' is a special number or not.
// (Bonus: Print all the 'special' numbers less than/equal to X.)

function specialNumbers(X) {
    let specialNums = [];
    let num = 2;
    while (true) {
        if (isPrime(num)) {
            let special1 = num * (num - 16);
            let special2 = num * (num + 16);
            if (special1 <= X) {
                specialNums.push(special1);
            }
            if (special2 <= X) {
                specialNums.push(special2);
            }
            if (special1 > 0 && special2 > 0 && special1 >= X && special2 >= X) {
                break;
            }
        }
        num++;
    }
    specialNums = [...new Set(specialNums)];
    specialNums.sort((a, b) => a - b);
    let isSpecialX = specialNums[specialNums.length - 1] === X;
    console.log(`${X} is ${isSpecialX ? '' : 'not '}special number!`);
    console.log(`special numbers under ${X}: `, specialNums.join(', '));

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
}

specialNumbers(57);
