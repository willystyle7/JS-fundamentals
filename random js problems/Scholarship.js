function school(input) {
    let incomes = +input[0];

    let averageSuccess = +input[1];

    let minSalary = +input[2];

    let socialSchoolarship = 0.35 * minSalary;

    let schoolarship = averageSuccess * 25;

    let canGetSocialSchoolarship = incomes < minSalary && averageSuccess > 4.5;

    let canGetSchoolarship = averageSuccess >= 5.5;

    if (!canGetSchoolarship && !canGetSocialSchoolarship) {
        console.log('You cannot get a scholarship!');
    } else if (canGetSchoolarship) {
        if (!canGetSocialSchoolarship || (canGetSocialSchoolarship && schoolarship >= socialSchoolarship)) {
            console.log(`You get a scholarship for excellent results ${Math.floor(schoolarship)} BGN`);
            return;
        }
    } else if (canGetSocialSchoolarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialSchoolarship)} BGN`);
    }
}
