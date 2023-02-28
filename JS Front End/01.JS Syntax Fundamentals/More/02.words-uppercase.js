function convertToUpperCase(str) {
    // Create an array to store the extracted words
    const words = [];

    // Use regular expression to match all the words in the string and convert them to uppercase
    str.replace(/\w+/g, function(match) {
        words.push(match.toUpperCase());
    });

    // Using split by regular expression

    //let words = str.split(/\W+[.,!?]?\s*/gm);

    // Join the extracted words in the array using ", " as the separator
    // Return the result
    return words.join(", ");
}

// Example usage
const str = "This is a sample string for testing.";
console.log(convertToUpperCase(str)); // Output: "THIS, IS, A, SAMPLE, STRING, FOR, TESTING"
