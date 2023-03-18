function toggle() {
    const span = document.getElementsByClassName('button')[0];
    const extra = document.getElementById('extra');

    if (span.textContent === 'More') {
        span.textContent = 'Less';
        extra.style.display = 'block';
    } else {
        span.textContent = 'More';
        extra.style.display = 'none';
    }
}
