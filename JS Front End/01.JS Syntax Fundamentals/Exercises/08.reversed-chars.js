function solve(char1, char2, char3) {

    let output = char1 + char2 + char3;
    let result = [];

    for (const outputElement of output) {
        result.push(outputElement);
    }
    result.reverse();
    console.log(result.join(' '));
}

solve(
    'a',
    'b',
    'c'
);