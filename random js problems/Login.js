function solve(str) {
    let i = 0;
    let user = str[0].toString();
    let count = 0;
    let password = '';
    for (let index = user.length - 1; index >= 0; index--) {
        password += user[index];
    }
    while (true) {
        if (str[i + 1] === password) {
            console.log(`User ${user} logged in.`);
            break;
        } else if (count >= 3) {
            console.log(`User ${user} blocked!`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }
        count++;
        i++;
    }
}

function solve2(input) {
    let user = input.shift();
    let password = user.split('').reverse().join('');
    let count = 0;
    while (true) {
        let enter = input.shift();
        if (enter === password) {
            console.log(`User ${user} logged in.`);
            break;
        } else if (count >= 3) {
            console.log(`User ${user} blocked!`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
            count++;
        }
    }
}

// solve(['momi','imom']);
// solve(['Acer','login','go','let me in','recA']);
// solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
// solve(['aca','login','go','let me in','recA']);