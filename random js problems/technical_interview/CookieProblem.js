// You are given an `array` representing how many cookies each person in a group has.
// You don't want anyone to start arguing over who has more cookies.
// You want each person to have the same amount of cookies, but you can't take away any cookies from anyone, instead you need to give each person extra cookies until they all have the same amount.
// You have to find out how many cookies each person has, and give them each additional cookies until they have as many cookies as the person with the most cookies.
// Return the total amount of additional cookies you needed give out.
// Example:
// cookieProblem (  [ 4, 5, 6 ] ) // it should returns 3

function cookieProblem(cookies) {
    let max = Math.max(...cookies);
    return cookies.reduce((acc, el) => {return acc + (max - el)}, 0);
}

console.log(cookieProblem([ 4, 5, 6 ]));