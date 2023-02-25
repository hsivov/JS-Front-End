function solve(num) {
    let numAsString = num.toString();
    let isSame = true;
    let basis = numAsString.charAt(0);
    let sum = 0;

    for (let i = 1; i < numAsString.length; i++) {
        if (numAsString[i] !== basis) {
            isSame = false;
            break;
        }
    }

    for (const digit of numAsString) {
        sum += Number(digit);
    }
    console.log(isSame);
    console.log(sum);
}

solve(2222222);
solve(1234);