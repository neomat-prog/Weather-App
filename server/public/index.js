document.addEventListener("DOMContentLoaded", () => {
    const weatherForm = document.querySelector(".weather-form");
    const cityInput = document.querySelector(".cityInput");
    const card = document.querySelector(".card");

    weatherForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const city = cityInput.value.trim();

        if (city) {
            try {
                const weatherData = await getWeatherData(city);
                displayWeatherInfo(weatherData);
            } catch (error) {
                console.error(error);
                displayError("City not found.");
            }
        } else {
            displayError("Please enter a city!");
        }
    });

    // Fetch weather data from the server (which will use the OpenWeather API)
    async function getWeatherData(city) {
        const response = await fetch(`/weather?city=${city}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        return await response.json();
    }

    function displayWeatherInfo(data) {
        card.innerHTML = `
            <h1 class="cityDisplay">${data.name}</h1>
            <p class="tempDisplay">Temperature: ${data.main.temp}°C</p>
            <p class="humidityDisplay">Humidity: ${data.main.humidity}%</p>
            <p class="descDisplay">Description: ${data.weather[0].description}</p>
            <p class="weatherEmoji">${getWeatherEmoji(data.weather[0].id)}</p>
        `;
    }

    function getWeatherEmoji(weatherId) {
        if (weatherId >= 200 && weatherId < 300) return "⚡"; // Thunderstorm
        if (weatherId >= 300 && weatherId < 400) return "🌧️"; // Drizzle
        if (weatherId >= 500 && weatherId < 600) return "🌧️"; // Rain
        if (weatherId >= 600 && weatherId < 700) return "❄️"; // Snow
        if (weatherId >= 700 && weatherId < 800) return "🌫️"; // Mist
        if (weatherId === 800) return "☀️"; // Clear sky
        if (weatherId > 800) return "☁️"; // Clouds
        return "🌍"; // Default if unknown
    }

    function displayError(message) {
        const errorDisplay = document.createElement("p");
        errorDisplay.textContent = message;
        errorDisplay.classList.add("errorDisplay");

        // Clear any previous content in the card and append the error
        card.innerHTML = "";  // Clear previous content
        card.appendChild(errorDisplay);
    }
});
