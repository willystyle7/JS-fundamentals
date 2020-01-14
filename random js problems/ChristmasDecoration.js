function christmasDecoration(input) {
    let budget = +input.shift();
    let money = 0;
    let nameSubject = input.shift();
    while (nameSubject != 'Stop') {
        for (let i = 0; i < nameSubject.length; i++) {
            money += nameSubject.charCodeAt(i);
        }
        if (money <= budget) {
            console.log('Item successfully purchased!');
        } else {
            console.log('Not enough money!');
            break;
        }
        nameSubject = input.shift();
    }
    if (money <= budget) {
        console.log(`Money left: ${budget - money}`);
    }
}
