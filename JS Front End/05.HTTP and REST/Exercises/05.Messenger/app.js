function attachEvents() {
    const textArea = document.getElementById('messages');
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const authorInput = document.getElementById('author');
    const contentInput = document.getElementById('content');
    const URL = 'http://localhost:3030/jsonstore/messenger';

    sendBtn.addEventListener('click', sendHandler);
    refreshBtn.addEventListener('click', refreshHandler);

    async function refreshHandler() {
        const response = await fetch(URL);
        const data = await response.json();
        const messages = [];
        textArea.innerHTML = '';

        Object.values(data).forEach((msg) => {
            const {author, content} = msg;
            messages.push(`${author}: ${content}`);
        });
        textArea.textContent = messages.join('\n');
        authorInput.value = '';
        contentInput.value = '';
    }

    async function sendHandler() {
        const author = authorInput.value;
        const content = contentInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({author, content})
        };

        await fetch(URL, httpHeaders);
    }
}

attachEvents();