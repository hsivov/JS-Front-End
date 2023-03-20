function solve() {
    const addButtons = Array.from(document.getElementsByClassName('add-product'));
    const checkoutBtn = document.getElementsByClassName('checkout')[0];
    const textArea = document.getElementsByTagName('textarea')[0];

    addButtons.forEach((btn) => btn.addEventListener('click', addProduct));
    checkoutBtn.addEventListener('click', checkoutHandler);

    let products = {};

    function addProduct() {
        const name = this.parentNode.parentNode.children[1].children[0].textContent;
        let price = Number(this.parentNode.parentNode.children[3].textContent);

        if (products.hasOwnProperty(name)) {
            products[name] += price;
        } else {
            products[name] = price;
        }
        textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    }

    function checkoutHandler() {
        const allButtons = Array.from(document.getElementsByTagName('button'));
        let totalPrice = 0;

        Object.values(products)
            .forEach((value) => totalPrice += value);

        textArea.value += `You bought ${Object.keys(products).join(', ')} for ${totalPrice.toFixed(2)}.`;

        allButtons.forEach((btn) => btn.disabled = true);
    }
}
