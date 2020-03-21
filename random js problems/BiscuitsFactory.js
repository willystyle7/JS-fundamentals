function BiscuitFactory([bisPDayPworker, workers, competitor]) {
    let MountlyBis = 0;
    for (let i = 1; i <= 30; i++) {
        let dayly = bisPDayPworker * workers;
        if (i % 3 === 0) {
            dayly = Math.floor(dayly * 0.75);
        }
        MountlyBis += dayly;
    }
    console.log(`You have produced ${MountlyBis} biscuits for the past month.`);
    let diff = MountlyBis - competitor;
    let percent = (Math.abs(diff) / competitor) * 100;
    if (diff > 0) {
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
    }
}

