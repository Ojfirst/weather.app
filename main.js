
// This is the main entry point for the weather application. It initializes the app, sets up event listeners, and handles user input.
// Importing necessary modules and functions
import { fetchWeatherData } from './modules/api.js';
import { WeatherUI } from './modules/dom.js';
import { cityValidator } from './modules/validation.js';
import { kelvinToCelsius, getWeatherIcon, addMessage, timeToLocalTime, sanitizerInput } from './modules/utils.js';

const init = () => {
  const form = document.querySelector('#city-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userInput = document.querySelector('#city-input');
    const city = sanitizerInput(userInput.value);

    try {
      cityValidator(city);
      const rawData = await fetchWeatherData(city); // (fetchWeatherData) From  api.js

      const processedData = {
        name : city,
        countryCode: rawData.sys.country,
        temp: kelvinToCelsius(rawData.main.temp),
        description: rawData.weather[0].description,
        icon: getWeatherIcon(rawData.weather[0].main),
        windSpeed: `${rawData.wind.speed} m/s`,
        sunrise: timeToLocalTime(rawData.sys.sunrise),
        sunset: timeToLocalTime(rawData.sys.sunset)
      };

      WeatherUI.updateWeatherDisplay(processedData);
    } catch (error) {
      WeatherUI.showError(error.message)
    }

    userInput.value = '';
  });
};

document.addEventListener('DOMContentLoaded', () => {
  init();
})