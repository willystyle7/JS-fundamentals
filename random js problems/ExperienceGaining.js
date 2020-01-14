function solve2(arr) {
    arr = arr.map(Number);
    let neededPoints = arr.shift();
    let battles = arr.shift();
    let totalPoints = 0;
    for (let i = 0; i < battles; i++) {
        let num = i + 1;
        if (num % 3 === 0) {
            totalPoints += arr[i] + arr[i] * 0.15;
        } else if (num % 5 === 0) {
            totalPoints += arr[i] - arr[i] * 0.1;
        } else {
            totalPoints += arr[i];
        }
        if (totalPoints >= neededPoints) {
            console.log(`Player successfully collected his needed experience for ${num} battles.`);
            return;
        }
    }
    console.log(`Player was not able to collect the needed experience, ${(neededPoints - totalPoints).toFixed(2)} more needed.`);
}

function solve(arr) {
    arr = arr.map(Number);
    let neededPoints = arr.shift();
    let battles = arr.shift();
    let totalPoints = 0;
     let num = 0;
    for (let i = 0; i < battles; i++) {
        num++;
        if (num % 3 === 0) {
            totalPoints += (arr[i] + arr[i] * 0.15);
        } else if (num % 5 === 0) {
            totalPoints += (arr[i] - arr[i] * 0.1);
        } else {
            totalPoints += arr[i];
        }
        if (totalPoints >= neededPoints || totalPoints === neededPoints) {
            console.log(`Player successfully collected his needed experience for ${num} battles.`);
            return;
        }
    }
    console.log(`Player was not able to collect the needed experience, ${(neededPoints - totalPoints).toFixed(2)} more needed.`);
}
