function attachEventsListeners() {
    const inputDistance = document.getElementById('inputDistance');
    const convertBtn = document.getElementById('convert');
    const selectInputUnitsEl = document.getElementById('inputUnits');
    const selectOutputUnitsEl = document.getElementById('outputUnits');
    const outputDistance = document.getElementById('outputDistance');

    let inputUnits = selectInputUnitsEl.value;
    let outputUnits = selectOutputUnitsEl.value;

    convertBtn.addEventListener('click', () => {
        let meters = convertToMeters(inputDistance.value, inputUnits);
        outputDistance.value = convertFromMeters(meters, outputUnits);
    });

    selectInputUnitsEl.addEventListener('change', () => {
        inputUnits = selectInputUnitsEl.value;
    });

    selectOutputUnitsEl.addEventListener('change', () => {
       outputUnits = selectOutputUnitsEl.value;
    });

    function convertToMeters(distance, convertFrom) {
        const km = (d) => d * 1000;
        const m = (d) => d * 1;
        const cm = (d) => d * 0.01;
        const mm = (d) => d * 0.001;
        const mi = (d) => d * 1609.34;
        const yrd = (d) => d * 0.9144;
        const ft = (d) => d * 0.3048;
        const inches = (d) => d * 0.0254;

        let conversionMap = {
            km,
            m,
            cm,
            mm,
            mi,
            yrd,
            ft,
            in: inches
        }

        return conversionMap[convertFrom](distance);
    }

    function convertFromMeters(distance, convertTo) {
        const km = (d) => d / 1000;
        const m = (d) => d / 1;
        const cm = (d) => d / 0.01;
        const mm = (d) => d / 0.001;
        const mi = (d) => d / 1609.34;
        const yrd = (d) => d / 0.9144;
        const ft = (d) => d / 0.3048;
        const inches = (d) => d / 0.0254;

        let conversionMap = {
            km,
            m,
            cm,
            mm,
            mi,
            yrd,
            ft,
            in: inches
        }

        return conversionMap[convertTo](distance);
    }
}
