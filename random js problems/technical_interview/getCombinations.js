// get all combinations
function getCombinations (arrays, combine = [], finalList = []) {
    if (!arrays.length) {
        finalList.push(combine);
    } else {
        arrays[0].forEach(now => {
            let nextArrs = arrays.slice(1);
            let copy = combine.slice();
            copy.push(now);
            getCombinations(nextArrs, copy, finalList);
        });
    }
    return finalList;
}

console.log(getCombinations([[1, 2], [2], [3]]));
console.log(getCombinations([[1, 2], [3, 4], [5]]));