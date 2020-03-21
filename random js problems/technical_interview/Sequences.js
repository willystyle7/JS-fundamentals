function sequences(input) {
    input = input.map(el => JSON.parse(el));
    input.forEach(el => el.sort((a, b) => b - a));
    let outputArr = [];
    for (let i = 0; i < input.length; i++) {
        let currentArray = input[i];
        let isUnique = true;
        for (let j = 0; j < outputArr.length; j++) {
            let nextArray = outputArr[j];
            if (nextArray.toString() === currentArray.toString()) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            outputArr.push(currentArray);
        }
    }
    outputArr.sort((a, b) => a.length - b.length);
    outputArr.forEach(el => console.log(`[${el.join(', ')}]`));
}

function sequences2(input) {
    input = input.map(el => JSON.parse(el));
    input.forEach(el => el.sort((a, b) => b - a));
    input = input.map(JSON.stringify);
    output = [...new Set(input)];
    output = output.map(el => JSON.parse(el));
    output.sort((a, b) => a.length - b.length);
    output.forEach(el => console.log(`[${el.join(', ')}]`));
}

function sequences3(input) {
    input = input
        .map(JSON.parse)
        .map(el => el.sort((a, b) => b - a))
        .map(JSON.stringify);
    [...new Set(input)]
        .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .forEach(el => console.log(`[${el.join(', ')}]`));
}

function sequences4(input) {
    [...new Set(input.map(JSON.parse).map(el => el.sort((a, b) => b - a)).map(JSON.stringify))].map(el => JSON.parse(el)).sort((a, b) => a.length - b.length).forEach(el => console.log(`[${el.join(', ')}]`));
}

(args) => [...new Set(args.map(JSON.parse).map(el => el.sort((a, b) => b - a)).map(JSON.stringify))].map(el => JSON.parse(el)).sort((a, b) => a.length - b.length).forEach(el => console.log(`[${el.join(', ')}]`));