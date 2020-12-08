function printPlannedStops(input) {
    let allLocations = input.shift();
    let line = input.shift();
    while (line !== 'Travel') {
        let [command, ...rest] = line.split(':');
        switch (command.trim()) {
            case 'Add Stop':
                let index = Number(rest[0]);
                let string = rest[1];
                if (index >= 0 && index <= allLocations.length) {
                    allLocations = allLocations.split('');
                    allLocations.splice(index, 0, string);
                    allLocations = allLocations.join('');
                }
                break;
            case 'Remove Stop':
                let startIndex = Number(rest[0]);
                let endIndex = Number(rest[1]);
                if (
                    startIndex >= 0 &&
                    startIndex < allLocations.length &&
                    endIndex >= 0 &&
                    endIndex < allLocations.length &&
                    startIndex <= endIndex
                ) {
                    allLocations = allLocations.split('');
                    allLocations.splice(startIndex, endIndex - startIndex + 1);
                    allLocations = allLocations.join('');
                }
                break;
            case 'Switch':
                let oldString = rest[0];
                let newString = rest[1];
                // if (oldString !== newString) {
                    // while (allLocations.includes(oldString)) {
                    //     allLocations = allLocations.replace(oldString, newString);
                    // }
                // }

                // String.prototype.replaceAll() still not implemented
                // allLocations = allLocations.replaceAll(oldString, newString);

                let offset = 0;
                while (allLocations.indexOf(oldString, offset) >= 0) {
                    allLocations = allLocations.replace(oldString, (oldString, offset) => newString);
                    offset = allLocations.indexOf(oldString, offset) + newString.length;
                }

                // regex decision (avoid injection)
                // let rgx = new RegExp(oldString, 'g');
                // allLocations = allLocations.replace(rgx, newString);
                break;
            default:
                break;
        }
        console.log(allLocations);
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${allLocations}`);
}
