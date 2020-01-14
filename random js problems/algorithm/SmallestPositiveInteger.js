// Write a function in Javascript that, given an array Arr of N integers, returns the smallest positive integer (greater than 0) that does not occur in Arr. Complexity Object(N)

function solution2(arr) {
    let bitmap = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            bitmap[arr[i]] = 1;
        }
    }
    let index = 1;
    while (bitmap[index]) {
        index++;
    }
    return index;
}

const solution = arr => {
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
    return Object.values(missing)[0];
};

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([2, 3, 5, 1]));
console.log(solution([-1, -3]));
console.log(
    solution([
        1000000,
        -1,
        -2,
        0,
        -10,
        1,
        44,
        5,
        6,
        45,
        6,
        6,
        2,
        2,
        -2,
        0,
        -10,
        1,
        44,
        5,
        6,
        45,
        6,
        6,
        2,
        2,
        3,
        4,
        2,
        4,
        32,
        5,
        -5,
        66,
        7,
        8,
        9,
        6,
        6,
        356,
        356,
        345,
        231,
        13,
        53,
        367,
        2,
        848,
        453454,
        42,
        1,
        41,
        34,
        5,
        0,
        3,
        1,
        -4,
        -2,
        -5,
        -3,
        5,
        -4,
        -6,
        2,
        -4,
        9,
        93,
        -9
    ])
);
