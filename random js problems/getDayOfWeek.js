// Function takes in a Date object and returns the day of the week in a text format.

function getWeekDay(date){
   //Create an array containing each day, starting with Sunday.
   var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   //Use the getDay() method to get the day.
   var day = date.getDay();
   //Return the element that corresponds to that index.
   return weekdays[day];
}

// let date = new Date();
let year = 2019;
let str = '5 October';
let dateStr = str.split(' ').reverse().join(' ') + ', ' + year;
let date = new Date(dateStr);

console.log(getWeekDay(date));