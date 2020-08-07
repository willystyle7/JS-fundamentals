function backToThePast(input) {
    let heritage = Number(input.shift());
    let lastYear = Number(input.shift());
    let age = 18;
    for (i = 1800; i <= lastYear; i++) {
        if (i % 2 == 0) {
            heritage -= 12000;
            age++;
        } else {
            heritage -= 12000 + 50 * age;
            age++;
        }
    }
    if (heritage >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${heritage.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(heritage).toFixed(2)} dollars to survive.`);
        // console.log(`He will need ${Math.abs(heritage.toFixed(2)).toFixed(2)} dollars to survive.`);
    }
}
