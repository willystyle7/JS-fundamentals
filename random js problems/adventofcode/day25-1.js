// reverse engineering - given card public key and door public key find encryption key for the handshake
// subject number is 7
// one loop is number multiplied by subject number and then remainder by division of 20201227

function solve(cardPK, doorPK) {
    let loopSizeCard = findLoopNumber(cardPK);
    let loopSizeDoor = findLoopNumber(doorPK);
    let encKeyCard = transform(doorPK, loopSizeCard);
    let encKeyDoor = transform(cardPK, loopSizeDoor);

    return `${loopSizeCard} - ${loopSizeDoor} ! ${encKeyCard} - ${encKeyDoor}`;

    function findLoopNumber(num) {
        loop = 1;
        currentNum = 7;
        while (currentNum != num) {
            currentNum *= 7;
            currentNum %= 20201227;
            loop++;
        }
        return loop;
    }

    function transform(subjectNum, loopSize) {
        result = 1;
        for (let i = 1; i <= loopSize; i++) {
            result *= subjectNum;
            result %= 20201227;
        }
        return result;
    }
}

let cardPK = 5764801;
let doorPK = 17807724;

console.log(solve(cardPK, doorPK)); // enctyption key: 14897079

cardPK = 11349501;
doorPK = 5107328;

console.log(solve(cardPK, doorPK)); // enctyption key: 7936032