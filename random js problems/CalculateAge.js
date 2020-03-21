// Write a function calculateAge() that takes your birthday in the format dd/mm/yyyy and returns your age.
// Sample function input calculateAge('28/02/1992') Output-27

function calculateAge(birthday) {
    let [day, month, year] = birthday.split('/');
    let birthdayFormatted = `${month}-${day}T00:00:00.000Z`
    let now = new Date();
    let thisYear = now.getFullYear();
    let nowFormatted = now.toISOString().slice(5);
    let age = thisYear - year;
    if (birthdayFormatted > nowFormatted) {
        age--;
    }
    return age;
}

console.log(calculateAge('28/02/1992'));
console.log(calculateAge('08/02/1992'));
