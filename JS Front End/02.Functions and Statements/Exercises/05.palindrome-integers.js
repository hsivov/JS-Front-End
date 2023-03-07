function palindromeIntegers(integers) {
    const isPalindrome = (int) => Number([...int.toString()].reverse().join('')) === int;

    return integers
        .map(isPalindrome)
        .join('\n');
}

console.log(
    palindromeIntegers([32, 2, 232, 1010])
);
