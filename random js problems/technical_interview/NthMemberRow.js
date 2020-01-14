// Да се съставят функции, които намират n-тия член на редицата (n>0), която се образува по следното правило:
// Ni = Ni-1 + 2*Ni-2 - 8*Ni-3, когато i>3
// N1 = 4/3; N2 = 3; N3 = 4;

// iteractive
function solve(n) {
    let n1 = 4 / 3;
    let n2 = 3;
    let n3 = 4;
    if (n === 1) return n1;
    if (n === 2) return n2;
    if (n === 3) return n3;
    let nth = 0;
    for (let i = 4; i <= n; i++) {
        nth = n3 + 2 * n2 - 8 * n1;
        n1 = n2;
        n2 = n3;
        n3 = nth;
    }
    return nth;
}

// recursevely
function solveRecursevely(n) {
    if (n === 1) return 4 / 3;
    if (n === 2) return 3;
    if (n === 3) return 4;
    return solveRecursevely(n - 1) + 2 * solveRecursevely(n - 2) - 8 * solveRecursevely(n - 3);
}

// recursevely with memoization
let solveMemoization = (function () {
    let memo = [NaN, 4/3, 3, 4];
    let solve = function (n) {
        let result = memo[n];
        if (typeof result !== 'number') {
            result = solve(n - 1) + 2 * solve(n - 2) - 8 * solve(n - 3);
            memo[n] = result;
        }
        return result;
    };
    return solve;
}());

console.log(solve(1));
console.log(solve(2));
console.log(solve(3));
console.log(solve(4));
console.log(solve(5));
console.log();
console.log(solveRecursevely(1));
console.log(solveRecursevely(2));
console.log(solveRecursevely(3));
console.log(solveRecursevely(4));
console.log(solveRecursevely(5));
console.log();
console.log(solve(13));
console.log(solveRecursevely(13));
console.log(solveMemoization(13));
console.log();
console.log(solveMemoization(0));
console.log(solveMemoization(1));
console.log(solveMemoization(2));
console.log(solveMemoization(3));
console.log(solveMemoization(4));
console.log(solveMemoization(5));