function asd(args) {
    // if (args[0].length > 28) throw new Error();
    let money = BigInt(args[0]) * 100n;
    let purchases = 0;
    let i = 1;
    let n1;

    for (; i < args.length; i++) {
        if (args[i] === `mall.Enter`) break;
    }

    for (let a1 = i + 1; a1 < args.length; a1++) {
        if (args[a1] === `mall.Exit`) break;

        for (let a2 = 0; a2 < args[a1].length; a2++) {
            n1 = args[a1].charCodeAt(a2);

            if (n1 >= 65 && n1 <= 90) {
                if (money >= BigInt(n1 * 50)) {
                    money = money - BigInt(n1 * 50);
                    purchases++;
                }
            } else if (n1 >= 97 && n1 <= 122) {
                if (money >= BigInt(n1 * 30)) {
                    money = money - BigInt(n1 * 30);
                    purchases++;
                }
            } else if (n1 === 37) {
                if (money > 0n) {
                    if (money % 2n == 0) {
                        money = money / 2n;
                    } else {
                        money = money / 2n + 1n;
                    }
                    purchases++;
                }
            } else if (n1 === 42) {
                money = money + 1000n;
            } else {
                if (money >= BigInt(n1 * 100)) {
                    money = money - BigInt(n1 * 100);
                    purchases++;
                }
            }
        }
    }
    if (purchases === 0) {
        console.log(`No purchases. Money left: ${toFixed2(money)} lv.`);
    } else {
        console.log(`${purchases} purchases. Money left: ${toFixed2(money)} lv.`);
    }

    function toFixed2(bigInt) {
        let bigIntStr = bigInt.toString();
        if (bigIntStr.length > 2) {
            return bigIntStr.slice(0, -2) + '.' + bigIntStr.slice(-2);
        } else if (bigIntStr.length === 2) {
            return '0.' + bigIntStr;
        } else if (bigIntStr.length === 1) {
            return '0.0' + bigIntStr;
        }
    }
}
