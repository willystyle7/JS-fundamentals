function friendList(input) {
    let listsOfFriends = input.shift().split(', ');
    let blackListCount = 0;
    let lostListCount = 0;
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');
        let command = commands[0];
        if (command === 'Report') {
            break;
        }
        if (command === 'Blacklist') {
            let names = commands[1];
            if (listsOfFriends.includes(names)) {
                let index = listsOfFriends.indexOf(names);
                listsOfFriends.splice(index, 1, 'Blacklisted');
                console.log(`${names} was blacklisted.`);
                blackListCount++;
            } else {
                console.log(`${names} was not found.`);
            }
        }
        if (command === 'Error') {
            let nameIndex = listsOfFriends[Number(commands[1])];
            if (nameIndex !== 'Blacklisted' && nameIndex !== 'Lost') {
                let index = listsOfFriends.indexOf(nameIndex);
                listsOfFriends.splice(index, 1, 'Lost');
                console.log(`${nameIndex} was lost due to an error.`);
                lostListCount++;
            }
        }
        if (command === 'Change') {
            let index = Number(commands[1]);
            let newName = commands[2];
            let currentName = listsOfFriends[index];
            if (listsOfFriends.length > index && index >= 0) {
                listsOfFriends.splice(index, 1, newName);
                console.log(`${currentName} changed his username to ${newName}.`);
            }
        }
    }
    console.log(`Blacklisted names: ${blackListCount}`);
    console.log(`Lost names: ${lostListCount}`);
    console.log(listsOfFriends.join(' '));
}

function friendListMaintenance(input) {
    let friendList = input.shift().split(', ');
    let enter;
    while ((enter = input.shift()) !== 'Report') {
        let [command, arg1, arg2] = enter.split(' ');
        switch (command) {
            case 'Blacklist':
                let index = friendList.indexOf(arg1);
                if (index > -1) {
                    friendList.splice(index, 1, 'Blacklisted');
                    console.log(`${arg1} was blacklisted.`);
                } else {
                    console.log(`${arg1} was not found.`);
                }
                break;
            case 'Error':
                let name = friendList[arg1];
                if (name !== 'Blacklisted' && name !== 'Lost') {
                    friendList.splice(arg1, 1, 'Lost');
                    console.log(`${name} was lost due to an error.`);
                }
                break;
            case 'Change':
                if (arg1 >= 0 &&  arg1 <friendList.length) {
                    console.log(`${friendList[arg1]} changed his username to ${arg2}.`);
                    friendList.splice(arg1, 1, arg2);
                }
                break;
        }
    }
    let countOccurences = (arr, str) => arr.filter(el => el === str).length;
    console.log(`Blacklisted names: ${countOccurences(friendList, 'Blacklisted')}`);
    console.log(`Lost names: ${countOccurences(friendList, 'Lost')}`);
    console.log(friendList.join(' '));

    // function countOccurences(arr, str) {
    //     return arr.filter(el => el === str).length;
    // }
}

// friendList([
// 'Mike, John, Eddie',
// 'Blacklist Mike',
// 'Error 0',
// 'Error 1',
// 'Change 2 Mike123',
// 'Report'
// ])

friendList([
    'Mike, John, Eddie, William',
    'Error 3',
    'Error 3',
    'Change 0 Mike123',
    'Blacklist Eddie',
    'Report'
]);
