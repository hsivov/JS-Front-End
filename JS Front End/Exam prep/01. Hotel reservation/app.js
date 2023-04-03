window.addEventListener('load', solve);

function solve() {
    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count')
    };

    const form = document.querySelector('form');
    const nextBtn = document.getElementById('next-btn');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');

    let reservation = {};

    nextBtn.addEventListener('click', nextButtonHandler);

    function nextButtonHandler(e) {
        e.preventDefault();

        const allInputsAreValid = Object.values(inputDOMSelectors)
            .every((input) => input.value !== '');

        const checkInDateIsBeforeCheckOutDate = inputDOMSelectors.dateIn.value < inputDOMSelectors.dateOut.value;

        if (!allInputsAreValid || !checkInDateIsBeforeCheckOutDate) {
            return;
        }

        infoList.innerHTML = '';
        const li = createElement('li', infoList, null, null, ['reservation-content']);
        const article = createElement('article', li);
        createElement('h3', article, `Name: ${inputDOMSelectors.firstName.value} ${inputDOMSelectors.lastName.value}`);
        createElement('p', article, `From date: ${inputDOMSelectors.dateIn.value}`);
        createElement('p', article, `To date: ${inputDOMSelectors.dateOut.value}`);
        createElement('p', article, `For ${inputDOMSelectors.peopleCount.value} people`);

        const editBtn = createElement('button', li, 'Edit', null, ['edit-btn']);
        const continueBtn = createElement('button', li, 'Continue', null, ['continue-btn']);

        editBtn.addEventListener('click', editReservationHandler);
        continueBtn.addEventListener('click', continueEventHandler);

        for (const key in inputDOMSelectors) {
            reservation[key] = inputDOMSelectors[key].value;
        }

        form.reset();
        nextBtn.disabled = true;
    }

    function editReservationHandler() {
        this.parentNode.remove();

        for (const key in reservation) {
            inputDOMSelectors[key].value = reservation[key];
        }

        nextBtn.disabled = false;
    }

    function continueEventHandler() {
        const reservationRef = this.parentNode;
        confirmList.appendChild(reservationRef);

        document.querySelector('.edit-btn').remove();
        this.remove();

        const confirmBtn = createElement('button', reservationRef, 'Confirm', null, ['confirm-btn']);
        const cancelBtn = createElement('button', reservationRef, 'Cancel', null, ['cancel-btn']);

        confirmBtn.addEventListener('click', completeReservation);
        cancelBtn.addEventListener('click', completeReservation);
    }

    function completeReservation() {
        this.parentNode.remove();
        nextBtn.disabled = false;

        const verification = document.querySelector('#verification');

        if (this.classList.contains('confirm-btn')) {
            verification.setAttribute('class','reservation-confirmed');
            verification.textContent = 'Confirmed.';
        } else {
            verification.setAttribute('class','reservation-cancelled');
            verification.textContent = 'Cancelled.';
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
