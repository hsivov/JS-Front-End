function extractText() {
    const itemNodes = document.querySelectorAll('ul#items li');
    const textArea = document.getElementById('result');

    for (const node of itemNodes) {
        textArea.value += node.textContent + '\n';
    }
}
