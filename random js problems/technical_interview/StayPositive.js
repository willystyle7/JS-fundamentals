// problem from codemotion.com and hackerrank

function minStart(arr) {
    // Write your code here
    for (let i = 1; i < arr.length; i++) {
        arr[i] += arr[i - 1];
    }
    return 1 - Math.min(...arr);
}

const minStart2 = arr => 1 - Math.min(...arr.map((el, idx) => el + (arr[idx - 1] ? arr[idx - 1] : 0)));

function minStart3(arr) {  // too slow
    // Write your code here
    let arrSums = [];
    for (let i = 0; i < arr.length; i++) {
        arrSums[i] = sum(arr.slice(0, i + 1));
    }
    // console.log(arrSums.join(', '));
    let minSum = Math.min(...arrSums);
    return 1 - minSum;

    function sum(arr) {
        return arr.reduce((agr, curr) => agr + curr, 0);
    }
}

console.log(minStart([-5, 4, -2, 3, 1]));
console.log(minStart([-4, 3, 2, 1]));
console.log(minStart([3, -6, 5, -2, 1]));
