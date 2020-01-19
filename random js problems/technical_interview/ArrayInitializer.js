// make function which makes array with length n and initial value (except 0) or index

function arrayInit(n, initVal) {
    return Array.from({ length: n }, (v, k) => initVal || k);
}

console.log(arrayInit(10));
console.log(arrayInit(10, 0));
console.log(arrayInit(10, 1));
