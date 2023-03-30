function piecesCatalog(input) {
    const numberOfPieces = input.shift();

    let catalog = {};
    for (let i = 0; i < numberOfPieces; i++) {
        const [piece, composer, key] = input[i].split('|');
        catalog[piece] = {composer, key};
    }

    for (let i = numberOfPieces; i < input.length; i++) {
        let [command, ...arguments] = input[i].split('|');

        if (command === 'Add') {
            const [piece, composer, key] = arguments;
            if (catalog.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                catalog[piece] = {composer, key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        } else if (command === 'Remove') {
            const piece = arguments[0];
            if (catalog.hasOwnProperty(piece)) {
                delete catalog[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            const [piece, newKey] = arguments;
            if (catalog.hasOwnProperty(piece)) {
                let currentPiece = catalog[piece];
                currentPiece.key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    Object.entries(catalog).forEach(([key, value]) => {
        console.log(`${key} -> Composer: ${value.composer}, Key: ${value['key']}`);
    })
}

piecesCatalog(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
);
