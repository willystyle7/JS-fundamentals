// Имате две успоредни магистрали А и В, като всяка от тях минава през n града, съответно A1, A2, .. An и B1, B2, .. Bn.
// По двойки има второстепенни пътища между градове А и В, само които са с еднакви индекси т.е има път А1В1, А2В2, ..АnBn (вижте картинката за яснота).
// Напишете програма, която при дадено n, да изброи и опише всички възможни пътища между А1 и Аn, като по даден път се минава само веднъж. Например за n=3:
// A1A2A3
// A1A2B2B3A3
// A1B1B2A2A3
// A1B1B2B3A3

function findRoads(n = 1) {
    let roadsQueue = [[{ type: 'A', idx: 1 }]];
    let roadsFound = [];
    while (roadsQueue.length > 0) {
        let road = roadsQueue.shift();
        let lastTown = road[road.length - 1];
        if (lastTown.type === 'A') {
            if (lastTown.idx === n) {
                roadsFound.push(road);
            } else {
                let road1 = [...road, { type: 'A', idx: lastTown.idx + 1 }];
                roadsQueue.push(road1);
                let previousTown = road[road.length - 2];
                if (!previousTown || previousTown.type === 'A') {
                    let road2 = [...road, { type: 'B', idx: lastTown.idx }, { type: 'B', idx: lastTown.idx + 1 }];
                    roadsQueue.push(road2);
                }
            }
        } else if (lastTown.type === 'B') {
            let road1 = [...road, { type: 'A', idx: lastTown.idx }];
            roadsQueue.push(road1);
            if (lastTown.idx < n) {
                let road2 = [...road, { type: 'B', idx: lastTown.idx + 1 }];
                roadsQueue.push(road2);
            }
        }
    }
    return roadsFound;
}

let roadsFound = findRoads(4);
console.log('Roads count: ', roadsFound.length);
roadsFound.forEach((road) => {
    console.log(road.map((town) => `${town.type}${town.idx}`).join(', '));
});
