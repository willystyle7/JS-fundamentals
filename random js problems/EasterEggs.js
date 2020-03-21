function solve(input) {
    let numberEasterEggs = Number(input.shift());
    let colour = input.shift();
    let orangeCounter = 0;
    let blueCounter = 0;
    let greenCounter = 0;
    let redCounter = 0;
    let maxNumberEggs = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= numberEasterEggs; i++) {
        switch (colour) {
            case 'orange':
                orangeCounter++;
                colour = input.shift();
                break;
            case 'blue':
                blueCounter++;
                colour = input.shift();
                break;
            case 'green':
                greenCounter++;
                colour = input.shift();
                break;
            case 'red':
                redCounter++;
                colour = input.shift();
                break;
            default:
        }
    }
    let currentColour = 0;
    if (orangeCounter > maxNumberEggs) {
        maxNumberEggs = orangeCounter;
        currentColour = 'orange';
    }
    if (blueCounter > maxNumberEggs) {
        maxNumberEggs = blueCounter;
        currentColour = 'blue';
    }
    if (greenCounter > maxNumberEggs) {
        maxNumberEggs = greenCounter;
        currentColour = 'green';
    }
    if (redCounter > maxNumberEggs) {
        maxNumberEggs = redCounter;
        currentColour = 'red';
    }
    console.log(`Red eggs: ${redCounter}`);
    console.log(`Orange eggs: ${orangeCounter}`);
    console.log(`Blue eggs: ${blueCounter}`);
    console.log(`Green eggs: ${greenCounter}`);
    console.log(`Max eggs: ${maxNumberEggs} -> ${currentColour}`);
}
