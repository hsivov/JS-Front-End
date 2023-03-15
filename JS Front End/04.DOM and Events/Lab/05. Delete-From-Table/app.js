function deleteByEmail() {
    const evenTds = Array.from(document.querySelectorAll('#customers td:nth-child(even)'));
    const input = document.querySelector('input[name="email"]');
    const result = document.getElementById('result');
    let emailValue = input.value;

    let foundElement = evenTds.find((td) => td.textContent === emailValue);
    if (foundElement) {
        foundElement.parentElement.remove();
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }
}
