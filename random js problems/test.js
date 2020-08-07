function drugo($param) {
    if ($param) {
        return 'neshto';
    }

    return 'defaultno neshto';
}

function drugo2($param) {
    return ($param !== undefined && 'neshto') || 'defaultno neshto';
}

function drugo3($param) {
    return ($param && 'neshto') || 'defaultno neshto';
}

// console.log(drugo2(0));
// console.log(drugo2(''));
// console.log(drugo2(false));
// console.log(drugo2(true));
// console.log(drugo2('0'));
// console.log(drugo2());
// console.log();
// console.log(drugo3(0));
// console.log(drugo3(''));
// console.log(drugo3(false));
// console.log(drugo3(true));
// console.log(drugo3('0'));
// console.log(drugo3());

// const names = ['ash', 'ashford', 'ashley', 'ashton'];
// const re = /a/i;
// console.log(names.filter(name => re.test(name)));

function splitChars(str, num) {
    if (!num.toString().match(/^\d+$/)) throw new Error('Second argument should be number!');
    pattern = `.{1,${num}}`;
    rgx = new RegExp(pattern, 'g');
    return str.match(rgx);
}

const myString = 'abcdefghijklmnot';

console.log(splitChars(myString, 3));
console.log(splitChars(myString, 'a'));
