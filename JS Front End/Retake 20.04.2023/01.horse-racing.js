function horseRacing(input) {

    const commandParser = {
        Retake: retake,
        Rage: rage,
        Trouble: trouble,
        Miracle: miracle,
        Finish: finish
    }

    let positions = input.shift().split('|');

    for (const line of input) {
        const [command, ...arguments] = line.split(' ');

        commandParser[command](arguments);
        if (command === 'Finish') {
            break;
        }
    }

    function retake(arguments) {
        const [overtaking, overtaken] = arguments;

        if (positions.indexOf(overtaking) < positions.indexOf(overtaken)) {

            swapElements(positions, positions.indexOf(overtaken), positions.indexOf(overtaking));
            console.log(`${positions[positions.indexOf(overtaking)]} retakes ${positions[positions.indexOf(overtaken)]}.`);
        }
    }

    function trouble(arguments) {
        const [horse] = arguments;

        if (positions.indexOf(horse) > 0) {
            swapElements(positions, positions.indexOf(horse), positions.indexOf(horse) - 1);
            console.log(`Trouble for ${horse} - drops one position.`)
        }
    }

    function rage(arguments) {
        const [horse] = arguments;
        const indexOfHorse = positions.indexOf(horse);

        if (indexOfHorse === positions.length - 2) {
            positions.splice(indexOfHorse, 1);
            positions.push(horse);
            console.log(`${horse} rages 2 positions ahead.`);
        } else if (indexOfHorse < positions.length - 2) {
            positions.splice(indexOfHorse, 1);
            positions.splice(indexOfHorse + 2, 0, horse);
            console.log(`${horse} rages 2 positions ahead.`);
        } else {
            console.log(`${horse} rages 2 positions ahead.`);
        }
    }

    function miracle() {
        const lastHorse = positions.shift();

        positions.push(lastHorse);
        console.log(`What a miracle - ${lastHorse} becomes first.`)
    }

    function swapElements(array, index1, index2) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    function finish() {
        const output = positions.join('->');
        console.log(output);
        console.log(`The winner is: ${positions.pop()}`)
    }
}

horseRacing(['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish']);

