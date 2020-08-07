// SRAK + SRAK = CIRK

function solve() {
    let decisions = [];
    for (let num = 1000; num <= 9999; num++) {
        let crak = num.toString();
        // while (crak.length < 4) {
        //     crak = '0' + crak;
        // }
        let cirk = (num + num).toString();
        if (Number(cirk) <= 9999 && crak[1] === cirk[2] && crak[3] === cirk[3] && [...new Set(crak.split(''))].length === crak.length
        && [...new Set(cirk.split(''))].length === cirk.length && [...new Set((cirk + crak).split(''))].length === 6) {
            decisions.push(crak);
        }
    }
    console.log(decisions.join(', '));
}

solve();