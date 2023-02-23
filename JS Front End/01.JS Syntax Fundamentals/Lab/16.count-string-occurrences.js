function solve(string, searchedWord) {
    let words = string.split(' ');
    let counter = 0;

    for (const word of words) {
        if (word === searchedWord) {
            counter += 1;
        }
    }
    console.log(counter);
}

solve('This is a word and it also is a sentence',
    'is');