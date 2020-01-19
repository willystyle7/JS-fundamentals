function checkCashRegister(price, cash, cid) {
    let order = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
    let coins = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
    };
    let available = {};
    for (const pair of cid) {
        available[pair[0]] = pair[1] * 100;
    }
    let status = '';
    let change = [];
    let difference = (cash - price) * 100;
    for (const coin of order) {
        let value = coins[coin];
        let rest = 0;
        if (difference >= value) {
            let num = Math.floor(difference / value);
            let numAvailable = Math.floor(available[coin] / value);
            let numReal = Math.min(num, numAvailable);
            difference = difference - numReal * value;
            available[coin] -= numReal * value;
            rest = numReal * value / 100;
        }
        change.push([coin, rest]);
    }
    // console.log('difference: ', difference);
    if (difference === 0) {
        if (Object.keys(available).every(key => available[key] === 0)) {
            status = 'CLOSED';
            change.reverse();
        } else {
            status = 'OPEN';
            change = change.filter(ch => ch[1] > 0);
        }
    } else {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    }
    let result = {
        status: status,
        change: change
    };
    // console.log('result: ', result);
    return result;
}

// Example cash-in-drawer array(cid):
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

// checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100]
// ]);

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));