function solve(count, groupType, day) {
    let price = 0;
    let totalPrice = 0;

    switch (groupType) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
            }
            totalPrice = price * count
            if (count >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.60;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
            }
            if (count >= 100) {
                count -= 10;
            }
            totalPrice = price * count;
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.50;
                    break;
            }
            totalPrice = price * count;
            if (count >= 10 && count <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, 'Students', 'Sunday')
solve(40, 'Regular', 'Saturday')