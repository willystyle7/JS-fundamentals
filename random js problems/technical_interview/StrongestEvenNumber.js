// Strongest even number in an interval
// A strongness of an even number is the number of times we can successively divide by 2 until we reach an odd number starting with an even number n.

function strongestEven(n, m) {
    let strongest = 0;
    let divisions = 0;
    for (let num = n; num <= m; num++) {
        let tempDivisions = 0;
        let tempNum = num;
        while (tempNum % 2 === 0) {
            tempNum /= 2;
            tempDivisions++;
        }
        if (tempDivisions > divisions) {
            strongest = num;
            divisions = tempDivisions;
        }
    }
    return strongest;
}

const strongestEven2 = (n, m, p = 0) => p >= n ? p : strongestEven(n, m, p += 2 ** Math.floor(Math.log(m - p)/Math.log(2)));

const strongestEven3 = (min, max, high2power = 0) => high2power >= min ? high2power : strongestEven(min,max,high2power += 2 ** Math.floor(Math.log(max - high2power)/Math.log(2)));

function strongestEven4(from, to) {
    let best = 1;
    while (true) {
        let ceiling = Math.ceil(from / best);
        let floor = Math.floor(to / best);
        if (ceiling > floor) {
            best = Math.floor(best / 2);
            return best * (Math.floor(to / best));
        }
        best *= 2;
    }
}

console.log(strongestEven4(1, 2));  // 2
console.log(strongestEven4(5, 10));  // 8
console.log(strongestEven4(48, 56));  // 48
console.log(strongestEven4(129, 193));  // 192
console.log(strongestEven4(1, 10237645));  // 8388608
console.log(strongestEven4(10, 15));  // 12
console.log(strongestEven4(1180381085, 1590463313));  // 1342177280