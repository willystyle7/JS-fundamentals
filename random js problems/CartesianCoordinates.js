function convertCartesian(x, y) {
    return x.map((el, idx) => [el, y[idx]]);
}

const convertCartesian2 = (x, y) => x.map((el, idx) => [el, y[idx]]);

console.log(convertCartesian([1, 2, 3], [4, 5, 6]));
console.log(convertCartesian2([1, 2, 3], [4, 5, 6]));