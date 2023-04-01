window.addEventListener('DOMContentLoaded', loadGrocery);

function loadGrocery() {
    const URL = 'http://localhost:3030/jsonstore/grocery/'
    const form = document.querySelector('form');
    const tbody = document.getElementById('tbody');
    const inputDOMSelectors = {
        product: document.getElementById('product'),
        count: document.getElementById('count'),
        price: document.getElementById('price')
    };

    const addBtn = document.getElementById('add-product');
    const updateBtn = document.getElementById('update-product');
    const loadAllBtn = document.getElementById('load-product');

    addBtn.addEventListener('click', addProduct);
    updateBtn.addEventListener('click', onUpdateProduct);
    loadAllBtn.addEventListener('click', loadAllProducts);

    let products = {};
    let currentProduct = {};
    let id = null;

    async function loadAllProducts(e) {
        e.preventDefault();

        tbody.innerHTML = '';
        const response = await fetch(URL);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();

        Object.values(data).forEach((dataObject) => {
            const {product, count, price, _id} = dataObject;
            const tableRow = createElement('tr', tbody, null, _id);
            createElement('td', tableRow, product, null, ['name']);
            createElement('td', tableRow, count, null, ['count-product']);
            createElement('td', tableRow, price, null, ['product-price']);
            const action = createElement('td', tableRow, null, null, ['btn']);
            const updateBtn = createElement('button', action, 'Update', null, ['update']);
            const deleteBtn = createElement('button', action, 'Delete', null, ['delete']);

            updateBtn.addEventListener('click', updateProduct);
            deleteBtn.addEventListener('click', deleteProduct);

            products[_id] = dataObject;
        });
    }

    async function addProduct(event) {
        event.preventDefault();

        let allInputsAreValid = true;
            Object.values(inputDOMSelectors)
            .forEach((input) => {
                if (input.value === '') {
                    allInputsAreValid = false;
                }
            });

        if (!allInputsAreValid) {
            return;
        }

        const {product, count, price} = inputDOMSelectors;
        await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({
                product: product.value,
                count: count.value,
                price: price.value
            })
        });
        await loadAllProducts(event);
        form.reset();
    }

    function updateProduct() {
        id = this.parentElement.parentElement.id;
        currentProduct = Object.values(products)
            .find((p) => p._id === id);

        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = currentProduct[key];
        }

        addBtn.disabled = true;
        updateBtn.disabled = false;
    }

    async function onUpdateProduct(event) {
        event.preventDefault();


        const payload = {};
        for (const key in inputDOMSelectors) {
            payload[key] = inputDOMSelectors[key].value;
        }

        await fetch(URL + id,{
            method: 'PATCH',
            body: JSON.stringify(payload)
        });
        await loadAllProducts(event);
        form.reset();
        addBtn.disabled = false;
        updateBtn.disabled = true;
    }

    async function deleteProduct(event) {
        id = this.parentElement.parentElement.id;
        await fetch(URL + id, {
            method: 'DELETE'
        });
        await loadAllProducts(event);
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
