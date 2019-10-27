function filterUniqueIdMaxPrice(arr) {
    let unique = [];
    arr.sort((a, b) => a.id - b.id || b.price - a.price);
    let uniqueIds = [...new Set(arr.map(x => x.id))];
    uniqueIds.forEach(id => {
        let firstUnique = arr.find(x => x.id === id);
        unique.push(firstUnique);
    });
    return unique;
}

let arr = [
    { id: 1, price: 7 },
    { id: 3, price: 1 },
    { id: 1, price: 9 },
    { id: 3, price: 0.5 }
];

console.log(filterUniqueIdMaxPrice(arr));