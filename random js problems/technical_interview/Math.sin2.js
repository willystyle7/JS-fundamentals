// calculate sin(x) with power series and given accuracy(EPS)

function sin(x, eps = 0.000001) {

    let c = x;
    let sinx = x;
    let i = 1;

    while (Math.abs(c) >= eps) {
        i += 2;
        c = - c * x * x / ((i - 1) * i);
        sinx = sinx + c;
    }

    return sinx;
}

console.log(sin(Math.PI / 2));
console.log(Math.sin(Math.PI / 2));
