function jsonConverter(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName,
        hairColor
    };

    console.log(JSON.stringify(person));
}

jsonConverter(
    'George',
    'Jones',
    'Brown'
);
