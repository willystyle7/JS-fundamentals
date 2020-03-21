function numberModification(modifiedNumber) {
    while (getAverage(modifiedNumber) < 5) {
        modifiedNumber += '9';
    }
    console.log(modifiedNumber);

    function getSum(number) {
        let numToString = number.toString();
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        return sum;
    }

    function getAverage(num) {
        return getSum(num) / num.toString().length;
    }
}

function numberModification2(number) {
    const getDigitsAverage = num => num.toString().split('').map(Number).reduce((a, b) => a + b, 0) / num.toString().length;
    while (getDigitsAverage(number) < 5) number += '9';
    console.log(number);
}

numberModification(101);