function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    let result = evenSum - oddSum;
    console.log(result);
}

solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);