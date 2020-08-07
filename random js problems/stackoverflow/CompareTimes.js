// we want result ['6:46 AM', '8:40 PM', '8:49 PM', '10:05 PM' ]

const timess = ['8:40 PM', '8:49 PM', '6:46 AM', '10:05 PM'];

timess.sort((a, b) => {
    return parseTime(a).localeCompare(parseTime(b));
});

console.log(timess);

function parseTime(time) {
    let [all, hours, minutes, meridiem] = time.match(/^(\d+):(\d+)\s+(AM|PM)$/);
    hours = +hours + (meridiem === 'PM' ? 12 : 0);
    minutes = +minutes;
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return `${hours}:${minutes}`;
}

// console.log(parseTime('00:00 PM'));
