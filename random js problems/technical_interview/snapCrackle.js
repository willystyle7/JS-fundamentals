function snapCrackle(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            result += 'Snap';
        }
        if (i % 5 === 0) {
            result += 'Crackle';
        }
        if (i % 2 === 0 && i % 5 !== 0) {
            result += i;
        }
        result += ', ';
    }
    console.log(result);
    return result;
}

function snapCracklePrime(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            result += 'Snap';
        }
        if (i % 5 === 0) {
            result += 'Crackle';
        }
        if (isPrime(i)) {
            result += 'Prime';
        }
        if (i % 2 === 0 && i % 5 !== 0 && !isPrime(i)) {
            result += i;
        }

        result += ', ';
    }
    console.log(result);
    return result;

    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
}

snapCrackle(12);
snapCracklePrime(15);
