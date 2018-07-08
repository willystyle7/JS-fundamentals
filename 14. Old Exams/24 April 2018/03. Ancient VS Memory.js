function solve(arr) {
    arr = arr.join(' ').split(' ');
    let words = [];
    for (let i = 0; i < arr.length - 5; i++)
    {
        if (arr[i] == "32656" && arr[i + 1] == "19759" && arr[i + 2] == "32763" && arr[i + 3] == "0" && arr[i + 5] == "0")
        {
            let word = '';
            let wordLength = Number(arr[i + 4]);
            for (let j = i + 6; j <= i + 6 + wordLength; j++)
            {
                word += String.fromCharCode(Number(arr[j]));
            }
            words.push(word);
        }
    }
    console.log(words.join('\n'));
}

solve(['32656', '19759', '32763', '0', '5', '0', '80', '101', '115', '104', '111', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',
    '32656', '19759', '32763', '0', '7', '0', '83', '111', '102', '116', '117', '110', '105', '0', '0', '0', '0', '0', '0', '0', '0'
]);