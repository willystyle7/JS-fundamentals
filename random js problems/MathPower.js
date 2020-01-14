function MathPower([a, b]) {
    let result = Math.pow(a, b);
    if (result.toString().indexOf('.')  > 0) {
        // result = Math.ceil(result * 100000000000000) / 100000000000000;
        result = Math.round(result * 1e15) / 1e15;
    }
    console.log(result);
}
