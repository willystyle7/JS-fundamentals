function add(str1, str2) {
    let sum = '';
    let str1Length = str1.length;
    let str2Length = str2.length;
    if (str2Length > str1Length) {
        [str1, str2] = [str2, str1];
    }
    let carry = 0;
    let a, b, temp, digitSum;
    for (let i = 0; i < str1.length; i++) {
        a = parseInt(str1.charAt(str1.length - 1 - i));
        b = parseInt(str2.charAt(str2.length - 1 - i));
        b = b ? b : 0;
        temp = (carry + a + b).toString();
        digitSum = temp.charAt(temp.length - 1);
        carry = parseInt(temp.substr(0, temp.length - 1));
        carry = carry ? carry : 0;
        sum = i === str1.length - 1 ? temp + sum : digitSum + sum;
    }
    return sum;
}

function fibs(n) {
    if (n === 0) return '0';
    if (n === 1) return '1';
    let prevFib = '0'
    let fib = '1';
    for (let i = 2; i <= n; i++) {
        let temp = fib;
        fib = add(fib, prevFib);
        prevFib = temp;
    }
    return fib;
}

console.log(fibs(500)); // 139423224561697880139724382870407283950070256587697307264108962948325571622863290691557658876222521294125