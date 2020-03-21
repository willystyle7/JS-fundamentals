function solution(input) {
    let cakeSide1 = Number(input.shift());
    let cakeSide2 = Number(input.shift());
    let cakeSize = cakeSide1 * cakeSide2;
    let totalPieces = 0;
    let command = input.shift();
    while (command !== 'STOP') {
        let piecesCounter = Number(command);
        totalPieces += piecesCounter;
        if (totalPieces > cakeSize) {
            break;
        }
        command = input.shift();
    }
    if (totalPieces > cakeSize) {
        console.log(`No more cake left! You need ${totalPieces - cakeSize} pieces more.`);
    }
    if (command === 'STOP' && cakeSize > totalPieces) {
        console.log(`${cakeSize - totalPieces} pieces are left.`);
    }
}
