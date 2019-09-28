function contactList(array) {
    let conList = array.shift().split(' ');
    let exportArr = [];
    while (true) {
        let command = array.shift().split(' ');
        let firstWord = command.shift();
        let secondWord = command.shift();
        if (firstWord === 'Add') {
            let num = command.shift();
            if (conList.includes(secondWord)) {
                if (num >= 0 && num <= conList.length) {
                    conList.splice(Number(num), 0, secondWord);
                }
            } else {
                conList.push(secondWord);
            }
        } else if (firstWord === 'Remove') {
            let num = Number(secondWord);
            if (num >= 0 && num <= conList.length) {
                conList.splice(num, 1);
            }
        } else if (firstWord === 'Export') {
            exportArr = conList.slice(
                Number(secondWord),
                Number(secondWord) + Number(command)
            );
            console.log(exportArr.join(' '));
        } else if (secondWord === 'Normal') {
            console.log(`Contacts: ${conList.join(' ')}`);
            break;
        } else if (secondWord === 'Reversed') {
            console.log(`Contacts: ${conList.reverse().join(' ')}`);
            break;
        }
    }
}
