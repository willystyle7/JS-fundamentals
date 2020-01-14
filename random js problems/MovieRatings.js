function solve2(input) {
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

function solve (input) {
    let numbers = Number(input.shift())
    let movies = []
    let ratings = []
    let sum = 0

    for (let i = 0; i < numbers; i++) {
        let movieName = String(input.shift())
        let movieRating = Number(input.shift())
        sum += movieRating

        movies[i] = movieName
        ratings[i] = movieRating
    }
    let maxRating = ratings.indexOf(Math.max(...ratings))
    let minRating = ratings.indexOf(Math.min(...ratings))

    console.log(`${movies[maxRating]} is with highest rating: ${ratings[maxRating].toFixed(1)}`)
    console.log(`${movies[minRating]} is with lowest rating: ${ratings[minRating].toFixed(1)}`)
    console.log(`Average rating: ${(sum / ratings.length).toFixed(1)}`)
  }
  solve([5, 'A Star is Born', 7.8, 'Creed 2', 7.3, 'Mary Poppins', 7.2, 'Vice', 7.2, 'Captain Marvel', 7.1])
  // solve([3, 'Interstellar', 8.5, 'Dangal', 8.3, 'Green Book', 8.2])