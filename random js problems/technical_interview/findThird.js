function findThird1() {
    let n1 = parseInt(document.querySelectorAll('.findThirdInput')[0].value);
    let n2 = parseInt(document.querySelectorAll('.findThirdInput')[1].value);
    let n3 = parseInt(document.querySelectorAll('.findThirdInput')[2].value);
    document.getElementById('findThirdResult').innerHTML = findThird2([n1, n2, n3,]);
}

function findThird2(arr) {
    let one = [];
    let two = [];
    for (var i = 0; i <= arr.length - 1; i++) {
        let isOne = true;
        for (var j = i + 1; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                two.push(arr[i]);
                isOne = false;
                break;
            }
        }
        if (isOne && two.indexOf(arr[i]) < 0) {
            one.push(arr[i]);
        }
    }
    if (two.length == 1) {
        return 'The two equals: ' + two[0] + '<br>' + 'The third: ' + one[0];
    } else {
        return 'Not equals.';
    }
}

// <input type="number" class="findThirdInput" value="3">
// <input type="number" class="findThirdInput" value="3">
// <input type="number" class="findThirdInput" value="4">
// <button onclick="findThird1()">Try</button>
// <div id="findThirdResult"></div>

console.log(findThird2([1,1,7]));