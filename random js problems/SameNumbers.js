function solve(num) {
    let sum = 0;
    let result = true;
    let digit = num % 10;
    while (num !== 0) {
        let currentDigit = num % 10;
        sum += currentDigit;
        // if (currentDigit !== digit) {
        //     result = false;
        // }
        result = result && currentDigit === digit
        num = Math.floor(num / 10);
    }
    console.log(result);
    console.log(sum);
}

function solve(num) {
    let arr = num.toString().split('').map(Number);
    console.log([...new Set(arr)].length === 1);
    console.log(arr.reduce((a, b) => a + b));
}
