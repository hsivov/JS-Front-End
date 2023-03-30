window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    const allHits = document.querySelector('#all-hits .all-hits-container');
    const savedContainer = document.querySelector('#saved-hits .saved-container');
    const totalLikesElement = document.querySelector('.likes > p');
    const form = document.querySelector('form');
    let totalLikes = 0;

    addBtn.addEventListener('click', addSongHandler);

    function addSongHandler(event) {
        event.preventDefault();

        const allInputsAreValid = Array.from(document.querySelectorAll('input'))
            .every((input) => input.value !== '');

        if (!allInputsAreValid) {
            return
        }

        const hitInfo = createElement('div', null, allHits, null, ['hits-info']);
        createElement('img', null, hitInfo, null, null, {src: "./static/img/img.png"});
        createElement('h2',`Genre: ${genre.value}`, hitInfo);
        createElement('h2',`Name: ${name.value}`, hitInfo);
        createElement('h2',`Author: ${author.value}`, hitInfo);
        createElement('h3',`Date: ${date.value}`, hitInfo);
        const saveBtn = createElement('button', 'Save song', hitInfo, null, ['save-btn']);
        const likeBtn = createElement('button', 'Like song', hitInfo, null, ['like-btn']);
        const delBtn = createElement('button', 'Delete', hitInfo, null, ['delete-btn']);

        saveBtn.addEventListener('click', saveSongHandler);
        likeBtn.addEventListener('click', likeSongHandler);
        delBtn.addEventListener('click', deleteSongHandler);

        form.reset();
    }

    function likeSongHandler() {
        totalLikes++;
        this.disabled = true;
        totalLikesElement.textContent = `Total Likes: ${totalLikes}`;
    }

    function saveSongHandler() {
        const songRef = this.parentNode;
        savedContainer.appendChild(songRef);

        const saveBtn = songRef.querySelector('.save-btn');
        const likeBtn = songRef.querySelector('.like-btn');

        saveBtn.remove();
        likeBtn.remove();
    }

    function deleteSongHandler() {
        this.parentNode.remove();
    }

    function createElement(tagName, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(tagName);

        if (content && tagName === 'input') {
            htmlElement.value = content;
        }

        if (content && tagName !== 'input') {
            htmlElement.textContent = content;
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        if (id) {
            htmlElement.id = id;
        }

        if (classes) {
            htmlElement.classList.add(...classes);
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        return htmlElement;
    }
}