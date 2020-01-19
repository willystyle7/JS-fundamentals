function palindrome(str) {
    str = str.replace(/\W|_/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}