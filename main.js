
// This is the main entry point for the weather application. It initializes the app, sets up event listeners, and handles user input.
// Importing necessary modules and functions
import { fetchWeatherData } from './modules/api.js';
import { WeatherUI } from './modules/dom.js';
import { cityValidator } from './modules/validation.js';
import { kelvinToCelsius, getWeatherIcon, timeToLocalTime, sanitizerInput, disableBtn, enableBtn } from './modules/utils.js';




const init = () => {
  const form = document.querySelector('#city-form');
  const submitButton = document.querySelector('#get-weather-btn');
  const userInput = document.querySelector('#city-input');

  // Set initial button state
  disableBtn(submitButton);

  userInput.addEventListener('input', (e) => {
    if (sanitizerInput(userInput.value).length > 0) {
      enableBtn(submitButton);
    }
    else {
      disableBtn(submitButton);
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = sanitizerInput(userInput.value);

    try {
      cityValidator(city);
      const rawData = await fetchWeatherData(city); // (fetchWeatherData) From  api.js
      console.log(rawData);
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
    disableBtn(submitButton);
  });
};





document.addEventListener('DOMContentLoaded', () => {
  init();
})