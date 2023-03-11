function wordsTracker(input) {

    let tracker = {};
    let searchedWords = input.shift().split(' ');
    searchedWords.forEach((word) => tracker[word] = 0);

    for (const inputElement of input) {
        if (tracker.hasOwnProperty(inputElement)) {
            tracker[inputElement]++;
        }
    }

    let sorted = Object.entries(tracker)
        .sort((entryA, entryB) => {
            let [_wordA, countA] = entryA;
            let [_wordB, countB] = entryB;

            return countB - countA;
        });

    sorted.forEach(([word, count]) => console.log(`${word} - ${count}`));
}

wordsTracker(
    [
        'is the',
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
    ]
);
