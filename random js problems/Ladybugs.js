function solve(arr) {
    let fieldSize = arr.shift();
    let positions = arr.shift().split(` `).map(Number);
    let ladyBugsArray = [];

    for (let i = 0; i < fieldSize; i++) {
        ladyBugsArray.push(0);
    }
    for (let i = 0; i < fieldSize; i++) {
        let bugIndex = positions[i];
        if (bugIndex < fieldSize) {
            ladyBugsArray[bugIndex] = 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let [bugIndex, action, steps] = arr[i].split(' ');
        bugIndex = Number(bugIndex);
        steps = Number(steps);

        if (
            ladyBugsArray[bugIndex] !== 1 ||
            bugIndex < 0 ||
            bugIndex >= ladyBugsArray.length
        ) {
            continue;
        }
        if (steps < 0) {
            steps = Math.abs(steps);
            switch (action) {
                case 'left':
                    action = 'right';
                    break;
                case 'right':
                    action = 'left';
                    break;
            }
        }
        ladyBugsArray[bugIndex] = 0;
        let newBugIndex = 0;
        switch (action) {
            case 'left':
                newBugIndex = bugIndex - steps;
                if (ladyBugsArray[newBugIndex] === 1) {
                    newBugIndex -= steps;
                }
                break;
            case 'right':
                newBugIndex = bugIndex + steps;
                if (ladyBugsArray[newBugIndex] === 1) {
                    newBugIndex += steps;
                }
                break;
        }
        if (newBugIndex >= 0 && newBugIndex < ladyBugsArray.length) {
            ladyBugsArray[newBugIndex] = 1;
        }
    }
    console.log(ladyBugsArray.join(' '));
}
