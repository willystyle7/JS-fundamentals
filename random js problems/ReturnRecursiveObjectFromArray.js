function list(arr) {
    if (arr.length === 0) {
        return null;
    }
    return {
        value: arr.shift(),
        rest: list(arr)
    };
}

let result = list([1, 2, 3]);
console.log(result);

let list2 = arr => arr.length === 0 ? null : {value: arr.shift(), rest: list(arr)};

let result2 = list([1, 2, 3]);
console.log(result2);