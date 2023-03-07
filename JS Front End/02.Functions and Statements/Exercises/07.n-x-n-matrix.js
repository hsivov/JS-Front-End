const matrix = (num) => new Array(num).fill(new Array(num).fill(num))
        .forEach((row) => console.log(row.join(' ')));


matrix(5);