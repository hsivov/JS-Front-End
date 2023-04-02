window.addEventListener('load', login)

function login() {

    const loginForm = Array.from(document.querySelectorAll('form'))[1];
    loginForm.addEventListener('submit', onLogin);
}

async function onLogin(event) {
    event.preventDefault();

    const url = 'http://localhost:3030/users/login/';
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const res = await fetch(url, {
            method: 'post',
            body: JSON.stringify({email, password})
        });

        if (res.ok !== true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        const token = data.accessToken;
        localStorage.setItem('token', token);
        window.location = 'homeLogged.html';
    } catch (err) {
        alert(err.message);
    }
}

