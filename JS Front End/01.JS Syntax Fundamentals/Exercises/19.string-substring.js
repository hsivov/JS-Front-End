function substring(searchedWord, text) {

    let wordLowerCase = searchedWord.toLowerCase();
    let textLowerCase = text.toLowerCase();

    if (textLowerCase.includes(wordLowerCase)) {
        return wordLowerCase;
    }

    return `${wordLowerCase} not found!`
    // let words = text.split(' ');
    // let isFound = false;
    // for (const word of words) {
    //     if (word.toLowerCase() === searchedWord) {
    //         isFound = true;
    //         break;
    //     }
    // }
    // if (isFound) {
    //     console.log(searchedWord);
    // } else {
    //     console.log(`${searchedWord} not found!`)
    // }
}

console.log(
    substring(
        'javascript',
        'JavaScript is the'
    )
);
console.log(
    substring(
        'python',
        'JavaScript is the best programming language'
    )
);