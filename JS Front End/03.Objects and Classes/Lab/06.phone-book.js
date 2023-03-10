function phoneBookParser(input) {

    let phoneBook = {};
    for (const inputElement of input) {
        let name = inputElement.split(' ')[0];
        phoneBook[name] = inputElement.split(' ')[1];
    }

    for (const phoneBookKey in phoneBook) {
        console.log(`${phoneBookKey} -> ${phoneBook[phoneBookKey]}`);
    }
}

phoneBookParser(
    ['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344']
);
