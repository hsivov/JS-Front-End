function oddOccurrences(string) {

    const words = new Map();
    string =string.toLowerCase();

    for (const word of string.split(' ')) {
        if (words.has(word)) {
           words.set(word, words.get(word) + 1);
        } else {
            words.set(word, 1);
        }
    }

    let output = [];
    for (const [key, value] of words.entries()) {
        if (value % 2 !== 0) {
            output.push(key);
        }
    }
    console.log(output.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
