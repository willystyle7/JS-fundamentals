function solve(input) {
    let finalBand = input.pop();
    input.pop();
    let concert = {};
    let totalTime = 0;
    input.forEach((line) => {
        let [command, band, other] = line.split('; ');
        if (command === 'Play') {
            let time = +other;
            if (!concert.hasOwnProperty(band)) {
                concert[band] = {};
                concert[band]['time'] = 0;
                concert[band]['members'] = [];
            }
            concert[band]['time'] += time;
            totalTime += time;
        } else {
            let members = other.split(', ');
            if (!concert.hasOwnProperty(band)) {
                concert[band] = {};
                concert[band]['time'] = 0;
                concert[band]['members'] = [];
            }
            let oldMembers = concert[band]['members'];
            let newMembers = [...oldMembers, ...members];
            let set = new Set(newMembers);
            concert[band]['members'] = Array.from(set);
        }
    });
    console.log(`Total time: ${totalTime}`);
    let concertArr = Object.entries(concert);
    let sorted = concertArr.sort((a, b) => b[1]['time'] - a[1]['time'] || a[0].localeCompare(b[0]));
    sorted.forEach((line) => {
        console.log(`${line[0]} -> ${line[1]['time']}`);
    });
    console.log(finalBand);
    let final = concert[finalBand]['members'];
    final.forEach((line) => {
        console.log(`=> ${line}`);
    });
}

solve([
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones',
]);

function y(params = []) {
    params = params.slice(0, params.indexOf('start of concert'));
    let bands = {};
    let playtime = {};
    let totalPlaytime = 0;
    for (const line of params) {
        let [command, bandName, value] = line.split('; ');
        switch (command) {
            case 'Add':
                let members = value.split(', ');
                if (!bands.hasOwnProperty(bandName)) {
                    bands[bandName] = [];
                    for (let i = 0; i < members.length; i++) {
                        if (!bands[bandName].includes(members[i])) {
                            bands[bandName].push(members[i]);
                        }
                    }
                } else {
                    for (let index = 0; index < members.length; index++) {
                        if (!bands[bandName].includes(members[index])) {
                            bands[bandName].push(members[index]);
                        }
                    }
                }
                break;
            default:
                let timeOnStage = +value;
                totalPlaytime += timeOnStage;
                if (!playtime.hasOwnProperty(bandName)) {
                    playtime[bandName] = 0;
                    playtime[bandName] += timeOnStage;
                }
                break;
        }
    }
    console.log(`Total time: ${totalPlaytime}`);
    let playtimeArr = Object.entries(playtime)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((member) => {
            console.log(`${member[0]} -> ${member[1]}`);
        });
    let bandMembers = Object.entries(bands).sort(
        (a, b) => b[0].length - a[0].length
    );
    let topBand = bandMembers[0];
    console.log(topBand.shift());
    topBand[0].forEach((member) => {
        console.log(`=> ${member}`);
    });
}
