function colorize() {
    const evenRows = document.querySelectorAll('table tr:nth-child(even)');

    for (const row of evenRows) {
        row.style.backgroundColor = 'Teal';
    }
}