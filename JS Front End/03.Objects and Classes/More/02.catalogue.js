function sortCatalogue(input) {

    let catalogue = {};
    for (const inputElement of input) {
        let key = inputElement.charAt(0);

        if (catalogue.hasOwnProperty(key)) {
            catalogue[key].push(inputElement);
        } else {
            catalogue[key] = [inputElement];
        }
    }

    let sorted = Object.keys(catalogue).sort().reduce((obj, k) => {
        obj[k] = catalogue[k];
        return obj;
    }, {});

    Object.entries(sorted)
        .forEach(([key, value]) => {
            console.log(key);
            value.sort((a, b) => a.localeCompare(b));
            value.forEach((v) => console.log(`  ${v.split(' : ')[0]}: ${v.split(' : ')[1]}`))
        })
}

sortCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);
