function bitcoinMining(input) {

    let money = 0;
    let dayOfFirstPurchase;
    let bitcoinPrice = 11949.16;
    let bitcoins = 0;
    for (let i = 0; i < input.length; i++) {

        let day = i + 1;
        if (day % 3 === 0) {
            input[i] = input[i] * 0.7;
        }

        money += input[i] * 67.51;

        while (money >= bitcoinPrice) {
            bitcoins++;
            money -= bitcoinPrice;
            if (dayOfFirstPurchase === undefined) {
                dayOfFirstPurchase = day;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (dayOfFirstPurchase !== undefined) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);