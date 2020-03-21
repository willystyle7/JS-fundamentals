function solve(input) {
    let games = Number(input.shift());
    let counterHearthstore = 0;
    let counterFornite = 0;
    let counterOverwatch = 0;
    let counterOthers = 0;
    for (let i = 0; i < games; i++) {
        let nameGame = input.shift();
        switch (nameGame) {
            case 'Hearthstone':
                counterHearthstore++;
                break;
            case 'Fornite':
                counterFornite++;
                break;
            case 'Overwatch':
                counterOverwatch++;
                break;
            default:
                counterOthers++;
                break;
        }
    }
    console.log(`Hearthstone - ${((counterHearthstore / games) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((counterFornite / games) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((counterOverwatch / games) * 100).toFixed(2)}%`);
    console.log(`Others - ${((counterOthers / games) * 100).toFixed(2)}%`);
}