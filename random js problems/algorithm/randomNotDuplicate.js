function generateRandomList(list) {
    var currList = list.slice();
    while (currList.length) {
        var rand = Math.floor(Math.random() * currList.length);
        console.log(currList[rand]);
        currList.splice(rand, 1);
    }
}

const generateRandomList2 = (list) => list.slice().sort((a, b) => 0.5 - Math.random()).forEach(el => console.log(el));

var list = ['a', 'b', 'c', 'd'];
generateRandomList(list);
console.log();
generateRandomList2(list);
