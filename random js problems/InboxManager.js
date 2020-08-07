function solve(arr) {
    let users = {};
    let line = arr.shift();
    while (line != 'Statistics') {
        let [command, name, text] = line.split('->');
        switch (command) {
            case 'Add':
                if (!users.hasOwnProperty(name)) {
                    users[name] = [];
                } else {
                    console.log(`${name} is already registered`);
                }
                break;
            case 'Send':
                users[name].push(text);
                break;
            case 'Delete':
                if (!users.hasOwnProperty(name)) {
                    console.log(`${name} not found!`);
                } else {
                    delete users[name];
                }
                break;
            default:
                break;
        }
        line = arr.shift();
    }
    let names = Object.keys(users);
    console.log(`Users count: ${names.length}`);
    names.sort((a, b) => users[b].length - users[a].length || a.localeCompare(b));
    for (const name of names) {
        console.log(name);
        for (const text of users[name]) {
            console.log(`- ${text}`);
        }
    }
}
