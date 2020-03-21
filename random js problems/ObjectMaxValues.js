// How can i return all the object keys with maximum values in the object?
// Like if i have an object say {2: 1, 3: 4, 4: 4, 6: 4, 7: 3, a: 4}

let obj = { 2: 1, 3: 4, 4: 4, 6: 4, 7: 3, a: 4 };

function solve(obj) {
    let max = Math.max(...Object.values(obj));
    return Object.keys(obj).filter(k => obj[k] === max);
}

let objKeysMaxValue = obj => Object.keys(obj).filter(k => obj[k] === Math.max(...Object.values(obj)));

console.log(solve(obj));
console.log(objKeysMaxValue(obj));
