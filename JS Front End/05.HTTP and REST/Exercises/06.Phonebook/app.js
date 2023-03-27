function attachEvents() {
    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const phoneList = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const URL = 'http://localhost:3030/jsonstore/phonebook';

    btnLoad.addEventListener('click', loadHandler);
    btnCreate.addEventListener('click', createHandler);


    async function loadHandler() {
        const response = await fetch(URL);
        const resData = await response.json();

        phoneList.innerHTML = '';
        Object.values(resData).forEach((contact) => {
            const {person, phone, _id} = contact;
            const li = document.createElement('li');
            li.textContent = `${person}: ${phone}`;
            const btnDel = document.createElement('button');
            btnDel.textContent = 'Delete';
            btnDel.id = _id;
            btnDel.addEventListener('click', deleteHandler);
            li.appendChild(btnDel);
            phoneList.appendChild(li);
        });
    }

    async function createHandler() {
        const person = personInput.value;
        const phone = phoneInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person, phone})
        }

        await fetch(URL, httpHeaders);
        await loadHandler();
        personInput.value = '';
        phoneInput.value = '';
    }

    async function deleteHandler() {
        const id = this.id;
        const httpHeaders = {
            method: 'DELETE'
        };

        await fetch(`${URL}/${id}`, httpHeaders);
        await loadHandler();
    }
}

attachEvents();