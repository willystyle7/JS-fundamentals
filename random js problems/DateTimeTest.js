// let now = new Date();
// console.log(now);
// console.log(now.toISOString());
// // now.setDate(now.getDate() + 1));
// now.setHours(now.getHours() + 4);
// console.log(now);
// console.log(now.toISOString());

let sessionid = '1;2019-12-02T19:46:22.000Z';
let startTable = 'ilbs_service_active_hist_' + sessionid.split(/[;T]/)[1].split('-').join('');
let startDatetime = new Date(sessionid.split(';')[1]);
startDatetime.setHours(startDatetime.getHours() + 10);
let endTable = 'ilbs_service_active_hist_' + startDatetime.toISOString().split('T')[0].split('-').join('');
console.log(startDatetime);
console.log(startTable);
console.log(endTable);
