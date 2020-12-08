function cappy(input = []) {
    const bottles = new Map();
    input.reduce((acc, curr) => {
        let [juice, quantity] = curr.split(' => ');
        quantity = Number(quantity);
        if (!acc.hasOwnProperty(juice)) {
            acc[juice] = 0;
        }
        acc[juice] += quantity;
        if (acc[juice] >= 1000) {
            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }
            bottles.set(juice, bottles.get(juice) + parseInt(acc[juice] / 1000));
            acc[juice] %= 1000;
        }
        return acc;
    }, {});
    for (let [juice, quantity] of bottles) {
        console.log(`${juice} => ${quantity}`);
    }
}

function solve(input) {
    let juiceObj = {};
    let bottleCount = new Map();
    input.forEach((el) => {
        let [juiceName, juiceQuantity] = el.split(' => ');
        juiceQuantity = Number(juiceQuantity);
        if (!juiceObj.hasOwnProperty(juiceName)) {
            juiceObj[juiceName] = 0;
        }
        juiceObj[juiceName] += juiceQuantity;
        let quantityBottles = Math.floor(juiceObj[juiceName] / 1000);
        if (quantityBottles > 0 && !bottleCount.has(juiceName)) {
            bottleCount.set(juiceName, 0);
        }
    });
    for (const key in juiceObj) {
        if (bottleCount.has(key)) {
            bottleCount.set(key, Math.floor(juiceObj[key] / 1000));
        }
    }
    for (const key of bottleCount.keys()) {
        console.log(`${key} => ${bottleCount.get(key)}`);
    }
}
