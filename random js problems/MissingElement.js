// Write a JavaScript function to generate a random array of 500 integers (values of 1 – 500 inclusive).
// Randomly remove and discard an arbitrary element from this newly generated array.
// Write the code to efficiently determine the value of the missing element.

function generateArr() {
    let array = [];
    for (let i = 1; i <= 500; i++) {
        array.push(i);
    }
    // shuffle
    array.sort(() => Math.random() - 0.5);
    return array;
}

function removeRandomElement(arr) {
    let removedElement = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    console.log('removed: ', removedElement);
}

function findMissing(arr) {
    const bitmap = [];
    const missing = [];
    for (let i = 0; i < 500; i++) bitmap.push(0);
    for (let i = 0; i < arr.length; i++) {
        bitmap[arr[i] - 1] = 1;
    }
    for (let i = 0; i < 500; i++) {
        if (bitmap[i] === 0) {
            missing.push(i + 1);
        }
    }
    return missing;
}

let arr = generateArr();
removeRandomElement(arr);
removeRandomElement(arr);
removeRandomElement(arr);

let missingElements = findMissing(arr);
console.log(missingElements); // missingElements should be as removed elements
