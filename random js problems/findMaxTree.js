function findMax(arr) {
    return Math.max(...arr.map(el => Array.isArray(el) ? findMax(el) : el));
}

let findMax2 = arr => Math.max(...arr.map(el => Array.isArray(el) ? findMax(el) : el));

let findMax3 = arr => Math.max(...arr.flat(9));

let findMax4 = arr => Math.max(...arr.flatMap(value => Array.isArray(value) ? value.flat() : value))

let arr = [2, 4, 200, [12, 4, [100, 99], 4], [[300], 2, 99], 0];
console.log(findMax(arr));
console.log(findMax2(arr));
// console.log(findMax3(arr));
// console.log(findMax4(arr));

// const nums = [1, 3, 6];
// const addTwo = async (num) => num + 2;
// const numsPlusTwo = nums.map(addTwo);
// // const numsPlusTwo = nums.map(addTwo).map(el => Promise.resolve(el).then(val => val));
// console.log(numsPlusTwo);