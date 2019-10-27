function solve(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'print') break;
        let [command, ...elements] = commands[i].split(' ');
        switch (command) {
            case 'add':
                add(+elements[0], +elements[1]);
                break;
            case 'addMany':
                addMany(+elements.shift(), elements);
                break;
            case 'contains':
                contains(+elements[0]);
                break;
            case 'remove':
                remove(+elements[0]);
                break;
            case 'shift':
                shift(+elements[0]);
                break;
            case 'sumPairs':
                sumPairs();
                break;
        }
    }
    console.log('[ ' + arr.join(', ') + ' ]');

    function add(index, el) {
        arr.splice(index, 0, el);
    }
    function addMany(index, elements) {
        arr.splice(index, 0, ...elements);
    }
    function contains(num) {
        console.log(arr.indexOf(num));
    }
    function remove(index) {
        arr.splice(index, 1);
    }
    function shift(position) {
        position = position % arr.length;
        arr = arr.slice(position).concat(arr.slice(0, position));
    }
    function sumPairs() {
        let newArr = [];
        for (let i = 0; i < arr.length; i += 2) {
            newArr.push(+arr[i] + +(arr[i + 1] || 0));
        }
        arr = newArr;
    }
}

function solve2(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let splited = commands[i].split(' ');
        let command = splited[0];
        if (command === 'add') {
            add();
        } else if (command === 'addMany') {
            addMany();
        } else if (command === 'contains') {
            contains();
        } else if (command === 'remove') {
            remove();
        } else if (command === 'shift') {
            shift();
        } else if (command === 'sumPairs') {
            sumPairs();
        } else if (command === 'print') {
            print();
            break;
        }
        function add() {
            let index = parseInt(splited[1]);
            let element = parseInt(splited[2]);
            arr.splice(index, 0, element);
        }
        function addMany() {
            let index = parseInt(splited[1]);
            splited.shift();
            splited.shift();
            let elements = splited.map(Number);
            // for (let j = splited.length - 1; j >= 2; j--) {
            //     let element = parseInt(splited[j]);
            //     arr.splice(index, 0, element);
            // }
            arr.splice(index, 0, ...elements);
        }
        function contains() {
            let element = parseInt(splited[1]);
            console.log(arr.indexOf(element));
        }
        function remove() {
            let index = parseInt(splited[1]);
            arr.splice(index, 1);
        }
        function shift() {
            let position = parseInt(splited[1]);
            for (let a = 0; a < position; a++) {
                let first = arr.shift();
                arr.push(first);
            }
        }
        function sumPairs() {
            arr = arr
                .map((e, i, arr) =>
                    i < arr.length - 1
                        ? (arr[i] += +arr[i + 1])
                        : (arr[i] = +arr[i])
                )
                .filter((e, i) => i % 2 === 0);
        }
        function print() {
            // console.log(arr);
            console.log('[ ' + arr.join(', ') + ' ]');
        }
    }
}
