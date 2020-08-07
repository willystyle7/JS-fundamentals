function solve(input) {
    let houses = input.shift().split('@').map(Number);
    let command = input.shift();
    let position = 0;
    while (command !== 'Love!') {
        let jump = Number(command.split(' ')[1]);
        // position = (position + jump) % houses.length;
        position = position + jump >= houses.length ? 0 : position + jump;
        if (houses[position] === 0) {
            console.log(`Place ${position} already had Valentine's day.`);
        } else {
            houses[position] -= 2;
            if (houses[position] === 0) {
                console.log(`Place ${position} has Valentine's day.`);
            }
        }
        command = input.shift();
    }
    console.log(`Cupid's last position was ${position}.`);
    let houseCount = houses.filter((house) => house !== 0).length;
    if (houseCount === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${houseCount} places.`);
    }
}

function heartDelivery(input) {
    let houses = input
        .shift()
        .split('@')
        .map((x) => {
            return (x = Number(x));
        });
    let jumpLength = 0;

    for (let line of input) {
        line = line.split(' ');
        if (line[0] !== 'Love!') {
            jump(Number(line[1]));
        } else {
            console.log(`Cupid's last position was ${jumpLength}.`);
            isEachZero()
                ? console.log(`Cupid has failed ${isEachZero()} places.`)
                : console.log(`Mission was successful.`);
            break;
        }
    }

    function jump(num) {
        jumpLength += num;
        if (jumpLength >= houses.length) {
            jumpLength = 0;
        }
        if (houses[jumpLength] == 0) {
            return console.log(
                `Place ${jumpLength} already had Valentine's day.`
            );
        } else {
            houses[jumpLength] -= 2;
            if (houses[jumpLength] == 0) {
                return console.log(`Place ${jumpLength} has Valentine's day.`);
            }
        }
    }

    function isEachZero() {
        let count = 0;
        for (const num of houses) {
            if (num > 0) {
                count++;
            }
        }
        return count;
    }
}

// solve(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
solve(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!']);
