var moment = require('moment');

const data = [
    {
        date: '21/01/2020',
        hourStart: '11:30:00',
        hourEnd: '11:39:59',
        quantity: 1
    },
    {
        date: '21/01/2020',
        hourStart: '11:50:00',
        hourEnd: '11:59:59',
        quantity: 20
    },
    {
        date: '21/01/2020',
        hourStart: '12:10:00',
        hourEnd: '12:19:59',
        quantity: 31
    }
];

function zeroFill(data) {
    let zeroFilled = [];
    let arr = JSON.parse(JSON.stringify(data));
    let format = 'DD/MM/YYYY HH:mm:ss';
    arr.sort((a, b) => moment(a.date + ' ' + a.hourStart, format) - moment(b.date + ' ' + b.hourStart, format));
    let startDate = moment(arr[0].date + ' ' + arr[0].hourStart, format);
    let endDate = moment(arr[arr.length - 1].date + ' ' + arr[arr.length - 1].hourStart, format);
    // console.log(startDate);
    // console.log(endDate);
    let currentDate = startDate;
    while (currentDate <= endDate) {
        let [date, hourStart] = currentDate.format(format).split(' ');
        let found = arr.find(x => x.date === date && x.hourStart === hourStart);
        if (found) {
            zeroFilled.push(Object.assign({}, found));
        } else {
            let hourEnd = moment(hourStart, 'HH:mm:ss').add(10, 'minutes').subtract(1, 'second').format('HH:mm:ss');
            zeroFilled.push({
                date: date,
                hourStart: hourStart,
                hourEnd: hourEnd,
                quantity: 0
            });
        }
        currentDate = moment(currentDate).add(10, 'minutes');
    }
    return zeroFilled;
}

console.log(zeroFill(data));
