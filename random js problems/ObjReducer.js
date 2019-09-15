let ranges = {
    'Today': 'td',
    // 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 3 Days': '3d',
    'Last 7 Days': '7d',
    'Last 14 Days': '14d',
    'Last 30 Days': '30d',
    'This Month': 'tm',
    'Last Month': 'lm'
};

let rangesOptions = Object.keys(ranges).reduce(function (a, b) { a[b] = b; return a; }, {});

console.log('rangesOptions: ', rangesOptions);