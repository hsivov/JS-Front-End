function create(words) {
    const content = document.getElementById('content');

    for (const word of words) {
        const div = document.createElement('div')
        const paragraph = document.createElement('p');
        paragraph.textContent = word;
        paragraph.style.display = 'none';
        div.addEventListener('click', clickHandler);
        div.appendChild(paragraph);
        content.appendChild(div);

        function clickHandler()
        {
           paragraph.style.display = 'block';
        }
    }
}