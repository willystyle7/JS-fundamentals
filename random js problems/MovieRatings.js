function solve(input) {
    let filmNums = Number(input.shift());
    let highestRating = Number.MIN_VALUE;
    let highName = ``;
    let lowestRating = Number.MAX_VALUE;
    let lowestName = ``;
    let averageRating = 0;
    for (i = 1; i <= filmNums; i++) {
        let name = input.shift();
        let rating = Number(input.shift());
        averageRating += rating;
        if (rating > highestRating) {
            highestRating = rating;
            highName = name;
        }
        if (rating < lowestRating) {
            lowestRating = rating;
            lowestName = name;
        }
    }
    console.log(`${highName} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestName} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(averageRating / filmNums).toFixed(1)}`);
}
