function charactersInRange(firstChar, secondChar) {
    let charArray = [];
    let firstCharAscii = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let secondCharAscii = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    for (let ascii = firstCharAscii + 1; ascii < secondCharAscii; ascii++) {
        charArray.push(String.fromCharCode(ascii));
    }

    let string = charArray.join(' ');
    console.log(string);
}

charactersInRange('C', '#');