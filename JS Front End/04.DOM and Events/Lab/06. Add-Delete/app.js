function addItem() {
    const ulContainer = document.getElementById('items');
    const input = document.getElementById('newItemText');

    if (input.value.length === 0) return;

    let newLi = document.createElement('li');
    let newAnchor = document.createElement('a');
    newAnchor.textContent = '[Delete]';
    newAnchor.href = '#';
    newAnchor.addEventListener('click', deleteHandler)
    newLi.textContent = input.value;

    newLi.appendChild(newAnchor);
    ulContainer.appendChild(newLi);
    input.value = '';

    function deleteHandler() {
        const anchor = this;
        anchor.parentElement.remove();
    }
}
