function simpleCalculator(firstNum, secondNum, operation) {

    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    let operationMap = {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    };

    return operationMap[operation](firstNum, secondNum);

    // switch (operation) {
    //     case 'add':
    //         return add(firstNum, secondNum);
    //     case 'subtract':
    //         return subtract(firstNum, secondNum);
    //     case 'multiply':
    //         return multiply(firstNum, secondNum);
    //     case 'divide':
    //         return divide(firstNum, secondNum);
    //     default:
    //         console.log('Invalid operation!');
    //         break;
    //}
}

console.log(
    simpleCalculator(50,13, 'subtract')
)