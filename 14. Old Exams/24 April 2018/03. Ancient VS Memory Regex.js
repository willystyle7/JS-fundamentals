function solve(arr) {

    arr = arr.join(' ');
    let pattern = /32656 19759 32763 0 (\d+) 0/;
    let match;
    let words = [];
    while ((match = pattern.exec(arr)) != null) {
        let width = Number(match[1]);
        let innerPattern = new RegExp('32656 19759 32763 0 ' + width + ' 0 ((\\d+ ){' + width + '})');
        let innerMatch = innerPattern.exec(arr);
        let letters = innerMatch[1].split(' ');
        let word = '';
        for (let letter of letters) {
                word += String.fromCharCode(Number(letter));
             }        
        words.push(word);
        arr = arr.replace(innerMatch[0], '')
    }
    console.log(words.join('\n'));  
}

solve(['32656', '19759', '32763', '0', '5', '0', '80', '101', '115', '104', '111', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '32656', '19759', '32763', '0', '7', '0', '83', '111', '102', '116', '117', '110', '105', '0', '0', '0', '0', '0', '0', '0', '0'
]);