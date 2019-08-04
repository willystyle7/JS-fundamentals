// let codes = [];
// for (let i1 = 0; i1 <= 9; i1++) {
//     for (let i2 = 0; i2 <= 9; i2++) {
//         for (let i3 = 0; i3 <= 9; i3++) {
//             for (let i4 = 0; i4 <= 9; i4++) {
//                 let code = [i1, i2, i3, i4];
//                 let uniqueCode = [...new Set(code)];
//                 if (code.length === uniqueCode.length + 2) {
//                     codes.push(code.join(''));
//                 }
//             }
//         }
//     }
// }
// console.log(codes.length);
// console.log(codes);
let nums = [];
for (let num = 1000; num < 10000; num++) {
    let str = num.toString();
    if (str[0] === str[1] && str[2] === str[3]) {
        if (Math.sqrt(num) === Math.round(Math.sqrt(num))) {
            nums.push(num);
        }
    }
}
console.log(nums);