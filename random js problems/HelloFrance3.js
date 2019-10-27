function france(array) {
    let newArr = [];
    let newPrice = 0;
    let profit = 0;
    let budget = array.pop();
    budget = Number(budget);
    let line = array.join(' ').split('->');
    line = line.join(' ').split('|');
    let word = line.join(' ').split(' ');
    while (true) {
        if (word[0] === undefined) {
            break;
        }
        let firstWord = word.shift();
        let secondWord = word.shift();
        secondWord = Number(secondWord);
        if (Number(secondWord) > budget) {
            continue;
        }
        if (firstWord === 'Clothes' && secondWord > 50) {
            continue;
        }
        if (firstWord === 'Shoes' && secondWord > 35) {
            continue;
        }
        if (firstWord === 'Accessories' && secondWord > 20.5) {
            continue;
        } else {
            budget -= secondWord;
            newPrice = secondWord + secondWord * 0.4;
            newPrice = newPrice.toFixed(2);
            profit += newPrice - secondWord;
            newArr.push(newPrice);
        }
    }
    console.log(newArr.join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);
    let numberArr = newArr.map(Number);
    let sum = numberArr.reduce((a, b) => a + b, 0);
    sum = sum + budget;
    if (sum > 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }
}
