function solve(input) {
    let items = input.shift().split('|');
    let budjet = +input.shift();
    let arr = [];

    for (let token of items) {
        let item = token.split('->');
        let name = item[0];
        let price = +item[1];
        let maxPrice = 0;
        if (name === 'Clothes') {
            maxPrice = 50;
        } else if (name === 'Shoes') {
            maxPrice = 35;
        } else if (name === 'Accessories') {
            maxPrice = 20.5;
        }
        if (price <= budjet && price <= maxPrice) {
            budjet -= price;
            arr.push((price * 1.4).toFixed(2));
        }
    }
    console.log(arr.join(' '));
    let sumWithProfit = 0;
    for (let el of arr) {
        sumWithProfit += +el;
    }

    let profit = (sumWithProfit - sumWithProfit / 1.4).toFixed(2);
    let sum = budjet + sumWithProfit;
    console.log(`Profit: ${profit}`);

    if (sum >= 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }
}
