function solve(input) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let bestMovie = '';
    for (let n = 1; n <= 7; n++) {
        let currentMovie = input.shift();
        let sum = 0;
        if (currentMovie == 'STOP') {
            console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
            return;
        }
        let duljina = currentMovie.length;
        for (let k = 0; k < duljina; k++) {
            if (
                currentMovie.charCodeAt(k) >= 65 &&
                currentMovie.charCodeAt(k) <= 90
            ) {
                sum -= currentMovie.length;
            } else if (
                currentMovie.charCodeAt(k) >= 97 &&
                currentMovie.charCodeAt(k) <= 122
            ) {
                sum -= 2 * currentMovie.length;
            }
            sum += currentMovie.charCodeAt(k)
        }
        if (sum > maxSum) {
            maxSum = sum;
            bestMovie = currentMovie;
        }
    }
    console.log(`The limit is reached.`);
    console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
}
