function solve(list) {

    let grocery = list.shift().split('!');

    let commandLine = list.shift();
    while (commandLine !== 'Go Shopping!') {
        const [command, product, newItem] = commandLine.split(' ');

        switch (command) {
            case 'Unnecessary':
                if (grocery.includes(product)) {
                    grocery.splice(grocery.indexOf(product), 1);
                }
                break;
            case 'Urgent':
                if (!grocery.includes(product)) {
                    grocery.unshift(product);
                }
                break;
            case 'Correct':
                if (grocery.includes(product)) {
                    grocery.splice(grocery.indexOf(product), 1, newItem);
                }
                break;
            case 'Rearrange':
                if (grocery.includes(product)) {
                    grocery.splice(grocery.indexOf(product), 1);
                    grocery.push(product);
                }
                break;
        }
        commandLine = list.shift()
    }
    console.log(grocery.join(', '));
}

solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]
);
