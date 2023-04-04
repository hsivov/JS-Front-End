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

        count++;
        progressCount.textContent = count.toString();
        form.reset();

        function editTaskHandler() {
            const currentTask = this.parentNode;

            const [firstName, lastName] = currentTask.querySelector('article > h4').textContent.split(' ');
            const [gender, age] = currentTask.querySelector('article > p:nth-child(2)').textContent.split(', ');
            const description = currentTask.querySelector('article > p:nth-child(3)').textContent.replace('Dish description: ', '');

            inputDOMSelectors.firstName.value = firstName;
            inputDOMSelectors.lastName.value = lastName;
            inputDOMSelectors.gender.value = gender;
            inputDOMSelectors.age.value = age;
            inputDOMSelectors.task.value = description;

            currentTask.remove();
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
