function movingTarget(input) {
    let target = input.shift().split(` `).map(Number);
    let token = input.shift();
    while (token !== `End`) {
        let currentComand = token.split(` `);
        let comand = currentComand[0];
        let indexx = Number(currentComand[1]);
        let value = Number(currentComand[2]);
        if (comand === `Shoot`) {
            shoot(indexx, value);
        } else if (comand === `Add`) {
            add(indexx, value);
        } else if (comand === `Strike`) {
            strike(indexx, value);
        }
        token = input.shift();
    }
    console.log(target.join(`|`));

    function shoot(index, power) {
        if (index >= 0 && index < target.length) {
            let ind = target[index];
            ind = ind - power;
            if (ind <= 0) {
                target.splice(index, 1);
            } else {
                target[index] = ind;
            }
        }
    }

    function add(index, value) {
        if (index >= 0 && index < target.length) {
            target.splice(index, 0, value);
        } else {
            console.log(`Invalid placement!`);
        }
    }

    function strike(index, radius) {
        if (index - radius >= 0 && index + radius < target.length) {
            target.splice(index - radius, radius * 2 + 1);
        } else {
            console.log(`Strike missed!`);
        }
    }
}
