function carWash(input) {
    let value = 0;
    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.1;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'soap') {
            value = soap(value);
        } else if (input[i] === 'water') {
            value = water(value);
        } else if (input[i] === 'vacuum cleaner') {
            value = vacuum(value);
        } else {
            value = mud(value);
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

function carWash2(input) {
    let obj = { value: 0 };
    let soap = x => (x.value += 10);
    let water = x => (x.value *= 1.2);
    let vacuum = x => (x.value *= 1.25);
    let mud = x => (x.value *= 0.9);
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'soap') {
            soap(obj);
        } else if (input[i] === 'water') {
            water(obj);
        } else if (input[i] === 'vacuum cleaner') {
            vacuum(obj);
        } else {
            mud(obj);
        }
    }
    console.log(`The car is ${obj.value.toFixed(2)}% clean.`);
}

function carWash3(input) {
    let funcs = {
        soap: x => x + 10,
        water: x => x + x * 0.2,
        'vacuum cleaner': x => x + x * 0.25,
        mud: x => x - x * 0.1
    };
    let value = input.reduce((acc, curr) => funcs[curr] && funcs[curr](acc) || acc, 0);
    // let value = input.reduce((acc, curr) => funcs[curr](acc), 0);
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
