// which date is 222 days after 01.01.2020 (YYYY-MM-DD)
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

let date = new Date('2020-01-01');
date = date.addDays(222);
console.log(date);