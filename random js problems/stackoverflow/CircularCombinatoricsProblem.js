// https://stackoverflow.com/questions/62624462/program-to-solve-circular-combinatorics-program-problem

function circular(c, r) {
    let arrs = [[]];
    for (let i = 0; i < c; i++) {
        let len = arrs.length;
        for (let j = 0; j < len; j++) {
            arr = arrs.shift();
            if (arr.filter(el => el === 0).length < c - r) {
                arrs.push(arr.concat([0]));
            }
            if (arr.filter(el => el === 1).length < r) {
                arrs.push(arr.concat([1]));
            }
        }
    }
    return arrs;
}

console.log(circular(3, 1));
console.log(circular(10, 4).length);

