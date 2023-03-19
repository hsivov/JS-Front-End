function solve() {

    const textArea = document.getElementById('input');
    const output = document.getElementById('output');
    let sentences = textArea.value.split('.');
    sentences.pop();

    while (sentences.length > 0) {
        let paragraphSentences = sentences.splice(0, 3)
            .map((p) => p.trimStart());
        const paragraph = document.createElement('p');
        paragraph.textContent = paragraphSentences.join('.') + '.';
        output.appendChild(paragraph);
    }
}
