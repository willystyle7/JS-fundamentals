function solve(arr) {
    let games = arr.shift().split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Play!') {
            break;
        }
        let [command, game] = arr[i].split(' ');
        if (command === 'Install') {
            if (games.includes(game)) {
                continue;
            } else {
                games.push(game);
            }
        }
        if (command === 'Uninstall') {
            if (games.includes(game)) {
                let index = games.indexOf(game);
                games.splice(index, 1);
            }
        }
        if (command === 'Update') {
            if (games.includes(game)) {
                let index = games.indexOf(game);
                let line = games.splice(index, 1);
                line = line.toString();
                games.push(line);
            }
        }
        if (command === 'Expansion') {
            game = game.split('-');
            if (games.includes(game[0])) {
                let index = games.indexOf(game[0]);
                games.splice(index + 1, 0, `${game[0]}:${game[1]}`);
            }
        }
    }
    console.log(games.join(' '));
}
