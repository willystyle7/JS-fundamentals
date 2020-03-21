function solve(input) {
    let cruise = input.shift();
    let cabin = input.shift();
    let nights = Number(input.shift());
    let price = 0;
    switch (cruise) {
        case 'Mediterranean':
            switch (cabin) {
                case 'standard cabin':
                    price = nights * 27.5;
                    break;
                case 'cabin with balcony':
                    price = nights * 30.2;
                    break;
                case 'apartment':
                    price = nights * 40.5;
                    break;
            }
            break;
        case 'Adriatic':
            switch (cabin) {
                case 'standard cabin':
                    price = nights * 22.99;
                    break;
                case 'cabin with balcony':
                    price = nights * 25;
                    break;
                case 'apartment':
                    price = nights * 34.99;
                    break;
            }
            break;
        case 'Aegean':
            switch (cabin) {
                case 'standard cabin':
                    price = nights * 23.0;
                    break;
                case 'cabin with balcony':
                    price = nights * 26.6;
                    break;
                case 'apartment':
                    price = nights * 39.8;
                    break;
            }
            break;
    }
    if (nights > 7) {
        price = price * 0.75;
    }
    console.log(`Annie's holiday in the ${cruise} sea costs ${(price * 4).toFixed(2)} lv.`);
}
