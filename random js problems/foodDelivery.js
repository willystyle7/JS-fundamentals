function foodDelivery ([chiken, fish, vegan]) {
    // console.log(args);
    let chikenPrice = 10.35;
    let fishPrice = 12.40;
    let veganPrice = 8.15;
    let total = chiken *chikenPrice + fish * fishPrice + vegan * veganPrice;
    total *= 1.2; // add deserts 20%
    total += 2.50; // add delivery
    console.log(`Total: ${total.toFixed(2)}`);
}

foodDelivery([ '2', '4', '3' ]);
