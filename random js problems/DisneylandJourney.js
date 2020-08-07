function disneylandJourney([price, months]) {
    savedMoney = 0;
    for (let month = 1; month <= months; month++) {
        if (month % 2 === 1 && month !== 1) {
            savedMoney -= savedMoney * 0.16;
        }
        if (month % 4 === 0) {
            savedMoney += savedMoney * 0.25;
        }
        savedMoney += price * 0.25;
    }
    if (savedMoney >= price) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(savedMoney - price).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(price - savedMoney).toFixed(2)}lv. more.`);
    }
}
