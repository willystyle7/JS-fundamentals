function solve(input) {
    let n = Number(input.shift());
    let securityKey = Number(input.shift());
    let totalLoss = 0;
    // let token = Math.pow(securityKey, n);
    let token = BigInt(securityKey) ** BigInt(n);
    for (let i = 0; i < n; i++) {
        let visits = input.shift().split(' ');
        console.log(visits[0]);
        siteVisits = Number(visits[1]);
        siteCommercialIncomePerVisit = Number(visits[2]);
        // if (siteCommercialIncomePerVisit.toString().length > 17) {
        //     throw new Error();
        // }
        totalLoss +=  siteCommercialIncomePerVisit * siteVisits;
    }
    // if (totalLoss > 10000000000) {
    //     throw new Error();
    // }
    // if (totalLoss.toString().split('.')[1].length > 15) {
    //     throw new Error();
    // }
    console.log(`Total Loss: ${totalLoss.toFixed(5) + '0'.repeat(15)}`);
    console.log(`Security Token: ${token}`);
}