function solve(str) {
    let validNames = [];
    let pattern = /(\b[A-Z][a-z]+ [A-Z][a-z]+\b)/g;
    let validName;
    while (validName = pattern.exec(str)) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}

const solve2 = (str) => {
    console.log(str.toString().match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g).join(' '));
}

function solve3(str) {
    console.log(str.toString().match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g).join(' '));
}

// str => console.log(str.toString().match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g).join(' '))

solve('Ivan Bozveliev,ivan bozveliev,Ivan BozVeliev,ivanBozveliev,Test Ivanov');
solve2('Ivan Bozveliev,ivan bozveliev,Ivan BozVeliev,ivanBozveliev,Test Ivanov');
solve3('Ivan Bozveliev,ivan bozveliev,Ivan BozVeliev,ivanBozveliev,Test Ivanov');
