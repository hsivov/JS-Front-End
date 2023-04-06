window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    original: document.getElementById('original-cost'),
    selling: document.getElementById('selling-price')
  }

  const form = document.querySelector('form');
  const tbody = document.getElementById('table-body');
  const carList = document.getElementById('cars-list');
  const profit = document.getElementById('profit');
  let totalProfit = 0;

  form.addEventListener('submit', onSubmit);

  function onSubmit(event) {
    event.preventDefault();

    const allInputsAreValid = Object.values(inputDOMSelectors)
      .every((input) => input.value !== '');

    const sellingPriceIsBigger = inputDOMSelectors.selling.value > inputDOMSelectors.original.value;

    if (!allInputsAreValid || !sellingPriceIsBigger) {
      return;
    }

    const tableRow = createElement('tr', tbody, null, null, ['row']);
    createElement('td', tableRow, inputDOMSelectors.make.value);
    createElement('td', tableRow, inputDOMSelectors.model.value);
    createElement('td', tableRow, inputDOMSelectors.year.value);
    createElement('td', tableRow, inputDOMSelectors.fuel.value);
    createElement('td', tableRow, inputDOMSelectors.original.value);
    createElement('td', tableRow, inputDOMSelectors.selling.value);
    const btnColumn = createElement('td', tableRow);
    const editBtn = createElement('button', btnColumn, 'Edit', null, ['action-btn', 'edit']);
    const sellBtn = createElement('button', btnColumn, 'Sell', null, ['action-btn', 'sell']);

    editBtn.addEventListener('click', editCarHandler);
    sellBtn.addEventListener('click', sellCarHandler);

    clearAllInputs();
  }

  function editCarHandler() {
    const currentCar = this.parentNode.parentNode;
    
    inputDOMSelectors.make.value = currentCar.children[0].textContent;
    inputDOMSelectors.model.value = currentCar.children[1].textContent;
    inputDOMSelectors.year.value = currentCar.children[2].textContent;
    inputDOMSelectors.fuel.value = currentCar.children[3].textContent;
    inputDOMSelectors.original.value = currentCar.children[4].textContent;
    inputDOMSelectors.selling.value = currentCar.children[5].textContent;

    currentCar.remove();
  }

  function sellCarHandler() {
    const currentCar = this.parentNode.parentNode;
    const currentProfit = currentCar.children[5].textContent - currentCar.children[4].textContent;

    const li = createElement('li', carList, null, null, ['each-list']);
    createElement('span', li, `${currentCar.children[0].textContent} ${currentCar.children[1].textContent}`);
    createElement('span', li, `${currentCar.children[2].textContent}`);
    createElement('span', li, `${currentProfit}`);

    totalProfit += currentProfit;
    profit.textContent = `${totalProfit}.00`;

    currentCar.remove();
  }

  function clearAllInputs() {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = '';
    }
  }

  function createElement(tagName, parentNode, content, id, classes, attributes) {
    const htmlElement = document.createElement(tagName);

    if (content && tagName === 'input') {
      htmlElement.value = content;
    }

    if (content && tagName !== 'input') {
      htmlElement.textContent = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(...classes);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}
