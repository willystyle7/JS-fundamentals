function treasureHunt(arr) {
    let items = arr.shift().split('|');
    for (iterator of arr) {
        if (iterator === 'Yohoho!') {
            break;
        }
        let command = iterator.split(' ');
        let firstWord = command.shift();
        if (firstWord === 'Loot') {
            for (let j = 0; j < command.length; j++) {
                let item = command[j];
                if (!items.includes(item)) {
                    items.unshift(item);
                }
            }
        } else if (firstWord === 'Drop') {
            let index = Number(command[0]);
            if (index >= 0 && index < items.length) {
                let el = items.splice(index, 1);
                items.push(el[0]);
            }
        } else if (firstWord === 'Steal') {
            let count = Number(command[0]);
            let stolenItems = items.splice(-count, count);
            console.log(stolenItems.join(', '));
        }
    }
    if (items.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        let sum = items.reduce((acc, el) => acc + el.length, 0);
        let average = (sum / items.length).toFixed(2);
        console.log(`Average treasure gain: ${average} pirate credits.`);
    }
}

treasureHunt(['Gold|Silver|Bronze|Medallion|Cup', 'Loot Wood Gold Coins', 'Loot Silver Pistol', 'Drop 3', 'Steal 3', 'Yohoho!']);
// treasureHunt(['Diamonds|Silver|Shotgun|Gold', 'Loot Silver Medals Coal', 'Drop -1', 'Drop 1', 'Steal 6', 'Yohoho!']);
