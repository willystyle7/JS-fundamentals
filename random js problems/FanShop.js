function solution([budget, numberOfItems, ...items]) {
    let priceOfItems = {
        'hoodie': 30,
        'keychain': 4,
        'T-shirt': 20,
        'flag': 15,
        'sticker': 1
    };
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        totalPrice += priceOfItems[items[i]];
    }
    if (budget >= totalPrice) {
        console.log(`You bought ${numberOfItems} items and left with ${budget - totalPrice} lv.`);
    } else {
        console.log(`Not enough money, you need ${totalPrice - budget} more lv.`);
    }
}
