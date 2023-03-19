function solve() {

    const textAreas = document.getElementsByTagName('textarea');
    const buttons = document.getElementsByTagName('button');
    const [generateTextArea, buyTextArea] = textAreas;
    const [generateBtn, buyBtn] = buttons;
    const tbody = document.querySelector('table tbody');

    generateBtn.addEventListener('click', generateHandler);
    buyBtn.addEventListener('click', buyHandler);

    function generateHandler() {
        const jsonData = JSON.parse(generateTextArea.value);

        for (const {img, name, price, decFactor} of jsonData) {

            const tableRow = createElement('tr', '', tbody);

            const firstColumn = createElement('td', '', tableRow);
            createElement('img', '', firstColumn, '', '', {src: img});

            const secondColumn = createElement('td', '', tableRow);
            createElement('p', name, secondColumn);

            const thirdColumn = createElement('td', '', tableRow);
            createElement('p', price, thirdColumn);

            const fourthColumn = createElement('td', '', tableRow);
            createElement('p', decFactor, fourthColumn);

            const fifthColumn = createElement('td', '', tableRow);
            createElement('input', '', fifthColumn, '', '', {type: "checkbox"});
        }
        buyTextArea.value = '';
    }

    function buyHandler() {
        const allCheckedInputs = Array.from(document.querySelectorAll("tbody tr input:checked"));
        let boughtItems = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        for (const input of allCheckedInputs) {
            const tableRow = input.parentElement.parentElement;
            const [_firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children);
            let item = secondColumn.children[0].textContent;
            boughtItems.push(item);
            let currentPrice = Number(thirdColumn.children[0].textContent);
            totalPrice += currentPrice;
            let currentDecFactor = Number(fourthColumn.children[0].textContent);
            totalDecFactor += currentDecFactor;
        }

        buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`;
        buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        buyTextArea.value += `Average decoration factor: ${totalDecFactor / allCheckedInputs.length}`;
    }

    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type);

        if (content && type !== 'input') {
            htmlElement.textContent = content;
        }

        if (content && type === 'input') {
            htmlElement.value = content;
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        if (id) {
            htmlElement.setAttribute('id', id);
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
