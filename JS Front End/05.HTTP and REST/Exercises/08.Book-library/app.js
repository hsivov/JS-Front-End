function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/collections/books/';
    const loadBooks = document.getElementById('loadBooks');
    const booksTable = document.querySelector('table > tbody');
    const [titleInput, authorInput] = document.querySelectorAll('#form > input')
    const submitBtn = document.querySelector('#form > button');
    const formHeader = document.querySelector('#form > h3');
    let editBookId = null;

    loadBooks.addEventListener('click', loadBooksHandler);
    submitBtn.addEventListener('click', submitBookHandler);

    async function loadBooksHandler() {
        booksTable.innerHTML = '';
        const booksRes = await fetch(URL);
        const booksData = await booksRes.json();

        for (const bookId in booksData) {
            const {author, title} = booksData[bookId];
            const tableRow = document.createElement('tr');
            const titleColumn = document.createElement('td');
            const authorColumn = document.createElement('td');
            const actionColumn = document.createElement('td');
            titleColumn.textContent = title;
            authorColumn.textContent = author;
            const editBtn = document.createElement('button');
            const delBtn = document.createElement('button');
            editBtn.textContent = 'Edit';

            editBtn.addEventListener('click', () => {
                editBookId = bookId;
                formHeader.textContent = 'Edit FORM'
                submitBtn.textContent = 'Save';
                titleInput.value = title;
                authorInput.value = author;
            });
            delBtn.textContent = 'Delete';
            delBtn.id = bookId;
            delBtn.addEventListener('click', deleteBookHandler);
            actionColumn.append(editBtn, delBtn);
            tableRow.append(titleColumn, authorColumn, actionColumn);
            booksTable.appendChild(tableRow);
        }
    }

    async function submitBookHandler() {
        const author = authorInput.value;
        const title = titleInput.value;
        let url = URL;

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({author, title})
        };

        if (formHeader.textContent === 'Edit FORM') {
            httpHeaders.method = 'PUT';
            url += editBookId;
        }

        await fetch(url, httpHeaders);
        await loadBooksHandler();
        authorInput.value = '';
        titleInput.value = '';

        if (formHeader.textContent === 'Edit FORM') {
            formHeader.textContent = 'FORM';
            submitBtn.textContent = 'Submit';
        }
    }

    function editBookHandler() {

    }

    async function deleteBookHandler() {
        await fetch(URL + this.id, {method: 'DELETE'});
        await loadBooksHandler();
    }
}

attachEvents();