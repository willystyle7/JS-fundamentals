function solve(input) {
    let amount = Math.round(Number(input.shift()) * 100);
    let coins = 0;
    while (amount > 0) {
        if (amount >= 200) amount = amount - 200
        else if (amount >= 100) amount = amount - 100
        else if (amount >= 50) amount = amount - 50
        else if (amount >= 20) amount = amount - 20
        else if (amount >= 10) amount = amount - 10
        else if (amount >= 5) amount = amount - 5
        else if (amount >= 2) amount = amount - 2
        else amount = amount - 1
        coins++;
    }
    console.log(coins);
}

solve([1.23]);
solve([2]);
solve([0.56]);
solve([2.73]);
