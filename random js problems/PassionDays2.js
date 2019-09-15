function passionDays(input) {
    let money = input.shift();
    let moneyPrefix = '';
    if (money.length > 15) {
        moneyPrefix = money.substr(0, money.length - 15);
        money = money.slice(-15);
    }
    money = Number(money);
    let command = input.shift();

    let purchases = 0;
    let price = 0.0;

    while (command !== "mall.Enter") {
        command = input.shift();
    }

    command = input.shift();

    while (command !== "mall.Exit") {
        for(let i = 0; i < command.length; i++) {

            let action = command.charCodeAt(i);

            if (action >= 'A'.charCodeAt(0) && action <= 'Z'.charCodeAt(0)) {
                price = 0.5 * action;
            }
            else if (action >= 'a'.charCodeAt(0) && action <= 'z'.charCodeAt(0)) {
                price = 0.3 * action;
            }
            else if (action === '%'.charCodeAt(0)) {
                price = money * 0.5;
            }
            else if (action === '*'.charCodeAt(0)) {
                money += 10.0;
                continue;
            }
            else {
                price = action;
            }

            if (price > money || money === 0) {
                continue;
            }

            money -= price;
            purchases++;
        }

        command = input.shift();
    }

    if (purchases === 0) {
        console.log(`No purchases. Money left: ${moneyPrefix + money.toFixed(2)} lv.`);
    } else {
        console.log(`${purchases} purchases. Money left: ${moneyPrefix + money.toFixed(2)} lv.`);
    }
}

