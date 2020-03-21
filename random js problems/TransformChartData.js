data = [
    { year: '2018', state: 'Phnom Penh', sales: 4463151205058 },
    { year: '2019', state: 'Phnom Penh', sales: 5396824601717 },
    { year: '2018', state: 'Kandal', sales: 8634646570614 },
    { year: '2019', state: 'Kandal', sales: 8756072606380 }
];

function transformChartData(data) {
    let obj = {};
    data.forEach(row => {
        if (!obj.hasOwnProperty(row.state)) {
            obj[row.state] = {
                state: row.state
            };
        }
        if (!obj[row.state].hasOwnProperty(row.year)) {
            obj[row.state][row.year] = 0;
        }
        obj[row.state][row.year] += row.sales;
    });
    return Object.values(obj);
}

console.log(transformChartData(data));
