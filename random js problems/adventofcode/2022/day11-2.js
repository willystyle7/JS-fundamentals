// https://adventofcode.com
// Worry levels are no longer divided by three after each item is inspected;
// you'll need to find another way to keep your worry levels manageable.
// Starting again from the initial state in your puzzle input,
// what is the level of monkey business after 10000 rounds?

function solve(input) {
    input = input.split('\n\n');
    let monkeys = [];
    let monkeysData = {};
    // prepare monkeys data
    for (let monkeyData of input) {
        let monkeyRows = monkeyData.split('\n');
        let matches = monkeyRows[0].match(/^Monkey (\d+):$/);
        let monkey = Number(matches[1]);
        // monkeys ids
        monkeys.push(monkey);
        // handle items
        let items = monkeyRows[1].match(/^Starting items: ((\d+(, )?)+)$/);
        items = items[1].split(', ').map(Number);
        // handle operation
        let operation = monkeyRows[2].match(/^Operation: new = (.+)$/);
        operation = operation[1];
        if (operation === 'old * old') {
            operation = (x) => x * x;
        } else {
            let opMatches = operation.match(/^old (\+|\*) (\d+)$/);
            let operand = opMatches[1];
            let num = Number(opMatches[2]);
            if (operand === '+') {
                operation = (x) => x + num;
            } else if (operand === '*') {
                operation = (x) => x * num;
            }
        }
        // handle test
        let test =  monkeyRows[3].match(/^Test: divisible by (\d+)$/);
        test = Number(test[1]);
        // handle if true
        let ifTrue =  monkeyRows[4].match(/^  If true: throw to monkey (\d+)$/);
        ifTrue = Number(ifTrue[1]);
        // handle if true
        let ifFalse =  monkeyRows[5].match(/^  If false: throw to monkey (\d+)$/);
        ifFalse = Number(ifFalse[1]);

        monkeysData[monkey] = {
            items: items,
            operation: operation,
            test: test,
            ifTrue: ifTrue,
            ifFalse: ifFalse,
            inspected: 0
        }
    }
    // console.log('monkeys: ', monkeys);
    // console.log('monkeysData: ', monkeysData);
    // 10000 rounds
    let rounds = 10000;

    // Chinese Remainder Theorem
    // we find factor for mod
    let factor = monkeys.map(m => monkeysData[m].test).reduce((a, b) => a * b, 1);

    for (let i = 0; i < rounds; i++) {
        for (let monkey of monkeys) {
            let monkeyInfo = monkeysData[monkey];
            while (monkeyInfo.items.length) {
                let item = monkeyInfo.items.shift();
                // use Chinese Remainder Theorem
                item = monkeyInfo.operation(item) % factor;
                if (item % monkeyInfo.test === 0) {
                    monkeysData[monkeyInfo.ifTrue].items.push(item);
                } else {
                    monkeysData[monkeyInfo.ifFalse].items.push(item);
                }
                monkeyInfo.inspected += 1;
            }
        }
    }
    // console.log('monkeysData: ', monkeysData);
    // console.log('inspected: ', monkeys.map(m => monkeysData[m].inspected));
    let sortedMonkeys = monkeys.sort((a, b) => monkeysData[b].inspected - monkeysData[a].inspected);
    // console.log('sortedMonkeys: ', sortedMonkeys);
    return monkeysData[sortedMonkeys[0]].inspected * monkeysData[sortedMonkeys[1]].inspected;
}

let input = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

console.log(solve(input)); // 2713310158

let input1 = `Monkey 0:
Starting items: 74, 64, 74, 63, 53
Operation: new = old * 7
Test: divisible by 5
  If true: throw to monkey 1
  If false: throw to monkey 6

Monkey 1:
Starting items: 69, 99, 95, 62
Operation: new = old * old
Test: divisible by 17
  If true: throw to monkey 2
  If false: throw to monkey 5

Monkey 2:
Starting items: 59, 81
Operation: new = old + 8
Test: divisible by 7
  If true: throw to monkey 4
  If false: throw to monkey 3

Monkey 3:
Starting items: 50, 67, 63, 57, 63, 83, 97
Operation: new = old + 4
Test: divisible by 13
  If true: throw to monkey 0
  If false: throw to monkey 7

Monkey 4:
Starting items: 61, 94, 85, 52, 81, 90, 94, 70
Operation: new = old + 3
Test: divisible by 19
  If true: throw to monkey 7
  If false: throw to monkey 3

Monkey 5:
Starting items: 69
Operation: new = old + 5
Test: divisible by 3
  If true: throw to monkey 4
  If false: throw to monkey 2

Monkey 6:
Starting items: 54, 55, 58
Operation: new = old + 7
Test: divisible by 11
  If true: throw to monkey 1
  If false: throw to monkey 5

Monkey 7:
Starting items: 79, 51, 83, 88, 93, 76
Operation: new = old * 3
Test: divisible by 2
  If true: throw to monkey 0
  If false: throw to monkey 6`;

console.log(solve(input1)); // 14314925001

