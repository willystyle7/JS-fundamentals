function solution(input = []) {
    let str = '';
    let globalPattern = /[\D]+([0-9]+)/g;
    input = input.shift().match(globalPattern);
    if (input !== null) {
        let pattern = /([\D]+)([0-9]+)/;
        for (let i = 0; i < input.length; i++) {
            let result = input[i].match(pattern);
            let sub = result[1].toUpperCase();
            let count = result[2];
            str += sub.repeat(count);
        }
        let reduced = Array.from(new Set(str));
        console.log(`Unique symbols used: ${reduced.length}`);
        console.log(str);
    }
}

function solve(input) {
    let series = input[0].split(/[0-9]+/).filter((x) => x != '');
    let repeaters = input[0].split(/[^0-9]+/).filter((x) => x != '');
    let result = '';
    for (let i = 0; i < series.length; i++) {
        result += series[i].toUpperCase().repeat(repeaters[i]);
    }
    console.log(`Unique symbols used: ${[...new Set(result)].length}`);
    console.log(result);
}
