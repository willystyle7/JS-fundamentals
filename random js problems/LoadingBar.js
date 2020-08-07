function loadingBar2(number) {
    if (number == 10) {
        console.log(`${number}% [%.........]`);
        console.log(`Still loading...`);
    }
    else if (number == 20) {
        console.log(`${number}% [%%........]`);
        console.log(`Still loading...`);
    }
    else if (number == 30) {
        console.log(`${number}% [%%%.......]`);
        console.log(`Still loading...`);
    }
    else if (number == 40) {
        console.log(`${number}% [%%%%......]`);
        console.log(`Still loading...`);
    }
    else if (number == 50) {
        console.log(`${number}% [%%%%%.....]`);
        console.log(`Still loading...`);

    }
    else if (number == 60) {
        console.log(`${number}% [%%%%%%....]`);
        console.log(`Still loading...`);
    }
    else if (number == 70) {
        console.log(`${number}% [%%%%%%%...]`);
        console.log(`Still loading...`);
    }
    else if (number == 80) {
        console.log(`${number}% [%%%%%%%%..]`);
        console.log(`Still loading...`);

    }
    else if (number == 90) {
        console.log(`${number}% [%%%%%%%%%.]`);
        console.log(`Still loading...`);
    }
    else if (number == 100) {
        console.log(`${number}% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }
}

function loadingBar(number) {
    let procentages = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);
    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${procentages}]`);
    } else {
        console.log(`${number}% [${procentages}${dots}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);