function solve(params) {
    let events = {};
    let eventNames = [];
    for (let param of params) {
        // if (param.indexOf('  ') >= 0) throw new Error();
        if (param === 'Time for Code') break;
        if (param.indexOf('#') < 0) continue;
        param = param.replace(/\s+/g, ' ');
        let [id, eventName, ...participants] = param.split(' ');
        if (!events.hasOwnProperty(id) && !eventNames.includes(eventName)) {
            eventNames.push(eventName);
            events[id] = {
                eventName: eventName,
                participants: [...new Set(participants)]
            };
            continue;
        }
        if (events.hasOwnProperty(id) && events[id].eventName === eventName) {
            participants.forEach(participant => {
                if (!events[id].participants.includes(participant)) {
                    events[id].participants.push(participant);
                }
            });
        }
    }
    Object.entries(events)
        .sort((a, b) => b[1].participants.length - a[1].participants.length)
        .forEach(event => {
            console.log(
                `${event[1].eventName.slice(1)} - ${
                    event[1].participants.length
                }`
            );
            [...new Set(event[1].participants)]
                .sort((a, b) => a.localeCompare(b))
                .forEach(participant => console.log(participant));
        });
}

solve(['1 #Beers @roli @trophon @alice',
'2 #GameDevMeetup @sino @valyo',
'3 #Karaoke @nakov @royal @ROYAL @ivo',
'Time for Code']);