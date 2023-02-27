function revealWords(words, text) {

    let wordsArr = words.split(', ');

    for (const word of text.split(' ')) {
        if (word.startsWith('*')) {
            for (const wordsArrElement of wordsArr) {
                if (word.length === wordsArrElement.length) {
                    text = text.replace(word, wordsArrElement);
                }
            }
        }
    }
    console.log(text);
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)