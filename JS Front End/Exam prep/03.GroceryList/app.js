window.addEventListener('DOMContentLoaded', loadGrocery);

function loadGrocery() {
    const URL = 'http://localhost:3030/jsonstore/grocery/'
    const form = document.querySelector('form');
    const tbody = document.getElementById('tbody');

    form.addEventListener('submit', loadData);

    async function loadData(e) {
        e.preventDefault();

        const response = await fetch(URL);
        if (response.status !== 200) {
            throw new Error('Response error');
        }

        const data = await response.json();

        Object.values(data).forEach((dataObject) => {
            const {product, count, price} = dataObject;
            const tableRow = document.createElement('tr');
            const name = document.createElement('td');
            name.classList.add('name');
            name.textContent = product.toString();
            const countProduct = document.createElement('td');
            countProduct.classList.add('count-product');
            countProduct.textContent = count.toString();
            const productPrice = document.createElement('td');
            productPrice.classList.add('product-price');
            productPrice.textContent = price.toString();
            const action = document.createElement('td');
            action.classList.add('btn');
            const updateBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');
            updateBtn.classList.add('update');
            updateBtn.textContent = 'Update';
            deleteBtn.classList.add('delete');
            deleteBtn.textContent = 'Delete';
            action.append(updateBtn, deleteBtn);
            tableRow.append(name, countProduct, productPrice, action);
            tbody.appendChild(tableRow);
        });
    }
}
