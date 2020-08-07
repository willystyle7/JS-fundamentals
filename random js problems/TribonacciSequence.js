function solve(n) {
    let tribs = [1, 1, 2];
    if (n <= 3) {
        tribs = tribs.slice(0, n - 1);
    } else {
        for (let index = 3; index < n; index++) {
            tribs.push(tribs[index - 1] + tribs[index - 2] + tribs[index - 3]);
        }
    }
    console.log(tribs.join(' '));
}

function solveRecursive(n) {
    let tribs = [1, 1, 2];
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(findNth(i));

    }
    console.log(result.join(' '));

    function findNth(n) {
        if (n in tribs) return tribs[n];
        tribs[n] = findNth(n - 1) + findNth(n - 2) + findNth(n - 3);
        return tribs[n];
    }
}

solve(4); // 1 1 2 4
solve(8); // 1 1 2 4 7 13 24 44
solveRecursive(4); // 1 1 2 4
solveRecursive(8); // 1 1 2 4 7 13 24 44
