function solve(fruit, grams, price) {

    let kg = grams / 1000;
    let needMoney = kg * price;

    console.log(`I need $${needMoney.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);