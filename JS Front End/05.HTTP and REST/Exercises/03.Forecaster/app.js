function attachEvents() {
    const getBtn = document.getElementById('submit');
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/';
    const forecast = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');
    const forecasts = document.createElement('div');
    const forecastInfo = document.createElement('div');
    forecastInfo.classList.add('forecast-info');

    const conditions = {
        Sunny: '&#x2600',
        ['Partly sunny']: '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
        Degrees: '&#176'
    }

    getBtn.addEventListener('click', getWeather);

    function getWeather() {
        const location = document.getElementById('location').value;

        forecast.style.display = 'block';
        forecasts.classList.add('forecasts');
        forecasts.innerHTML = '';

        fetch(BASE_URL + 'locations')
            .then((response) => response.json())
            .then((data) => {
                const {code} = data.find(({name}) => name === location);

                fetch(`${BASE_URL}today/${code}`)
                    .then((response) => response.json())
                    .then((data) => {

                        forecasts.innerHTML = `
                        <span class="condition symbol">${conditions[data.forecast.condition]}</span>
                        <span class="condition">
                            <span class="forecast-data">${data.name}</span>
                            <span class="forecast-data">${data.forecast.low}&#xb0/${data.forecast.high}&#xb0</span>
                            <span class="forecast-data">${data.forecast.condition}</span>
                        </span>`

                        current.appendChild(forecasts);
                    });

                fetch(`${BASE_URL}upcoming/${code}`)
                    .then((response) => response.json())
                    .then((data) => {
                        const [day1, day2, day3] = data.forecast;
                        forecastInfo.innerHTML = `
                        <span class="upcoming">
                            <span class="symbol">${conditions[day1.condition]}</span>
                            <span class="forecast-data">${day1.low}&#xb0/${day1.high}&#xb0</span>
                            <span class="forecast-data">${day1.condition}</span>
                        </span>
                        <span class="upcoming">
                            <span class="symbol">${conditions[day2.condition]}</span>
                            <span class="forecast-data">${day2.low}&#xb0/${day2.high}&#xb0</span>
                            <span class="forecast-data">${day2.condition}</span>
                        </span>
                        <span class="upcoming">
                            <span class="symbol">${conditions[day3.condition]}</span>
                            <span class="forecast-data">${day3.low}&#xb0/${day3.high}&#xb0</span>
                            <span class="forecast-data">${day3.condition}</span>
                        </span>`

                        upcoming.appendChild(forecastInfo);
                    });
            })
            .catch(() => {
                forecasts.textContent = 'Error';
            });
    }
}

attachEvents();