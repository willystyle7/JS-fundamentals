// first decision with accumulation
let funcSum = (function () {
    let sum = 0;
    let f = function (num) {
        sum += num;
        return f;
    };
    f.toString = function () {
        return sum;
    };
    return f;
})();

// console.log(funcSum(-1).toString()); // -1
// console.log(funcSum(1)(3)(-6).toString()); // -3

// second decision wtihout accumulation
function add(a) {
    function sum(b) {
        a += b;
        return sum;
    }
    sum.toString = () => a;
    return sum;
}

// console.log(add(1)(3));

// Problem Statement:
// Write a sum function which will work properly when invoked using syntax below.

function sum(...args) {
    function add(...args2) {
        args = args.concat(args2);
        return add;
    }
    add.toString = () => args.reduce((a, b) => a + b);
    return add;
}

console.log(sum(2, 3).toString()); // Outputs 5
console.log(sum(2)(3).toString()); // Outputs 5
console.log(sum(1)(2)(3)(4).toString()); // Outputs 10
console.log(sum(2, 3, 4)(5, 6)(7, 8).toString()); // Outputs 35

