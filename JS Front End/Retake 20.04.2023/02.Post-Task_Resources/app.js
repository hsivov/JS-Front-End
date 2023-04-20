window.addEventListener("load", solve);

function solve() {
    const inputDOMSelectors = {
        title: document.getElementById('task-title'),
        category: document.getElementById('task-category'),
        content: document.getElementById('task-content')
    }

    let task = {};

    const form = document.querySelector('form');
    const publishBtn = document.getElementById('publish-btn');

    publishBtn.addEventListener('click', publishHandler);

    function publishHandler(e) {
        e.preventDefault();

        const allInputsAreValid = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        if (!allInputsAreValid) {
            return;
        }

        const reviewList = document.getElementById('review-list');
        const li = createElement('li', reviewList, null, null, ['rpost']);
        const article = createElement('article', li);
        createElement('h4', article, inputDOMSelectors.title.value);
        createElement('p', article, `Category: ${inputDOMSelectors.category.value}`);
        createElement('p', article, `Content: ${inputDOMSelectors.content.value}`);
        const editBtn = createElement('button', li, 'Edit', null, ['action-btn', 'edit']);
        const postBtn = createElement('button', li, 'Post', null, ['action-btn', 'post']);

        editBtn.addEventListener('click', editTaskHandler);
        postBtn.addEventListener('click', postTaskHandler);

        for (const key in inputDOMSelectors) {
            task[key] = inputDOMSelectors[key].value;
        }

        form.reset();
    }

    function editTaskHandler() {
        for (const taskKey in task) {
            const currentTask = this.parentElement;
            inputDOMSelectors[taskKey].value = task[taskKey];
            currentTask.remove();
        }
    }

    function postTaskHandler() {
        const taskRef = this.parentElement;
        const publishedList = document.getElementById('published-list');

        publishedList.appendChild(taskRef);
        document.querySelector('.action-btn.edit').remove();
        document.querySelector('.action-btn.post').remove();
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