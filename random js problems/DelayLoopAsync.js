// the problem - to delay some action in a loop

const fruits = [
    'Grapes',
    'Melon',
    'Watermelon',
    'Tangerine',
    'Lemon',
    'Banana',
    'Pineapple'
];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function listWithDelay(items, interval) {
    // loop through items
    for (let i = 0; i < items.length; i++) {
        await delay(interval);
        console.log(items[i]);
    }
}
listWithDelay(fruits, 2000);
