// https://www.mathsisfun.com/roman-numerals.html

function convertToRoman(num) {
    let romanDict = {
        ones: {
            0: '',
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V',
            6: 'VI',
            7: 'VII',
            8: 'VIII',
            9: 'IX'
        },
        tens: {
            0: '',
            1: 'X',
            2: 'XX',
            3: 'XXX',
            4: 'XL',
            5: 'L',
            6: 'LX',
            7: 'LXX',
            8: 'LXXX',
            9: 'XC'
        },
        hundreds: {
            0: '',
            1: 'C',
            2: 'CC',
            3: 'CCC',
            4: 'CD',
            5: 'D',
            6: 'DC',
            7: 'DCC',
            8: 'DCCC',
            9: 'CM'
        },
        thousands: {
            0: '',
            1: 'M',
            2: 'MM',
            3: 'MMM',
            4: '?',
            5: '?',
            6: '?',
            7: '?',
            8: '?',
            9: '?'
        }
    };
    let numStr = '0'.repeat(4 - num.toString().length) + num.toString();
    let [thousands, hundreds, tens, ones] = numStr.split('');
    let romanNum =
        romanDict.thousands[thousands] +
        romanDict.hundreds[hundreds] +
        romanDict.tens[tens] +
        romanDict.ones[ones];
    return romanNum;
}

console.log(convertToRoman(36)); // DCCXCVIII
console.log(convertToRoman(798)); // DCCXCVIII
console.log(convertToRoman(3999)); // MMMCMXCIX
