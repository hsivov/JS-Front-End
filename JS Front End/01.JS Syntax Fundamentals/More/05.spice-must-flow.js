function spice(startingYield) {

    let extract = 0;
    let days = 0;

    while (startingYield >= 100) {
        extract += startingYield - 26;
        startingYield -= 10;

        if (startingYield < 100) {
            extract -= 26;
        }
        days++;
    }

    console.log(days);
    console.log(extract);
}

spice(450);