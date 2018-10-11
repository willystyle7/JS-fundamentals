function followers(input) {
 
    let users = new Map();
 
    for (let i = 0; i < input.length; i++) {
        let data = input[i];
 
        if (data.startsWith("Welcome, ")) {
            data = data.split("Welcome, ")[1].trim();
 
            if (!users.has(data)) {
                users.set(data, [[], []]); //[following list,followers list]
            }
        } else {
            data = data.split(" followed ");
 
            let firstUser = data[0];
            let secondUser = data[1];
             
            if (users.has(firstUser)
                && users.has(secondUser)
                && firstUser !== secondUser) {
 
                let followers = users.get(firstUser)[0];
                let following = users.get(secondUser)[1];
 
                if (!following.includes(firstUser)
                    && !followers.includes(secondUser)) {
 
                    users.get(firstUser)[0].push(secondUser);
                    users.get(secondUser)[1].push(firstUser);
                }
            }
        }
    }
 
    console.log(`Total users registered: ${users.size}`);
 
    let orderedUsers = Array.from(users)
        .sort((a, b) => b[1][1].length - a[1][1].length
            || b[0].localeCompare(a[0]));
 
    for (let i = 1; i <= orderedUsers.length; i++) {
 
        let user = orderedUsers[i - 1];
 
        console.log(`${i}. ${user[0]} : ${user[1][0].length} following, ${user[1][1].length} followers`);
 
        if (i === 1) {
            let followers = Array.from(user[1][1]).sort();
 
            for (let follower of followers) {
                console.log(`*  ${follower}`);
            }
        }
    }
}
 
followers(["Welcome, EmilConrad",
    "Welcome, VenomTheDoctor",
    "Welcome, Saffrona",
    "Saffrona followed EmilConrad",
    "Saffrona followed VenomTheDoctor",
    "EmilConrad followed VenomTheDoctor",
    "VenomTheDoctor followed VenomTheDoctor",
    "Saffrona followed EmilConrad"]);