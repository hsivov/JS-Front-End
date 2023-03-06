function orders(product, quantity) {

    let totalPrice = 0;
    switch (product) {
        case 'water':
            totalPrice += 1 * quantity;
            break;
        case 'coffee':
            totalPrice += quantity * 1.5;
            break;
        case 'coke':
            totalPrice += quantity * 1.4;
            break;
        case 'snacks':
            totalPrice += quantity * 2;
            break;
    }
    console.log(totalPrice.toFixed(2));
}

orders("water", 5);