function validate() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('change', changeHandler);

    function changeHandler() {
        let email = emailInput.value;
        if (/^[a-z0-9_\-]+@[a-z0-9_\-]+\.[a-z0-9_\-]{2,3}$/gm.test(email)) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    }
}
