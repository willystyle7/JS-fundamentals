var getValidPassword = function(arr) {
    let validArrays = [];
    for (var i = 0; i < arr.length; i++) {
        let valid = true;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 !== 0) {
                valid = false;
                break;
            }
        }
        if (valid) {
            validArrays.push(arr[i].slice());
        }
    }
    return validArrays;
};

var arr1 = [
    [1, 4, 4, 1],
    [1, 2, 3, 1],
    [2, 6, 0, 8],
    [5, 5, 5, 5],
    [4, 3, 4, 3]
];

console.log(getValidPassword(arr1));
