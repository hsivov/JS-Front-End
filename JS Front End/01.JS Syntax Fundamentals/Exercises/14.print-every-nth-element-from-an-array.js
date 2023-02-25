function printNthElement(stringArr, step) {

    let result = [];
    for (let i = 0; i < stringArr.length; i += step) {
        result.push(stringArr[i]);
    }
    return result;
}

console.log(
    printNthElement(['5',
            '20',
            '31',
            '4',
            '20'],
        2
    )
);
