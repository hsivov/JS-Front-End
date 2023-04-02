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
                'Content-Type': "application/json"
            },
            body: JSON.stringify(payload)
        });
    } catch (err) {
        alert(err.message);
    }
}
