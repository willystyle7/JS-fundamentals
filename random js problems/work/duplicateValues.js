let arr = [
    {
        value: '',
    },
    {
        value: '1',
    },
    {
        value: 'ab',
    },
    {
        value: '1',
    },
    {
        value: 'b',
    },
    {
        value: '',
    },
    {
        value: 'ab',
    },
];

function duplicateValues(arr) {
    let counters = {};
    for (const el of arr) {
        if (el.value) {
            if (!counters.hasOwnProperty(el.value)) {
                counters[el.value] = 0;
            }
            counters[el.value]++;
        }
    }
    return Object.keys(counters).filter(value => counters[value] > 1);
}

console.log(duplicateValues(arr)); // ➞ ["1", "ab"]
