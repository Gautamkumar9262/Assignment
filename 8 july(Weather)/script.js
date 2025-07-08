const apiKey = 'b81d13ebeabdab8b7265989c40665041';  // Your actual API key

async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const weatherInfo = document.getElementById('weatherInfo');

    if (city === '') {
        weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
            <p><strong>Temperature:</strong> ${temp} °C</p>
            <p><strong>Condition:</strong> ${description}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Wind Speed:</strong> ${speed} m/s</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
}
