function GladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    let input = arr.shift();
    while (input !== "Fight!") {
        let token = input.split(' ');
        let command = token[0];
        let equipment = token[1];
        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    inventory.splice(inventory.indexOf(equipment), 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    inventory.splice(inventory.indexOf(equipment), 1);
                    inventory.push(equipment);
                }
                break;
            case 'Upgrade':
                let parts = equipment.split('-');
                equipment = parts[0];
                let upgrade = parts[1];
                if (inventory.includes(equipment)) {
                    inventory.splice(inventory.indexOf(equipment) + 1, 0, `${equipment}:${upgrade}`);
                }
                break;
        }
        input = arr.shift();
    }
    console.log(inventory.join(' '));
};

GladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'
]);
console.log();
GladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V',
    'Fight!'
]);