// Vapor winter sale
function solve(input) {
    let list = input.shift().split(', ');
    let prices = {};

    // Filling the object
    list.forEach(game => {
        if (game.includes('-')) {
            let [gameName, price] = game.split('-');
            if (!prices.hasOwnProperty(gameName)) {
                prices[gameName] = [+price];
            }
        } else if (game.includes(':')) {
            let [gameName, dlc] = game.split(':');
            if (prices.hasOwnProperty(gameName)) {
                let newPrice =
                    Number(prices[gameName]) + Number(prices[gameName]) / 5;
                prices[gameName] = [newPrice];
                prices[gameName].push(dlc);
            }
        }
    });

    // Calculating the final prices
    for (let [game, values] of Object.entries(prices)) {
        let price = values[0];
        if (values.length > 1) {
            price -= price / 2;
            prices[game][0] = price;
        } else {
            price -= price / 5;
            prices[game][0] = price;
        }
    }

    // Sorting
    for (let [game, values] of Object.entries(prices).filter(p => p[1].length > 1).sort((a, b) => a[1][0] - b[1][0])) {
        console.log(`${game} - ${values[1]} - ${values[0].toFixed(2)}`);
    }
    for (let [game, values] of Object.entries(prices).filter(p => p[1].length === 1).sort((a, b) => b[1][0] - a[1][0])) {
        console.log(`${game} - ${values[0].toFixed(2)}`);
    }
    // console.log(prices);
}

// solve(
//     [
//         "WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT"
//     ]
// );
