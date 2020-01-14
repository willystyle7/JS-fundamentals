function solve(n) {
    let stars = '*'.repeat(n);
    let intervals = ' '.repeat(n - 2);
    console.log(stars);
    for (let i = 0; i < n - 2; i++) {
        console.log('*' + intervals + '*');
    }
    console.log(stars);
}

let solve2 = n => console.log('*'.repeat(n) + '\n' + ('*' + ' '.repeat(n - 2) + '*' + '\n').repeat(n - 2) + '*'.repeat(n));

solve2(3);
solve2(5);