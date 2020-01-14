// Postman puts 7 mail letters in random order in house box.
// Neigbours always return in same order, and only take upper letter if it is for him.
// When is more probable to finish the letters: on Wensday or Saturday?

function solve() {
    let probability = {};
    let permutations = findPermutations([1, 2, 3, 4, 5, 6, 7]);
    for (const permutation of permutations) {
        let count = findIncreasingSequences(permutation);
        if (!probability.hasOwnProperty(count)) {
            probability[count] = 0;
        }
        probability[count] += 1;
    }
    console.log(probability);
}

function findPermutations(arr) {
    let permutations = [];
    for (let i = 0; i < arr.length; i = i + 1) {
        let rest = findPermutations(arr.slice(0, i).concat(arr.slice(i + 1)));
        if (!rest.length) {
            permutations.push([arr[i]]);
        } else {
            for (let j = 0; j < rest.length; j = j + 1) {
                permutations.push([arr[i]].concat(rest[j]));
            }
        }
    }
    return permutations;
}

// iteractive
function findIncreasingSequences(arr) {
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            count++;
        }
    }
    return count;
}

// recursive !!! not working
function findIncreasingSequences2(arr) {
    if (arr.length === 1) return 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return 1 + findIncreasingSequences(arr.slice(i + 1));
        }
    }
}

// permutations one-liner
const perm = a => a.length ? a.reduce((r, v, i) => [ ...r, ...perm([ ...a.slice(0, i), ...a.slice(i + 1) ]).map(x => [ v, ...x ])], []) : [[]];

// console.log(findIncreasingSequences2([1, 2, 1, 3, 5, 6, 1, 0]));
// console.log(findIncreasingSequences2([1, 2, 4, 3, 5, 6, 2]));
// console.log(findIncreasingSequences2([1, 3]));
// console.log(findIncreasingSequences2([1]));
// console.log(findPermutations([1, 2, 3, 4, 5, 6, 7]))
// console.log(findPermutations([1, 2, 3, 4, 5, 6, 7]).length) // 5040 = 7!
solve();

