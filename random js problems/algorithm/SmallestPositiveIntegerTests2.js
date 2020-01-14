const solutionJordan = arr => {
    const hashTable = {};
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        hashTable[arr[i]] = arr[i];
    }
    for (let i = 1; i < 1000002; i++) {
        if (!hashTable[i]) {
            return i;
        }
    }
    return 1;
}

const solutionMarco = arr => {
    const { missing } = arr.reduce(
        (current, n) => {
            if (n > 0) {
                delete current.missing[n];
                current.found[n] = 1;
                const next = n + 1;
                if (!current.found[next]) {
                    current.missing[next] = next;
                }
            }
            return current;
        },
        {
            missing: { 1: 1 },
            found: {}
        }
    );
    return Object.values(missing)[0];
};

const solutionIlia = arr => {
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
    () => Math.floor(Math.random() * 10000000) + 1
);

const test = (solution, arr) => {
    console.time();
    console.log(solution(arr));
    console.timeEnd();
};

test(solutionJordan, randomNumbers);
test(solutionMarco, randomNumbers);
test(solutionIlia, randomNumbers);