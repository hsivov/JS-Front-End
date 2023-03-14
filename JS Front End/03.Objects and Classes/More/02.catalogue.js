function sortCatalogue(input) {

    let catalogue = [];
    for (const inputElement of input) {
        let [productName, productPrice] = inputElement.split(' : ');
        let product = {};
        product["product"] = productName;
        product["price"] = Number(productPrice);
        catalogue.push(product);
    }

    let sortedCatalogue = catalogue.sort((o1, o2) => o1.product.localeCompare(o2.product));

    let group = {};
    let groupCatalogue = [];
    for (const sortedCatalogueElement of sortedCatalogue) {
        let letter = sortedCatalogueElement.product.toUpperCase().charAt(0);
        group[letter] = sortedCatalogueElement;
        groupCatalogue.push(group);
    }
    console.log(groupCatalogue);
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