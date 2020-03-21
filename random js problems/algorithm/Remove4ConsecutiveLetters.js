// Write a function that finds and removes instances of four identical consecutive lowercase letters.
// The function should delete as a few letters as possible.
// "ffdttttyy" should return "ffdtttyy"
// "iiikigggg" should return "iiikiggg"

function solve(str) {
    let result = '';
    let occurrence = 0;
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter.toLowerCase() === letter && letter === str[i - 1]) {
            occurrence++;
        } else {
            occurrence = 0;
        }
        if (occurrence < 3) {
            result += letter;
        }
    }
    return result;
}

// using regex replace
function solve2(str) {
    // return str.replace(/([a-z])(\1{3})/g, '$2');
    return str.replace(/([a-z])(\1{3,})/g, '$1'.repeat(3));
}

function solve3(str) {
    return str.split('').reduce((newStr, char) => {
        if (newStr.slice(-3) === `${char}${char}${char}`) {
            return newStr;
        }
        return newStr + char;
    }, '');
}


console.log(solve('ffFFFFffdttttyyyyy'));
console.log(solve('iiikigggg'));
console.log(solve2('ffFFFFffdttttyyyyy'));
console.log(solve2('iiikigggg'));
// Big strings 1
// console.log(solve('Iiiiikigggg'.repeat(20e6 / 8)));
// console.log(solve2('Iiiiikigggg'.repeat(20e6 / 8)));

// Big strings 2
// let str = '';
// for (let i = 0; i < 20000000; i++) {
//     if (i % 5 === 0) {
//         str += 'b';
//     } else {
//         str += 'a';
//     }
// }
// console.log(str);
// console.log(solve(str));
