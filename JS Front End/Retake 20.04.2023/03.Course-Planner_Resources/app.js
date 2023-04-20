function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/tasks/';
    const coursesList = document.getElementById('list');
    const loadBtn = document.getElementById('load-course');
    const addCourseBtn = document.getElementById('add-course');
    const editCourseBtn = document.getElementById('edit-course');

    const inputDOMSelectors = {
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name'),
    }

    const tasks = {};
    let taskId = null;

    loadBtn.addEventListener('click', loadCourses);

    addCourseBtn.addEventListener('click', addCourseHandler);
    editCourseBtn.addEventListener('click', editCourseDataHandler);

    async function loadCourses() {
        const response = await fetch(URL);
        const data = await response.json();

        coursesList.innerHTML = '';
        Object.values(data).forEach((course) => {
           const {title, type, description, teacher, _id} = course;

           const container = createElement('div', coursesList, null, _id, ['container']);
           createElement('h2', container, title);
           createElement('h3', container, teacher);
           createElement('h3', container, type);
           createElement('h4', container, description);
           const editBtn = createElement('button', container, 'Edit Course', null, ['edit-btn']);
           const finishBtn = createElement('button', container, 'Finish Course', null, ['finish-btn']);

           editBtn.addEventListener('click', editCourseHandler);
           finishBtn.addEventListener('click', finishCourseHandler);

           tasks[_id] = {title, type, description, teacher};
        });
    }

    async function addCourseHandler(e) {
        e.preventDefault();

        await fetch(URL, {method: 'POST', body: JSON.stringify({
                title: inputDOMSelectors.title.value,
                type: inputDOMSelectors.type.value,
                description: inputDOMSelectors.description.value,
                teacher: inputDOMSelectors.teacher.value
            })});

        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = '';
        }

        await loadCourses();
    }

    function editCourseHandler() {
        const parent = this.parentElement
        taskId = parent.id;

        for (const key in tasks[taskId]) {
            inputDOMSelectors[key].value = tasks[taskId][key];
        }

        addCourseBtn.disabled = true;
        editCourseBtn.disabled = false;

        parent.remove();
    }

    async function finishCourseHandler() {
        const id = this.parentElement.id;

        await fetch(URL + id, {method: 'DELETE'});

        await loadCourses();
    }

    async function editCourseDataHandler(e) {
        e.preventDefault();

        await fetch(URL + taskId, {method: 'PUT', body: JSON.stringify({
                title: inputDOMSelectors.title.value,
                type: inputDOMSelectors.type.value,
                description: inputDOMSelectors.description.value,
                teacher: inputDOMSelectors.teacher.value,
                _id: taskId
            })});

        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = '';
        }

        await loadCourses();

        addCourseBtn.disabled = false;
        editCourseBtn.disabled = true;
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
