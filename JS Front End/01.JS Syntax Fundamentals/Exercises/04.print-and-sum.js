function solve(start, end) {

    let output = [];
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
        output.push(i);
    }
    console.log(output.join(' '));
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);