function solve([arg1, arg2]) {
    if (arg2 == 'city') {
        if (arg1 > 50) {
            let speeding = arg1 - 50;
            logSpeeding(speeding);
        }
    } else if (arg2 == 'motorway') {
        if (arg1 > 130) {
            let speeding = arg1 - 130;
            logSpeeding(speeding);
        }
    } else if (arg2 == 'interstate') {
        if (arg1 > 90) {
            let speeding = arg1 - 90;
            logSpeeding(speeding);
        }
    } else if (arg2 == 'residential') {
        if (arg1 > 20) {
            let speeding = arg1 - 20;
            logSpeeding(speeding);
        }
    }

    function logSpeeding(speeding) {
        if (speeding <= 20) {
            console.log('speeding');
        } else if (speeding <= 40) {
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    }
}

function solve2([speed, area]) {
    let allowedSpeeds = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    if (speed > allowedSpeeds[area]) {
        let speeding = speed - allowedSpeeds[area];
        logSpeeding(speeding);
    }

    function logSpeeding(speeding) {
        if (speeding <= 20) {
            console.log('speeding');
        } else if (speeding <= 40) {
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    }
}


solve([40, 'city']);
