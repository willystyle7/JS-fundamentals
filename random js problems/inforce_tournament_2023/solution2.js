function F(n, str) {
    function findVariants(numStr) {
        if (numStr.length < 2) {
            return 1;
        }
        let begin = +numStr.slice(0, 2);
        if (begin >= startCode && begin <= endCode) {
            return findVariants(numStr.slice(2)) + findVariants(numStr.slice(1));
        } else {
            return findVariants(numStr.slice(1));
        }
    }

    if (n === 0) {
        return 1;
    }

    let startCode = 10;
    let endCode = 9 + n;

    return findVariants(str);
}

// console.log(F(5, '1234')); // 2
// console.log(F(5, '12')); // 2
// console.log(F(26, '1234')); // 5
// console.log(F(1, '10237')); // 2
// console.log(F(26, '10237')); // 4