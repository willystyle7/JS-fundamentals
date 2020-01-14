// make arr of int numbers increasing and return with how many steps it is done

function solve(arr) {
    let steps = 0;
    for (let i = 1; i < arr.length; i++) {
        const previous = arr[i - 1];
        const element = arr[i];
        if (element <= previous) {
            arr[i] = previous + 1;
            steps += previous + 1 - element;
        }
    }
    console.log(steps);
}

console.log(solve([1, 1, 1]));  // 3
console.log(solve([2, 1, 10, 1]));  // 12
console.log(solve([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]));  // 13
console.log(solve([-1000, 0, -2, 0]));  // 5
