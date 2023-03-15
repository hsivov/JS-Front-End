function addItem() {
    const ulContainer = document.getElementById('items');
    const input = document.getElementById('newItemText');
    let newLi = document.createElement('li');

    newLi.textContent = input.value;
    ulContainer.appendChild(newLi);
    input.value = '';
}