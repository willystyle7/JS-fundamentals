function findMax(arr) {
    const [first, ...rest] = arr;
    if (rest.length === 0) return first;
    const nextMax = findMax(rest.filter(val => val > first));
    return first > nextMax ? first : nextMax;
}

function findMax2(arr, index = 0) {
    if (arr.length === 1) {
        return arr[0];
    }
    if (arr[index] < arr[index + 1]) {
        arr.splice(0, 1);
    } else {
        arr.splice(1, 1);
    }
    return findMax(arr, index);
}

console.log(findMax2([190, 3, 5, 89], 2));
console.log(findMax2([19], 2));
console.log(findMax2([]));
