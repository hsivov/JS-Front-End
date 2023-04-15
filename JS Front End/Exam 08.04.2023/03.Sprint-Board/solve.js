function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBtn = document.getElementById('load-board-btn');
    const inputTitle = document.getElementById('title');
    const inputDescription = document.getElementById('description');
    const addBtn = document.getElementById('create-task-btn');
    const form = document.querySelector('form');
    const lists = Array.from(document.querySelectorAll('.task-list'));

    loadBtn.addEventListener('click', loadBoardHandler);
    addBtn.addEventListener('click', createTaskHandler);

    async function createTaskHandler(e) {
        e.preventDefault();

        const title = inputTitle.value;
        const description = inputDescription.value;
        const headers = {
            method: 'POST',
            body: JSON.stringify({title, description, status: 'ToDo'})
        }

        await fetch(URL, headers);
        form.reset();

        await loadBoardHandler();
    }

    async function loadBoardHandler() {
        const response = await fetch(URL);
        const data = await response.json();

        for (const list of lists) {
            list.innerHTML = '';
        }

        for (const dataKey in data) {
            const {title, description, status, _id} = data[dataKey];

            if (status === 'ToDo') {
                const article = document.getElementById('todo-section');
                createTask(article, title, description, _id, 'Move to In Progress');
            } else if (status === 'In Progress') {
                const article = document.getElementById('in-progress-section');
                createTask(article, title, description, _id, 'Move to Code Review');
            } else if (status === 'Code Review') {
                const article = document.getElementById('code-review-section');
                createTask(article, title, description, _id, 'Move to Done');
            } else if (status === 'Done') {
                const article = document.getElementById('done-section');
                createTask(article, title, description, _id, 'Close');
            }
        }
    }

    function createTask(article, title, description, id, btnContent) {
        const list = article.querySelector('ul');
        const li = createElement('li', list, null, id, ['task']);
        createElement('h3', li, title);
        createElement('p', li, description);
        const moveBtn = createElement('button', li, btnContent);

        moveBtn.addEventListener('click', moveTask);
    }

    async function moveTask() {
        const status = this.textContent;
        const parentId = this.parentElement.id;

        if (status === 'Move to In Progress') {
            await fetch(URL + parentId, {method: 'PATCH', body: JSON.stringify({status: 'In Progress'})});
        } else if (status === 'Move to Code Review') {
            await fetch(URL + parentId, {method: 'PATCH', body: JSON.stringify({status: 'Code Review'})});
        } else if (status === 'Move to Done') {
            await fetch(URL + parentId, {method: 'PATCH', body: JSON.stringify({status: 'Done'})});
        } else if (status === 'Close') {
            await fetch(URL + parentId, {method: 'DELETE'});
        }

        await loadBoardHandler();
    }

    function createElement(tagName, parentNode, content, id, classes, attributes) {
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

attachEvents();