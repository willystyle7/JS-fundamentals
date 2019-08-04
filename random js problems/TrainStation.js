function happyTrain(capacity, arrPassangers) {
    let train = [];
    let reminder = 0;
    // Пълним влакчето
    for (let i = 0; i < arrPassangers.length; i++) {
        let pass = arrPassangers[i] + reminder;
        if (pass <= capacity) {
            train[i] = pass;
            reminder = 0;
        } else {
            train[i] = capacity;
            reminder = pass - capacity;
        }
    }
    console.log(train);
    if (reminder === 0) {
        console.log('All passengers aboard');
    } else {
        console.log(`Could not fit ${reminder} passengers`);
    }
}
