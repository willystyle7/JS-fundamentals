function charityCampaign(input) {
    let daysCount = Number(input.shift());
    let bakersCount = Number(input.shift());
    let cakesCount = Number(input.shift());
    let wafflesCount = Number(input.shift());
    let pancakesCount = Number(input.shift());

    let cakesSum = cakesCount * 45;
    let wafflesSum = wafflesCount * 5.8;
    let pancakesSum = pancakesCount * 3.2;
    let totalSum = (cakesSum + wafflesSum + pancakesSum) * bakersCount;
    let charitySum = totalSum * daysCount;

    let result = charitySum - charitySum * 0.125;
    console.log(result.toFixed(2));
}

charityCampaign([20, 8, 14, 30, 16]);
charityCampaign([131, 5, 9, 33, 46]);
