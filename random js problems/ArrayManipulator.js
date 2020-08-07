function arrayManipulator(array, manipulations) {
    let actualManipulation = [];

    let index = 0;
    let element = 0;

    while (manipulations.length > 0) {
        actualManipulation = manipulations.shift().split(' ');
        switch (actualManipulation.shift()) {
            case 'add':
                index = Number(actualManipulation.shift());
                if (index < 0) {
                    index = 0;
                    element = Number(actualManipulation.shift());
                    array.splice(index, 0, element);
                } else {
                    element = Number(actualManipulation.shift());
                    array.splice(index, 0, element);
                }
                break;
            case 'addMany':
                index = Number(actualManipulation.shift());
                let many = 0;
                for (let i = 0; i < actualManipulation.length; i++) {
                    if (index < 0) {
                        index = 0;
                        many = Number(actualManipulation[i]);
                        array.splice(index + i, 0, many);
                    } else {
                        many = Number(actualManipulation[i]);
                        array.splice(index + i, 0, many);
                    }
                }
                break;
            case 'contains':
                element = Number(actualManipulation.shift());
                // if (array.indexOf(element) === -1) {
                //     console.log('-1');
                // } else {
                //     console.log('0');
                // }
                console.log(array.indexOf(element));
                break;
            case 'remove':
                index = Number(actualManipulation.shift());
                if (index < 0 || index > array.length - 1) {
                } else {
                    array.splice(index, 1);
                }
                break;
            case 'shift':
                index = Number(actualManipulation.shift());
                index = index % array.length;
                let arrayForShift = array.slice(index - 1);
                if (index < 0) {
                    index = 0;
                    array.splice(index, 0);
                    for (let i = arrayForShift.length - 1; i > 0; i--) {
                        array.unshift(arrayForShift[i]);
                        array.pop();
                    }
                } else {
                    array.splice(index, 0);
                    for (let i = arrayForShift.length - 1; i > 0; i--) {
                        array.unshift(arrayForShift[i]);
                        array.pop();
                    }
                }
                break;
            case 'sumPairs':
                let sumArr = [];
                let lastNumFromOddArr = 0;
                if (array.length % 2 !== 0) {
                    lastNumFromOddArr = Number(array.pop());
                    for (let i = 0; i < array.length; i += 2) {
                        sumArr.push(Number(array[i]) + Number(array[i + 1]));
                    }
                    sumArr.push(lastNumFromOddArr);
                } else {
                    for (let i = 0; i < array.length; i += 2) {
                        sumArr.push(Number(array[i]) + Number(array[i + 1]));
                    }
                }
                array = sumArr;

                break;
        }

        if (manipulations[0] === 'print') {
            break;
        }
    }
    console.log(`[ ${array.join(', ')} ]`);
}

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

function solve3(arr, commands) {
    let newArr = [];
    for (let el of commands) {
        let [command, index, element] = el.split(' ');
        switch (command) {
            case 'add':
                arr.splice(index, 0, +element);
                break;
            case 'addMany':
                let currentEl = 0;
                let removeFirst = el.split(' ');
                for (let i = removeFirst.length - 1; i >= 2; i--) {
                    currentEl = removeFirst[i];
                    arr.splice(index, 0, +currentEl);
                }
                break;
            case 'contains':
                // if (arr.indexOf(+index) !== -1) {
                //     console.log('0');
                // } else {
                //     console.log('-1');
                // }
                console.log(arr.indexOf(+index));
                break;
            case 'remove':
                arr.splice(index, 1);
                break;
            case 'shift':
                let position = +index;
                for (let i = 0; i < position; i++) {
                    let firstEl = arr.shift();
                    arr.push(firstEl);
                }
                break;
            case 'sumPairs':
                // if (arr.length % 2 === 0) {
                let els = arr.reduce(function (total, el, index) {
                    if (index % 2 === 0) {
                        total.push(+arr[index] + (+arr[index + 1] || 0));
                    }
                    return total;
                }, []);
                arr = els;
                // }
                break;
            case 'print':
                for (let el of arr) {
                    newArr.push(el);
                }
                break;
        }
    }
    // console.log(newArr);
    console.log('[ ' + newArr.join(', ') + ' ]');
}

function manipulator(manArr, commands) {
    for (let element of commands) {
        element = element.split(` `);
        let command = element.shift();
        if (command === `add`) {
            manArr.splice(element[0], 0, Number(element[1]));
        } else if (command === `addMany`) {
            let index1 = element.shift();
            element.reverse();
            element.forEach((num) => {
                manArr.splice(index1, 0, Number(num));
            });
        } else if (command === `contains`) {
            console.log(manArr.indexOf(Number(element[0])));
        } else if (command === `remove`) {
            manArr.splice(Number(element[0]), 1);
        } else if (command === `shift`) {
            for (let i = 0; i < element[0]; i++) {
                let firstEl = manArr.shift();
                manArr.push(firstEl);
            }
        } else if (command === `sumPairs`) {
            let newArr = [];
            for (let i = 0; i < manArr.length; i += 2) {
                let sum = manArr[i] + (manArr[i + 1] || 0);
                newArr.push(sum);
            }
            manArr = newArr;
        } else if (command === `print`) {
            break;
        }
    }
    console.log('[ ' + manArr.join(', ') + ' ]');
}
