function fancyBarcodes(input) {

    let count = input[0];
    for (let i = 1; i <= count; i++) {
        let barcode = input[i];
        if (barcode.match(/(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])\1/gm)) {
            let productGroup = '00';
            let digits = '';
            for (const symbol of barcode.split('')) {
                if (symbol.charCodeAt(0) >= 48 && symbol.charCodeAt(0) <= 57) {
                    digits += symbol;
                    productGroup = digits;
                }
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log('Invalid barcode');
        }
    }

}

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);

fancyBarcodes(["3",
    '@#FreshFisH@#',
    '@###Brea0D@###',
    '@##Che46sE@##']);