function battleManager(arr) {
    let battles = {};
    let input = arr.shift();
    while (input !== "Results") {
        command = input.split(':');
        switch (command[0]) {
            case "Add":
                personName = command[1];
                health = parseInt(command[2]);
                energy = parseInt(command[3]);
                if (!battles.hasOwnProperty(personName)) {
                    battles[personName] = {};
                    battles[personName].health = 0;
                    battles[personName].energy = energy;
                }
                battles[personName].health += health;
                break;
            case "Delete":
                personName = command[1];
                if (personName == "All") {
                    battles = {};
                }
                if (battles.hasOwnProperty(personName)) {
                    delete battles[personName];
                }
                break;
            case "Attack":
                attackerName = command[1];
                defenderName = command[2];
                damage = parseInt(command[3]);
                if (battles.hasOwnProperty(attackerName) && battles.hasOwnProperty(defenderName)) {
                    battles[defenderName].health -= damage;
                    battles[attackerName].energy -= 1;
                    if (battles[defenderName].health <= 0) {
                        delete battles[defenderName];
                        console.log(`${defenderName} was disqualified!`);
                    }
                    if (battles[attackerName].energy <= 0) {
                        delete battles[attackerName];
                        console.log(`${attackerName} was disqualified!`);
                    }
                }
                break;
        }
        input = arr.shift();
    }
    count = Object.keys(battles).length;
    console.log(`People count: ${count}`);
    let sortedKeys = Object.keys(battles).sort((a, b) => battles[b].health - battles[a].health || a.localeCompare(b));
    sortedKeys.forEach(key => console.log(`${key} - ${battles[key].health} - ${battles[key].energy}`));
}

