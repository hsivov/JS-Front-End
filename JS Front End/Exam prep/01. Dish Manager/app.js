window.addEventListener("load", solve);

function solve() {

    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        age: document.getElementById('age'),
        gender: document.getElementById('genderSelect'),
        task: document.getElementById('task')
    };

    const form = document.querySelector('form');
    const submitBtn = document.getElementById('form-btn');
    const inProgressList = document.getElementById('in-progress');
    const finished = document.getElementById('finished');
    const progressCount = document.getElementById('progress-count');
    let count = 0;
    let task = {};

    submitBtn.addEventListener('click', onSubmit);

    function onSubmit(e) {
        e.preventDefault();

        const li = createElement('li', inProgressList, null, null, ['each-line']);
        const article = createElement('article', li);
        createElement('h4', article, `${inputDOMSelectors.firstName.value} ${inputDOMSelectors.lastName.value}`);
        createElement('p', article, `${inputDOMSelectors.gender.value}, ${inputDOMSelectors.age.value}`);
        createElement('p', article, `Dish description: ${inputDOMSelectors.task.value}`);

        const editBtn = createElement('button', li, 'Edit', null, ['edit-btn']);
        const completeBtn = createElement('button', li, 'Mark as complete', null, ['complete-btn']);

        editBtn.addEventListener('click', editTaskHandler);
        completeBtn.addEventListener('click', finishTaskHandler);

        for (const key in inputDOMSelectors) {
            task[key] = inputDOMSelectors[key].value;
        }

        count++;
        progressCount.textContent = count.toString();
        form.reset();

        function editTaskHandler() {
            for (const taskKey in task) {
                inputDOMSelectors[taskKey].value = task[taskKey];
            }
            this.parentNode.remove();
            count--;
            progressCount.textContent = count.toString();
        }

        function finishTaskHandler() {
            const taskRef = this.parentNode;
            finished.appendChild(taskRef);

            taskRef.querySelector('.edit-btn').remove();
            taskRef.querySelector('.complete-btn').remove();

            count--;
            progressCount.textContent = count.toString();
            document.getElementById('clear-btn').addEventListener('click', clearCompletedList);
        }

        function clearCompletedList() {
            finished.innerHTML = '';
        }
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
