function sumTable() {

    const valueTds = document.querySelectorAll('table td:nth-child(even)');
    let sum = Number(document.getElementById('sum').textContent);


    for (const valueTd of valueTds) {
        sum += Number(valueTd.textContent);
    }
    document.getElementById('sum').textContent = sum.toString();
}