function solve(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);

    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    console.log(
        Number.isInteger(result(x1, y1))
            ? `{${x1}, ${y1}} to {0, 0} is valid`
            : `{${x1}, ${y1}} to {0, 0} is invalid`
    );
    console.log(
        Number.isInteger(result(x2, y2))
            ? `{${x2}, ${y2}} to {0, 0} is valid`
            : `{${x2}, ${y2}} to {0, 0} is invalid`
    );

    console.log(
        Number.isInteger(result(x1 - x2, y1 - y2))
            ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
            : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
    );

    function result(x, y) {
        return Math.sqrt(x ** 2 + y ** 2);
    }
}

function solve2([x1, y1, x2, y2]) {
    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(result(x1, y1)) ? '' : 'in'}valid`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(result(x2, y2)) ? '' : 'in'}valid`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(result(x1 - x2, y1 - y2)) ? '' : 'in'}valid`);

    function result(x, y) {
        return Math.sqrt(x ** 2 + y ** 2);
    }
}


solve([1, 0, 0, 1]);
solve2([1, 0, 0, 1]);