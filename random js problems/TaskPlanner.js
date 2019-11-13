function tasksPlanner(arr) {
    let tasks = arr.shift().split(' ').map(Number);
    for (let iterator of arr) {
        if (iterator === 'End') {
            break;
        }
        let [command, index, time] = iterator.split(' ');
        if (command === 'Complete') {
            complete(+index);
        }
        if (command === 'Change') {
            change(+index, +time);
        }
        if (command === 'Drop') {
            drop(+index);
        }
        if (command === 'Count') {
            if (index === 'Completed') {
                console.log(tasks.filter(t => t === 0).length);
            } else if (index === 'Incomplete') {
                console.log(tasks.filter(t => t > 0).length);
            } else if (index === 'Dropped') {
                console.log(tasks.filter(t => t < 0).length);
            }
        }
    }
    function complete(index) {
        if (index >= 0 && index < tasks.length) {
            tasks[index] = 0;
        }
    }
    function change(index, time) {
        if (index >= 0 && index < tasks.length) {
            tasks[index] = time;
        }
    }
    function drop(index) {
        if (index >= 0 && index < tasks.length) {
            tasks[index] = -1;
        }
    }
    console.log(tasks.filter(t => t > 0).join(' '));
}

tasksPlanner([
    '1 -1 2 3 4 5 ',
    'Complete 4',
    'Change 0 4',
    'Drop 3',
    'Count Dropped',
    'End'
]);
