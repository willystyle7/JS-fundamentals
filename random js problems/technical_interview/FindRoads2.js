// Имате две успоредни магистрали А и В, като всяка от тях минава през n града, съответно A1, A2, .. An и B1, B2, .. Bn.
// По двойки има второстепенни пътища между градове А и В, само които са с еднакви индекси т.е има път А1В1, А2В2, ..АnBn (вижте картинката за яснота).
// Напишете програма, която при дадено n, да изброи и опише всички възможни пътища между А1 и Аn, като по даден път се минава само веднъж. Например за n=3:
// A1A2A3
// A1A2B2B3A3
// A1B1B2A2A3
// A1B1B2B3A3

// binary system method
function findRoads(n = 1) {
    if (n <= 1) return [];
    let roads = [];
    let end = Math.pow(2, n - 1) - 1;
    let len = n - 1;
    for (let i = 0; i <= end; i++) {
        roads.push(dec2bin(i, len));
    }

    return roads;
    // return roads.map(road => {
    //     return ['A1', ...road.split('').map((town, idx) => {
    //         let previousTpwn = town(idx - 1);
    //         // TODO
    //     })];
    // });

    function dec2bin(dec, length) {
        let out = '';
        while (length--) out += (dec >> length) & 1;
        return out;
    }
}

console.log(findRoads(3));
