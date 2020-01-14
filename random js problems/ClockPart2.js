function solve() {
    for (let hour = 0; hour <= 23; hour++) {
        for (let minutes = 0; minutes <= 59; minutes++) {
            let result = '';
            for (let seconds = 0; seconds <= 59; seconds++) {
                // console.log(`${hour} : ${minutes} : ${seconds}`);
                result += `${hour} : ${minutes} : ${seconds}\n`
            }
            console.log(result.slice(0, -1));
        }
    }
}

function solve2() {
    for (let hour = 0; hour <= 23; hour++) {
        for (let minutes = 0; minutes <= 59; minutes++) {
            console.log(`${hour} : ${minutes}`);
        }
    }
}

function solve3() {
    console.log(``);
}

solve();