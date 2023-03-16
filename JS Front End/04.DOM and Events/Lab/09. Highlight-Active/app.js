function focused() {
    const inputElements = Array.from(document.getElementsByTagName('input'));

    for (const input of inputElements) {
        input.addEventListener('focus', focusHandler);
        input.addEventListener('blur', blurHandler);
    }

    function focusHandler() {
        this.parentElement.classList.add('focused');
    }

    function blurHandler() {
        this.parentElement.classList.remove('focused');
    }
}
