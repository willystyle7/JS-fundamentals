// let funcSum = (function () {
//     let sum = 0;
//     return function f(num) {
//         sum += num;
//         // console.log(sum);
//         return f;
//     }
// })();

// console.log(funcSum(1));
// console.log(funcSum(1)(3)(-6));

let funcSum = (function () {
    let sum = 0;
    let f = function f(num) {
        sum += num;
        // console.log(sum);
        return f;
    }
    f.toString = function () {
        return sum;
    }
    return f;
})();

console.log(funcSum(1).toString());
console.log(funcSum(1)(3)(-6).toString());

// FOR JUDGE IIFE CLOSURE

// (function func() {
//     let sum = 0;
//     let f = function f(num) {
//         sum += num;
//         // console.log(sum);
//         return f;
//     }
//     f.toString = function () {
//         return sum;
//     }
//     return f;
// })()

// Another Problem - only adds on one row accumulator
function add(a) {
	function sum(b) {
		a += b;
		return sum;
	}
	sum.toString = () => a;
	return sum;
}