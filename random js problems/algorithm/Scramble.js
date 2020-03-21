// func scramble(str1, str2) which returns true if a portion of str1 chars could be rearranged into str2

function scramble2(str1, str2) {
    for (const letter of str2) {
        if (str1.indexOf(letter) >= 0) {
            str1 = str1.replace(letter, '');
        } else {
            return false;
        }
    }
    return true;
}

console.log(scramble('abc', 'abc'));
console.log(scramble('rkqodlw', 'world'));
console.log(scramble('katas', 'steak'));
console.log(scramble('scriptjava', 'javascript'));
console.log(scramble('scriptingjava', 'javascript'));
console.log(scramble('scriptsjava', 'javascripts'));
console.log(scramble('jscripts', 'javascript'));
console.log(scramble('aabbcamaomsccdd', 'commas'));
console.log(scramble('qweoqwerqwegqwey', 'gew'));
console.log(scramble('scriptjavx', 'javascript'));

// more effective
function scramble(str1, str2) {
    const letterCounter = str1.split('').reduce((acc, cur) => {
        if (!acc.hasOwnProperty(cur)) {
            acc[cur] = 0;
        }
        acc[cur]++;
        return acc;
    }, {});
    for (const letter of str2) {
        if (letter in letterCounter && letterCounter[letter] > 0) {
            letterCounter[letter]--;
        } else {
            return false;
        }
    }
    return true;
}