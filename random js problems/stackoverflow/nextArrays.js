let strArr = ["when", "the", "like", "because", "the", "apple", "like", "the", "star"];

function nextArrs(strArr) {
    return strArr.reduce((acc, curr, idx, arr) => {
        let arrName = curr + 'Array';
        if (!acc.hasOwnProperty(arrName)) {
            acc[arrName] = [];
        }
        if (arr[idx + 1] !== undefined) {
            acc[arrName].push(arr[idx + 1]);
        }
        return acc;
    }, {});
}

console.log(nextArrs(strArr));