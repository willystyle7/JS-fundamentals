const subject = 'I';
const action = String.fromCodePoint(0x2764);
const object = String.fromCharCode(...[' ', 77, 121, ' ', 106, 111, 98]);

console.log(subject + ' ' + action + object);
