function solve(num) {

    let digitsToString = num.toString();
    let sum = 0;
    for (let i = 0; i < digitsToString.length; i++) {
        sum += Number(digitsToString[i]);
    }
    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);