function GladiatorExpenses(losts, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCount = Math.floor(losts / 2);
    let swordCount = Math.floor(losts / 3);
    let shieldCount = Math.floor(losts / 6);
    let armorCount = Math.floor(losts / 12);
    let expenses = helmetCount * helmetPrice + swordCount * swordPrice + shieldCount * shieldPrice + armorCount * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
};

GladiatorExpenses(7, 2, 3, 4, 5);
console.log();
GladiatorExpenses(23, 12.50, 21.50, 40, 200);