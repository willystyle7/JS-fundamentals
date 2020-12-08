function sum(input) {
    let n = Math.abs(Number(input));
    let sum = 0;
    for (let i = 0; i < Math.abs(Number(input)).toString().length; i++) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    console.log(`The sum of the digits is:${sum}`);
}

function sum(input) {
    let n = Math.abs(parseInt(input));
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    console.log(`The sum of the digits is:${sum}`);
}

function sum(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}