window.addEventListener('load', solve);

function solve() {
    const inputDOMSelectors = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee')
    }

    const priorityIcons = {
        Feature: '&#8865;',
        ['Low Priority Bug']: '&#9737;',
        ['High Priority Bug']: '&#9888;'
    }

    const priorityClass = {
        Feature: "feature",
        ['Low Priority Bug']: 'low-priority',
        ['High Priority Bug']: 'high-priority'
    }

    let tasks = {};

    const inputTaskId = document.getElementById('task-id')
    const createTaskBtn = document.getElementById('create-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn');
    const taskSection = document.getElementById('tasks-section');
    const form = document.querySelector('form');
    const totalPointsEl = document.getElementById('total-sprint-points');
    let taskId = 0;
    let totalPoints = 0;

    createTaskBtn.addEventListener('click', createTaskHandler);
    deleteTaskBtn.addEventListener('click', confirmDeleteTask);

    function createTaskHandler(e) {
        e.preventDefault();

        let taskData = {
            title: inputDOMSelectors.title.value,
            description: inputDOMSelectors.description.value,
            label: inputDOMSelectors.label.value,
            points: Number(inputDOMSelectors.points.value),
            assignee: inputDOMSelectors.assignee.value
        }

        const allInputsAreValid = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        if (!allInputsAreValid) {
            return;
        }

        taskId++;

        const article = createElement('article', taskSection, null, `task-${taskId}`, ['task-card']);
        const labelDiv = document.createElement('div');
        labelDiv.classList.add('task-card-label');
        labelDiv.classList.add(priorityClass[inputDOMSelectors.label.value]);
        labelDiv.innerHTML = `${inputDOMSelectors.label.value} ${priorityIcons[inputDOMSelectors.label.value]}`;
        article.appendChild(labelDiv);

        createElement('h3', article, inputDOMSelectors.title.value, null, ['task-card-title']);
        createElement('p', article, inputDOMSelectors.description.value, null, ['task-card-description']);
        createElement('div', article, `Estimated at ${inputDOMSelectors.points.value} pts`, null, ['task-card-points']);
        createElement('div', article, `Assigned to: ${inputDOMSelectors.assignee.value}`, null, ['task-card-assignee']);
        const actions = createElement('div', article, null, null, ['task-card-actions']);
        const deleteBtn = createElement('button', actions, 'Delete');

        deleteBtn.addEventListener('click', deleteTaskHandler);

        totalPoints += Number(inputDOMSelectors.points.value);
        totalPointsEl.textContent = `Total Points ${totalPoints}pts`;
        tasks[article.id] = taskData;

        form.reset();

        function deleteTaskHandler() {
            const currentTaskId = this.parentNode.parentNode.id;
            const currentTask = tasks[currentTaskId];

            for (const key in currentTask) {
                inputDOMSelectors[key].value = currentTask[key];
            }

            inputTaskId.value = currentTaskId;
            deleteTaskBtn.disabled = false;
            createTaskBtn.disabled = true;

            Object.values(inputDOMSelectors).forEach((input) => {
                input.disabled = true;
            });
        }
    }

    function confirmDeleteTask() {
        const articleToRemove = document.getElementById(`${inputTaskId.value}`)

        articleToRemove.remove();
        totalPoints -= Number(inputDOMSelectors.points.value);
        totalPointsEl.textContent = `Total Points ${totalPoints}pts`;
        delete tasks[inputTaskId.value];

        form.reset();

        createTaskBtn.disabled = false;
        deleteTaskBtn.disabled = true;

        Object.values(inputDOMSelectors).forEach((input) => {
            input.disabled = false;
        });
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
