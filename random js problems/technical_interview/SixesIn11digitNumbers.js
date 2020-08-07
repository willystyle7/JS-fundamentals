// How many "6" has all 11 digits numbers

function solve() {
    let count = 0;
    for (let num = 1000000000; num <= 9999999999; num++) {
        // console.log(num);
        // console.log(count);
        let digits = num.toString().split('');
        for (const digit of digits) {
            if (digit === '6') {
                count++;
            }
        }
    }
    return count;
}

function solve2() {
    let count = 0;
    for (let num = 100000000; num <= 999999999; num++) {
        let matches = num.toString().match(/6/g);
        if (matches) {
            count += matches.length;
        }
    }
    return count;
}

console.log(solve());