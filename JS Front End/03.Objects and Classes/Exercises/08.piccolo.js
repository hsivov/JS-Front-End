function piccolo(input) {

    let register = new Set;
    for (const inputElement of input) {
        let [direction, number] = inputElement.split(', ');

        if (direction === 'IN') {
            register.add(number);
        } else if (direction === 'OUT') {
            register.delete(number);
        }
    }

    let sorted = Array.from(register).sort((a, b) => a.localeCompare(b));

    sorted.length === 0 ? console.log('Parking Lot is Empty') : sorted.forEach((car) => console.log(car));
}

piccolo(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']
);
