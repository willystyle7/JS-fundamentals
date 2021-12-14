// https://adventofcode.com
// Apply 40 steps of pair insertion to the polymer template and find the most and least common elements in the result.
// What do you get if you take the quantity of the most common element and subtract the quantity of the least common element?

function solve(polymer, arr) {
    function countChars(polymer) {
        let counter = {};
        for (let char of polymer) {
            if (!(char in counter)) {
                counter[char] = 0;
            }
            counter[char] += 1;
        }
        return counter;
    }

    // prepare input
    let steps = 40;
    arr = arr.split('\n').map(r => r.split(' -> '));
    polymer = polymer.split('');
    let pairs = {};
    for (let row of arr) {
        let [pair, char] = row;
        pairs[pair] = char;
    }

    // prepare start position
    let counter = countChars(polymer);
    let polymerPairs = {};
    for (let i = 0; i < polymer.length - 1; i++) {
        let pair = polymer[i] + polymer[i + 1];
        if (!(pair in polymerPairs)) {
            polymerPairs[pair] = 0;
        }
        polymerPairs[pair] += 1;
    }
    // console.log(counter)
    // console.log(polymerPairs)

    // make steps
    for (let step = 0; step < steps; step++) {
        let newPolymerPairs = {};
        for (let pair in polymerPairs) {
            let [char1, char2] = pair.split('');
            if (pair in pairs) {
                newChar = pairs[pair];
                let pair1 = char1 + newChar;
                let pair2 = newChar + char2;
                if (!(pair1 in  newPolymerPairs)) {
                    newPolymerPairs[pair1] = 0;
                }
                newPolymerPairs[pair1] += polymerPairs[pair];
                if (!(pair2 in  newPolymerPairs)) {
                    newPolymerPairs[pair2] = 0;
                }
                newPolymerPairs[pair2] += polymerPairs[pair];
                if (!(newChar in counter)) {
                    counter[newChar] = 0;
                }
                counter[newChar] += polymerPairs[pair];
            }
        }
        polymerPairs = newPolymerPairs;
    }
    // console.log(counter)
    // console.log(polymerPairs)

    // final result
    let sortedChars = Object.keys(counter).sort((a, b) => counter[a] - counter[b]);
    let diff = counter[sortedChars[sortedChars.length - 1]] - counter[sortedChars[0]];

    return diff;
}

let arr =
`CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;

let polymer = 'NNCB';

console.log(solve(polymer, arr)); // 2188189693529

let arr1 =
`FK -> O
BK -> B
PB -> N
VS -> P
OF -> H
KP -> K
PS -> K
OV -> N
FO -> H
KN -> P
HF -> K
BV -> N
OO -> B
KC -> V
CK -> H
BC -> P
VV -> S
NS -> C
SF -> O
BN -> V
NH -> N
VP -> F
KH -> S
BO -> N
VN -> K
BB -> H
CH -> H
HP -> O
KK -> O
CB -> S
VC -> P
FH -> B
SP -> C
NF -> O
HN -> N
PO -> P
PP -> C
SO -> F
FB -> B
SB -> B
SC -> B
HK -> O
BF -> V
OB -> B
NC -> V
HC -> F
KO -> C
NV -> C
HB -> H
FP -> S
OS -> O
HH -> K
OK -> B
OH -> C
NP -> V
SN -> H
SK -> B
HV -> F
VF -> P
CP -> H
FN -> H
FV -> B
CN -> H
OC -> O
KV -> P
CF -> B
OP -> B
FC -> O
PC -> B
CV -> S
PV -> H
VK -> N
SS -> C
HO -> F
VH -> C
NB -> S
NN -> F
FF -> K
CC -> H
SV -> H
CO -> K
BP -> O
SH -> H
KS -> K
FS -> F
PF -> S
BS -> H
VO -> H
NK -> F
PK -> B
KB -> K
CS -> C
VB -> V
BH -> O
KF -> N
HS -> H
PH -> K
ON -> H
PN -> K
NO -> S`;

let polymer1 = 'CBNBOKHVBONCPPBBCKVH';

console.log(solve(polymer1, arr1)); // 3760312702877

