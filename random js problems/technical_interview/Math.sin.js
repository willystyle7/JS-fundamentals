// calculate sin(x) with power series

function sin(x) {
    let accuracy = 0.000001;

    // Converting degrees to radian
    x = x * (Math.PI / 180);

    let x1 = x;

    // maps the sum along the series
    let sinx = x;

    let i = 1;
    do {
        denominator = 2 * i * (2 * i + 1);
        x1 = (-x1 * x * x) / denominator;
        sinx = sinx + x1;
        i = i + 1;
    } while (accuracy <= Math.abs(x1));

    return sinx;
}

console.log(sin(90));
console.log(Math.sin(Math.PI / 2));
