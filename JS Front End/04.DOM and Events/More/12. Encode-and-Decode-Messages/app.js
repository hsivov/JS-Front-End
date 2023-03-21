function encodeAndDecodeMessages() {
    const [encodeTextArea, decodeTextArea] = document.getElementsByTagName('textarea');
    const [encodeBtn, decodeBtn] = document.getElementsByTagName('button');

    encodeBtn.addEventListener('click', encodeHandler);
    decodeBtn.addEventListener('click', decodeHandler);

    function encodeHandler() {
        let textToEncode = encodeTextArea.value;
        let encoded = [];
        for (const symbol of textToEncode.split('')) {
            let ascii = symbol.charCodeAt(0);
            ascii += 1;
            encoded.push(String.fromCharCode(ascii));
        }
        encodeTextArea.value = '';
        decodeTextArea.value = encoded.join('');
    }

    function decodeHandler() {
        let textToDecode = decodeTextArea.value;
        let decoded = [];
        for (const symbol of textToDecode.split('')) {
            let ascii = symbol.charCodeAt(0);
            ascii -= 1;
            decoded.push(String.fromCharCode(ascii));
        }
        decodeTextArea.value = decoded.join('');
    }
}
