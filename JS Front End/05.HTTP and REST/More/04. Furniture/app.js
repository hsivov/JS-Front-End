const token = localStorage.getItem('token');

if (token === null) {
    window.location = './home.html';
}

const url = 'http://localhost:3030/data/furniture';
const form = document.querySelector('form');

form.addEventListener('submit', createFurniture);

async function createFurniture(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('name');
    const price = formData.get('price');
    const factor = formData.get('factor');
    const img = formData.get('img');

    const payload = {
        name,
        price,
        factor,
        img
    };
    try {
        await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': "application/json",
                'X-Authorization': token
            },
            body: JSON.stringify(payload)
        });
    } catch (err) {
        alert(err.message);
    }

    createNewRow(name, price, factor, img);
}

function createNewRow(name, price, factor, img) {
    const tbody = document.querySelector('tbody');
    const tableRow = createElement('tr', '', tbody);

    const firstColumn = createElement('td', '', tableRow);
    createElement('img', '', firstColumn, '', '', {src: img});

    const secondColumn = createElement('td', '', tableRow);
    createElement('p', name, secondColumn);

    const thirdColumn = createElement('td', '', tableRow);
    createElement('p', price, thirdColumn);

    const fourthColumn = createElement('td', '', tableRow);
    createElement('p', factor, fourthColumn);

    const fifthColumn = createElement('td', '', tableRow);
    createElement('input', '', fifthColumn, '', '', {type: "checkbox"});
}

function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== 'input') {
        htmlElement.textContent = content;
    }

    if (content && type === 'input') {
        htmlElement.value = content;
    }

    if (parentNode) {
        parentNode.appendChild(htmlElement);
    }

    if (id) {
        htmlElement.setAttribute('id', id);
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
