function calculateDates([birthDay]) {
    let days = 1000;
    let [dd, mm, yyyy] = birthDay.split('-');
    let date = new Date(`${yyyy}-${mm}-${dd} 12:00`);
    date.setDate(date.getDate() + days);
    let newDate = date.toISOString().split('T')[0];
    [yyyy, mm, dd] = newDate.split('-');
    console.log(`${dd}-${mm}-${yyyy}`);
}

calculateDates(['08-05-1995']);


