function sortAddressBook(input) {

    let addressBook = {};
    for (const inputElement of input) {
        let [name, address] = inputElement.split(':');
        addressBook[name] = address;
    }

    let sorted = Object.entries(addressBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (const element of sorted) {
        console.log(`${element[0]} -> ${element[1]}`);
    }
}

sortAddressBook(
    ['Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd']
);
