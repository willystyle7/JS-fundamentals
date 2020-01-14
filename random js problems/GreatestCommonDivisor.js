// recursive
function gcd(a, b) {
    if (Math.max(a, b) % Math.min(a, b) === 0) {
        return Math.min(a, b);
    }
    // console.log(a + ',' + b);
    return gcd(Math.min(a, b), Math.max(a, b) % Math.min(a, b));
}

// iterative
function gcd2(a, b) {
    while (Math.max(a, b) % Math.min(a, b) !== 0) {
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        a = min;
        b = max % min;
    }
    return Math.min(a, b);
}

console.log(gcd(1680, 640));
console.log(gcd2(1680, 640));
