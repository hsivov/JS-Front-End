function objConverter(jsonStr) {
    let person = JSON.parse(jsonStr);

    let entries = Object.entries(person);

    entries.forEach(([key, value]) => console.log(`${key}: ${value}`));
}

objConverter(
    '{"name": "Peter", "age": 35, "town": "Plovdiv"}'
);
