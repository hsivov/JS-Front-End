window.addEventListener("load", solve);

function solve() {
    //Store all input elements
    const storyState = {
        firstName: null,
        lastName: null,
        age: null,
        title: null,
        genre: null,
        story: null
    }

    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        age: document.getElementById('age'),
        title: document.getElementById('story-title'),
        genre: document.getElementById('genre'),
        story: document.getElementById('story')
    }

    const otherDOMSelectors = {
        publishBtn: document.getElementById('form-btn'),
        previewList: document.getElementById('preview-list'),
        mainContainer: document.getElementById('main')
    }

    otherDOMSelectors.publishBtn.addEventListener('click', publishStoryHandler);

    function publishStoryHandler() {
        const allFieldsHaveValues = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');
        if (!allFieldsHaveValues) {
            return;
        }

        const {firstName, lastName, age, title, genre, story} = inputDOMSelectors;
        const storyInfo = createElement('li', null, otherDOMSelectors.previewList, null, ['story-info']);
        const article = createElement('article', null, storyInfo);
        createElement('h4', `Name: ${firstName.value} ${lastName.value}`, article);
        createElement('p', `Age: ${age.value}`, article);
        createElement('p', `Title: ${title.value}`, article);
        createElement('p', `Genre: ${genre.value}`, article);
        createElement('p', story.value, article);
        const saveBtn = createElement('button', 'Save Story', storyInfo, null, ['save-btn']);
        const editBtn = createElement('button', 'Edit Story', storyInfo, null, ['edit-btn']);
        const deleteBtn = createElement('button', 'Delete Story', storyInfo, null, ['delete-btn']);

        for (const key in inputDOMSelectors) {
            storyState[key] = inputDOMSelectors[key].value;
        }

        clearAllInputs();
        otherDOMSelectors.publishBtn.setAttribute('disabled', 'true');

        saveBtn.addEventListener('click', saveStoryHandler);
        editBtn.addEventListener('click', editStoryHandler);
        deleteBtn.addEventListener('click', deleteStoryHandler);
    }

    function saveStoryHandler () {
        otherDOMSelectors.mainContainer.innerHTML = '';
        createElement('h1', 'Your scary story is saved!', otherDOMSelectors.mainContainer);
    }
    function editStoryHandler() {
        for (const key in storyState) {
            inputDOMSelectors[key].value = storyState[key];
        }
        otherDOMSelectors.publishBtn.removeAttribute('disabled');
        this.parentElement.remove();
    }

    function deleteStoryHandler() {
        otherDOMSelectors.publishBtn.removeAttribute('disabled');
        this.parentElement.remove();
    }

    function clearAllInputs() {
        Object.values(inputDOMSelectors)
            .forEach((input) => input.value = '');
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
