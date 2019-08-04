function solve(arr) {
    console.log(
        arr.filter(
                (el, index) =>
                    el >= (arr[index - 1] || arr[0]) &&
                    el >= Math.max(...arr.slice(0, index))
            ).join(' ')
    );
}

solve([20, 3, 2, 15, 6, 1]);
