function sortingNumbers(numbers) {

    let sorted = numbers.sort((a, b) => a - b);

    let start = 0;
    let end = sorted.length - 1;
    let len = sorted.length / 2;
    let result = [];

    for (let i = 0; i < len; i++) {

        if (start <= len) {
            result.push(sorted[start]);
            start++;
        }
        if (end >= len) {
            result.push(sorted[end]);
            end--;
        }
    }
    return result;
}

console.log(
    sortingNumbers(
        [1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 11]
    )
);
