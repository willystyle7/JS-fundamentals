// https://adventofcode.com
// To enable as many submarine features as possible, find the largest valid fourteen-digit model number that contains no 0 digits.
// What is the largest model number accepted by MONAD?

// OPERATIONS:
// inp a   - Read an input value and write it to variable a.
// add a b - Add the value of a to the value of b, then store the result in variable a.
// mul a b - Multiply the value of a by the value of b, then store the result in variable a.
// div a b - Divide the value of a by the value of b, truncate the result to an integer, then store the result in variable a. (Here, "truncate" means to round the value toward zero.)
// mod a b - Divide the value of a by the value of b, then store the remainder in variable a. (This is also called the modulo operation.)
// eql a b - If the value of a and b are equal, then store the value 1 in variable a. Otherwise, store the value 0 in variable a.


function solve(arr) {
    // TODO
    arr = arr.split('\n').map(row => row.split(' '));

    function validateNum(num) {
        let result = {w: 0, x: 0, y: 0, z:0};
        let inputs = String(num).split('').map(Number);
        for (let row of arr) {
            let [operator, operand, variable] = row;
            variable = (variable in result) ? result[variable] : Number(variable);
            switch (operator) {
                case 'inp':
                    result[operand] = inputs.shift();
                    break;
                case 'add':
                    result[operand] += variable;
                    break;
                case 'mul':
                    result[operand] *= variable;
                    break;
                case 'div':
                    if (variable !== 0) {
                        result[operand] /= variable;
                    }
                    break;
                case 'mod':
                    if (result[operand] >= 0 && variable > 0) {
                        result[operand] %= variable;
                    }
                    break;
                case 'eql':
                    result[operand] = result[operand] === variable ? 1 : 0;
                    break;
                default:
                    break;
            }
        }
        return result.z === 0; //valid if z === 0
    }

    // too slow
    let num = 100000000000000; // 99999999999999;
    let isValid;
    do {
        num -= 1;
        isValid = false;

        if (String(num).indexOf('0') < 0) {
            isValid = validateNum(num);
        }

    } while (!isValid && num > 11111111111111);

    return num;
}

let arr =
`inp w
inp x
inp y
inp z
inp z
add z -8`;

// console.log(solve(arr)); // ?

let arr1 =
`inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 7
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 15
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 12
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 2
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -3
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 15
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 14
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -9
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 2
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 15
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -7
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 1
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 15
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -4
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 15
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 14
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 12
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 1
add x 11
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 2
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -8
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 13
mul y x
add z y
inp w
mul x 0
add x z
mod x 26
div z 26
add x -10
eql x w
eql x 0
mul y 0
add y 25
mul y x
add y 1
mul z y
mul y 0
add y w
add y 13
mul y x
add z y`;

console.log(solve(arr1)); // 65984919997939

