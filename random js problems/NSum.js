// (1)+(1+2)+(1+2+3)+…+(1+2+3+…+n) <= 100  -> n = ?

function solve() {
    let n = 1;
    let sum = 0;
    while (true) {
        sum += (n * (n + 1)) / 2;
        if (sum > 100) {
            console.log('n = ', n - 1);
            break;
        }
        n++;
    }
}

function solve2() {
    let n = 1;
    let sum = 0;
    while ((sum += n * (n + 1) / 2) <= 100) n++;
    console.log('n = ', n - 1);
}

function solve3() {
    let n;
    let sum = 0;
    for (n = 0, sum = 0; sum <= 100 || console.log(n - 1); n++, sum += (n * (n + 1)) / 2);
    console.log('n = ', n - 1);
}

// one-liner
for (let n = 0, sum = 0; sum <= 100 || console.log(n - 1); n++, sum += (n * (n + 1)) / 2);

solve();
solve2();
solve3();
