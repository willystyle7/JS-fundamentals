// getting array arr = [{id:[1],age:23},{id:[2],age:23},{id:[1,2],age:26}]
// wants to merge with the same key of age arr = [{id:[1,2],age:23},{id:[1,2],age:26}]

let arr = [
    { id: [1], age: 23 },
    { id: [2], age: 23 },
    { id: [1, 2], age: 26 },
];

const mergeArray = arr => {
    let ages = {};
    let result = [];
    arr.forEach(el => {
        if (!ages.hasOwnProperty(el.age)) {
            ages[el.age] = [];
        }
        ages[el.age] = ages[el.age].concat(el.id);
    });
    Object.keys(ages).forEach(age => {
        result.push({id: ages[age], age: age});
    });
    return result;
};

console.log(mergeArray(arr));