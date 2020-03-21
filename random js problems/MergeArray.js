// We have an array of objects arr, how can we merge the objects that have the same User value and end up with just:
// [{User: 1, 1:4, 3:4, 260:5, 3793:5},
// {User: 2, 3809:4, 4006:4, 3024:4}]
let arr = [
    { 1: 4, User: 1 },
    { 3: 4, User: 1 },
    { 260: 5, User: 1 },
    { 3793: 5, User: 1 },
    { 3809: 4, User: 2 },
    { 4006: 4, User: 2 },
    { 3024: 4, User: 2 }
];

function mergeArray(arr) {
    let mergedArray = [];
    arr.forEach(element => {
        let found = mergedArray.find(x => x.User === element.User);
        if (found) {
            Object.assign(found, element);
        } else {
            mergedArray.push(Object.assign({}, element));
        }
    });
    return mergedArray;
}

let mergeArray2 = arr => arr.reduce((acc, el) => {
    let found = acc.find(x => x.User === el.User);
    if (found) {
        Object.assign(found, el);
    } else {
        acc.push(Object.assign({}, el));
    }
    return acc;
}, []);

console.log(mergeArray(arr));
console.log(mergeArray2(arr));
