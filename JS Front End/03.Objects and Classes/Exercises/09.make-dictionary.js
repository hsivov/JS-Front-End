function makeDictionary(jsonStringArray) {

    let dictionary = {};
    for (const jsonString of jsonStringArray) {

        let object = JSON.parse(jsonString);
        for (const entry of Object.entries(object)) {
            let [term, description] = entry;
            dictionary[term] = description;
        }
    }

    let sorted = Object.entries(dictionary)
        .sort((entryA, entryB) => {
            let [keyA, _valueA] = entryA;
            let [keyB, _valueB] = entryB;

            return keyA.localeCompare(keyB);
        });

    sorted.forEach(([term, description]) => console.log(`Term: ${term} => Definition: ${description}`));
}

makeDictionary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);
