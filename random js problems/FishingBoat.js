function fishingBoat(input) {
    let bugdet = Number(input.shift());
    let season = input.shift();
    let fishermen = Number(input.shift());

    let totalPrice = 0;

    if (season == 'Spring') {
        if (fishermen <= 6) {
            totalPrice = 3000 * 0.9;
        } else if (fishermen >= 7 && fishermen <= 11) {
            totalPrice = 3000 * 0.85;
        } else {
            totalPrice = 3000 * 0.75;
        }
    } else if (season == 'Winter') {
        if (fishermen <= 6) {
            totalPrice = 2600 * 0.9;
        } else if (fishermen >= 7 && fishermen <= 11) {
            totalPrice = 2600 * 0.85;
        } else {
            totalPrice = 2600 * 0.75;
        }
    } else if (season == 'Summer' || season == 'Autumn') {
        if (fishermen <= 6) {
            totalPrice = 4200 * 0.9;
        } else if (fishermen >= 7 && fishermen <= 11) {
            totalPrice = 4200 * 0.85;
        } else {
            totalPrice = 4200 * 0.75;
        }
    }
    if (fishermen % 2 == 0 && season !== 'Autumn') {
        totalPrice = totalPrice * 0.95;
    }
    if (bugdet >= totalPrice) {
        console.log(
            `Yes! You have ${(bugdet - totalPrice).toFixed(2)} leva left.`
        );
    } else {
        console.log(
            `Not enough money! You need ${(totalPrice - bugdet).toFixed(
                2
            )} leva.`
        );
    }
}
