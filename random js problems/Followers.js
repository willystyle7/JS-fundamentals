function followers(input) {
    let followers = {};
    for (const line of input) {
        if (line === 'Log out') break;
        let [command, username, count] = line.split(/:\s+/g);
        switch (command) {
            case 'New follower':
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                break;
            case 'Like':
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                followers[username].likes += +count;
                break;
            case 'Comment':
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                followers[username].comments++;
                break;
            case 'Blocked':
                if (!followers.hasOwnProperty(username)) {
                    console.log(`${username} doesn't exist.`);
                }
                delete followers[username];
                break;
            default:
                break;
        }
    }
    let sortedKeys = Object.keys(followers);
    sortedKeys.sort((a, b) => followers[b].likes - followers[a].likes || a.localeCompare(b));
    console.log(`${sortedKeys.length} followers`);
    for (const username of sortedKeys) {
        console.log(`${username}: ${followers[username].likes + followers[username].comments}`);
    }
}

function solve(input) {
    let followers = {};
    for (let i = 0; i < input.length; i++) {
        let [command, username, count] = input[i].split(': ');
        switch (command) {
            case 'New follower':
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                break;
            case 'Like':
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                followers[username].likes += +count;
                break;
            case 'Comment':
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                followers[username].comments++;
                break;
            case 'Blocked':
                if (followers.hasOwnProperty(username)) {
                    delete followers[username];
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
            case 'Log out':
                break;
        }
    }
    let sorted = Object.entries(followers).sort((a, b) => b[1].likes - a[1].likes || a[0].localeCompare(b[0]));
    console.log(`${sorted.length} followers`);
    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].likes + kvp[1].comments}`);
    }
}
