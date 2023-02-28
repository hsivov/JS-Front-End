function expenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmets = Math.floor(lostFights / 2);
    let brokenSwords = Math.floor(lostFights / 3);
    let brokenShields = Math.floor(lostFights / 6);
    let brokenArmor = Math.floor(lostFights / 12);

    let totalPrice = brokenHelmets * helmetPrice + brokenSwords * swordPrice + brokenShields * shieldPrice + brokenArmor * armorPrice;

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

expenses(
    23,
    12.50,
    21.50,
    40,
    200
)


