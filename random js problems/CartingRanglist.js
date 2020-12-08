function solve(input) {
    let currentName = input[0];
    let currentMinutes = Number(input[1]);
    let currentSeconds = Number(input[2]);
    let index = 0;

    let minTime = Number.MAX_SAFE_INTEGER;
    let bestMinutes = 0;
    let bestSeconds = 0;
    let winnerName = '';

    let gold = 0;
    let silver = 0;
    let bronze = 0;
    while (currentName !== 'Finish') {
        let totalTime = currentMinutes * 60 + currentSeconds;
        if (totalTime < 55) {
            gold++;
        }
        if (totalTime >= 55 && totalTime <= 85) {
            silver++;
        }
        if (totalTime > 85 && totalTime <= 120) {
            bronze++;
        }
        if (totalTime < minTime) {
            minTime = totalTime;
            winnerName = currentName;
            bestMinutes = currentMinutes;
            bestSeconds = currentSeconds;
        }
        index += 3;
        currentName = input[index];
        currentMinutes = Number(input[index + 1]);
        currentSeconds = Number(input[index + 2]);
    }
    console.log(`With ${bestMinutes} minutes and ${bestSeconds} seconds ${winnerName} is the winner of the day!`);
    console.log(`Today's prizes are ${gold} Gold ${silver} Silver and ${bronze} Bronze cards!`);
}

solve(['Nick','3','20','Jack','2','45','Sofia','4','10','Viktor','2','52','Finish']);
