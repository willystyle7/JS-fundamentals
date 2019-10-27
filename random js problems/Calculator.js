function calculator(firstNumber, simbolChar, secondNumber) {
    if (simbolChar === '+') {
        console.log((firstNumber + secondNumber).toFixed(2));
    } else if (simbolChar === '-') {
        console.log((firstNumber - secondNumber).toFixed(2));
    } else if (simbolChar === '*') {
        console.log((firstNumber * secondNumber).toFixed(2));
    } else if (simbolChar === '/') {
        console.log((firstNumber / secondNumber).toFixed(2));
    }
}

function calculator(firstNumber, simbolChar, secondNumber) {
	let result;
	switch (simbolChar) {
		case '+':
			result = firstNumber + secondNumber;
			break;
		case '-':
			result = firstNumber - secondNumber;
			break;
		case '*':
			result = firstNumber * secondNumber;
			break;
		case '/':
			result = firstNumber / secondNumber;
			break;
	}
	console.log(result.toFixed(2));
}

function calculator(firstNumber, simbolChar, secondNumber) {
    console.log(eval(firstNumber + simbolChar + secondNumber).toFixed(2));
}
