function attachGradientEvents() {
    const divGradient = document.getElementById('gradient');
    const divResult = document.getElementById('result');

    divGradient.addEventListener('mousemove', calc);
    divGradient.addEventListener('mouseout', () => divResult.textContent = '');

    function calc(e) {
        let position = Math.floor((e.offsetX / (e.target.clientWidth - 1)) * 100);
        divResult.textContent = `${position}%`;
    }
}