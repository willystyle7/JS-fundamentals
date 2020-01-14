/**
 * Takes an array A of N integers within the range
 * [-1,000,000 - 1,000,000] and returns the smallest positive
 * number not included in the array.
 *
 * Typical search/sort algorithms perform many comparisons which is
 * unnecessary overhead, as - in this case - only the smallest
 * number needs to be tracked (i.e. no sorting is necessary).
 *
 * Therefore, using a hash table is the most efficient approach,
 * with a worst time complexity of O(n).
 */
function solutionJordan(A) {
    // Construct the hash table into which we'll insert the given
    // array's numbers as unique key-value pairs.
    const hashTable = {};
    // Cache the length property to avoid the overhead of
    // re-accessing it on every iteration.
    const { length } = A;

    for (let i = 0; i < length; i++) {
        // Creates a hash table where each item's key corresponds to
        // one of the numbers from the array. The value for this key is // the same number, e.g. `{ 2: '2' }`.
        hashTable[A[i]] = A[i];
    }
    // In the case that every positive number up until 1,000,000 is // included in the array, our function should return 1,000,001. // Thus, our upper-bound is 1,000,002.
    for (let i = 1; i < 1000002; i++) {
        // The first number which does not exist in the hash table is // our answer.
        if (!hashTable[i]) {
            return i;
        }
    }
    // The default should be the lowest acceptable value (i.e. `1`).
    return 1;
}

const solutionMarco = arr => {
    const { missing } = arr.reduce(
        (current, n) => {
            // only consider positive numbers
            if (n > 0) {
                // If current number was considered to be missing we change that
                delete current.missing[n];
                current.found[n] = 1;

                // If the next larger integet has not been found yet
                // we mark it as missing
                const next = n + 1;
                if (!current.found[next]) {
                    current.missing[next] = next;
                }
            }
            return current;
        },
        {
            // we set 1 as missing by default
            missing: { 1: 1 },
            found: {}
        }
    );
    // Object.values will give the numbers in OverconstrainedError, because
    // numbers are used as keys and by default they are already in order.
    // So returning the first value will be the first missing number.
    // @ts-ignore
    return Object.values(missing)[0];
};

function solutionIlia(arr) {
    // let bitmap = arr.reduce((acc, cur) => acc[cur] = true && acc, {});
    let bitmap = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] > 0) {
            bitmap[arr[i]] = 1;
        }
    }
    let missing = 1;
    while (bitmap[missing]) missing++;
    return missing;
}

const randomNumbers = Array.from(
    { length: 1000000 },
    () => Math.floor(Math.random() * 1000000) + 1
);

const test = (solution, arr) => {
    console.time();
    console.log(solution(arr));
    console.timeEnd();
};

test(solutionJordan, randomNumbers);
test(solutionMarco, randomNumbers);
test(solutionIlia, randomNumbers);
