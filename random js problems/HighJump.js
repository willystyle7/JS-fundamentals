function solve(input) {
    let jumpHeightWanted = +input.shift();
    let jumpHeight = +input.shift();
    let firstJump = jumpHeightWanted - 30;
    let numJumps = 1;
    let failJumps = 0;
    while (true) {
        if (jumpHeight > firstJump) {
            if (firstJump >= jumpHeightWanted) {
                console.log(`Tihomir succeeded, he jumped over ${jumpHeightWanted}cm after ${numJumps} jumps.`);
                return;
            }
            firstJump += 5;
            failJumps = 0;
        } else {
            failJumps++;
            if (failJumps == 3) {
                console.log(`Tihomir failed at ${firstJump}cm after ${numJumps} jumps.`);
                return;
            }
        }
        jumpHeight = +input.shift();
        numJumps++;
    }
}
