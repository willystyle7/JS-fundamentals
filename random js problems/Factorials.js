// find number which is sum of factorials of its digits
let nums = [];
for (let num = 1; num < 1000000000; num++) {
    let sum = 0;
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        sum += fact(+numStr[i]);
    }
    if (sum === num) nums.push(num);
}

console.log(nums);

function fact(n) {
    let factoriel = 1;
    for (let i = 1; i <= n; i++) {
        factoriel *= i;
    }
    return factoriel;
}