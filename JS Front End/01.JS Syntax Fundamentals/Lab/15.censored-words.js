function solve(text, word) {

    function asterisk(word) {
        let result = "";

        for (let i = 0; i < word.length; i++) {
            result += '*';
        }
        return result;
    }

    let censored = text.replace(word, asterisk(word));

    while (censored.includes(word)) {
        censored = censored.replace(word, asterisk(word));
    }
    console.log(censored);
}

solve('A small sentence with some small words', 'small');
solve('Find the hidden word', 'hidden');