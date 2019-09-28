function DrawStarPyramide(n) {
    let rows = n * 2 - 1;
    for (let i = 1; i <= rows; i++) {
        let num = i <= n ? i : (2 * n - i);
        let starRow = '';
        for (let j = 1; j <= num; j++) {
            let hasStar = j % 2 === i % 2;
            starRow += hasStar ? '* ' : '  ';
        }
        console.log(starRow);
    }
}

function DrawStarPyramide2(n) {
    '*   !'.repeat(n).split('!').map((x, y, z) => console.log(z.join('').substr(y, y + 1)))
}

DrawStarPyramide2(4);
// DrawStarPyramide(4);
