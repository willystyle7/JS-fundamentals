function solve(arr) {
    return arr.reduce((acc, cur, idx) => {
        if (idx % 2 === 0) {
            acc[0] += cur;
        } else {
            acc[1] += cur;
        }
        return acc;
    }, [0, 0]);
}

const solve2 = arr => arr.reduce((acc, cur, idx) => (idx % 2 ? [acc[0], acc[1] + cur] : [acc[0] + cur, acc[1]]), [0, 0]);

console.log(solve([50,60,60,45,70]));
console.log(solve2([50,60,60,45,70]));