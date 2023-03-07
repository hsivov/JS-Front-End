function oddAndEvenSum(number) {
    let numberAsCharArray = [...number.toString()];

    const oddSum = numberAsCharArray
        .filter((char) => Number(char) % 2 !== 0)
        .reduce((prev, curr) => prev + Number(curr), 0);

    const evenSum = numberAsCharArray
        .filter((char) => Number(char) % 2 === 0)
        .reduce((prev, curr) => prev + Number(curr), 0);

    // let oddSum = 0;
    // let evenSum = 0;
    // while (number > 0) {
    //     let digit = number % 10;
    //     if (digit % 2 !== 0) {
    //         oddSum += digit;
    //     } else {
    //         evenSum += digit;
    //     }
    //     number = Math.trunc(number / 10);
    // }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);