function modernTimes(text) {

    let words = text.split(' ')
        .filter((word) => word.startsWith('#') && word.length > 1 && checkIsValid(word));

    let result = [];
    for (const word of words) {
        result.push(word.slice(1))
    }

    console.log(result.join('\n'));

    function checkIsValid(myWord) {
        for (const symbol of myWord.slice(1)) {
            let asciiCode = symbol.toLowerCase().charCodeAt(0);
            if (asciiCode < 97 || asciiCode > 122) {
                return false;
            }
        }
        return true;
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');