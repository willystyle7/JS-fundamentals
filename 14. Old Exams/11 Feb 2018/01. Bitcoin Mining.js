function BitcoinMining(arr) {
    let money = 0;
    let bitcoins = 0;
    let firstDayBuy = 0;
    let goldPerDay = arr.map(Number);    
    for (let day in goldPerDay) {
        if ((day + 1) % 3 === 0) goldPerDay[day] *= 0.7;
        money += goldPerDay[day] * 67.51;
        if (money >= 11949.16) {
            if (!firstDayBuy) firstDayBuy = Number(day) + 1;
            bitcoins += Math.floor(money / 11949.16);
            money %= 11949.16;
        }
    }
    console.log('Bought bitcoins: ' + bitcoins);
    if (bitcoins) console.log('Day of the first purchased bitcoin: ' + firstDayBuy);
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

BitcoinMining([100, 200, 300]);
console.log();
BitcoinMining([50, 100]);
console.log();
BitcoinMining([3124.15, 504.212, 2511.124]);