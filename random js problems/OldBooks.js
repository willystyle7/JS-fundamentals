function findingABook(input) {
    let book = input.shift();
    let numberOfBooks = Number(input.shift());
    let counter = 0;
    let newBookName;
    while (counter < numberOfBooks) {
        newBookName = input.shift();

        if (newBookName === book) {
            console.log(`You checked ${counter} books and found it.`);
            break;
        } else {
            counter++;
        }
    }
    if (newBookName !== book) {
        console.log(`The book you search is not here!
        You checked ${counter} books.`);
    }
}
