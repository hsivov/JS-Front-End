function storeProvision(current, delivery) {

    let store = {};
    
    let combined = [...current, ...delivery];

    for (let i = 0; i < combined.length; i += 2) {
        let name = combined[i];
        let amount = Number(combined[i + 1]);

        if (store.hasOwnProperty(name)) {
            store[name] += amount;
        } else {
            store[name] = amount;
        }
    }
    
    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
