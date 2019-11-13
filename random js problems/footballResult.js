function footballResult(input) {
    let soccer1Result = input.shift();
    let soccer2Result = input.shift();
    let soccer3Result = input.shift();

    let wins = 0;
    let losts = 0;
    let drawns = 0;

    // FirstSoccer
    let soccer1Index0 = Number(soccer1Result.charAt(0));
    let soccer1Index2 = Number(soccer1Result.charAt(2));
    if (soccer1Index0 > soccer1Index2) {
        wins++;
    } else if (soccer1Index0 < soccer1Index2) {
        losts++;
    } else {
        drawns++;
    }
    // SecondSoccer
    let soccer2Index0 = Number(soccer2Result.charAt(0));
    let soccer2Index2 = Number(soccer2Result.charAt(2));
    if (soccer2Index0 > soccer2Index2) {
        wins++;
    } else if (soccer2Index0 < soccer2Index2) {
        losts++;
    } else {
        drawns++;
    }
    // ThirdSoccer
    let soccer3Index0 = Number(soccer3Result.charAt(0));
    let soccer3Index2 = Number(soccer3Result.charAt(2));
    if (soccer3Index0 > soccer3Index2) {
        wins++;
    } else if (soccer3Index0 < soccer3Index2) {
        losts++;
    } else {
        drawns++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losts} games.`);
    console.log(`Drawn games: ${drawns}`);
}

function footballResult(input) {
    let wins = 0;
    let losts = 0;
    let drawns = 0;
    for (const match of input) {
        let [goalsHome, goalsVisitor] = match.split(':').map(Number);
        if (goalsHome > goalsVisitor) {
            wins++;
        } else if (goalsHome < goalsVisitor) {
            losts++;
        } else {
            drawns++;
        }
    }
    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losts} games.`);
    console.log(`Drawn games: ${drawns}`);
}