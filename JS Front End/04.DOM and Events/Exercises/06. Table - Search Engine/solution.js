function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    const searchField = document.getElementById('searchField');

    function onClick() {
        const rows = Array.from(document.querySelectorAll('table tbody tr'));
        const searchedWord = searchField.value;

        for (const row of rows) {

            if (row.classList.contains('select')) {
                row.classList.remove('select');
            }

            if (row.textContent.includes(searchedWord)) {
                row.classList.add('select')
            }
            searchField.value = '';
        }
    }
}
