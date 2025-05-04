import { fetchWeatherData } from './modules/api.js';
import { WeatherUI } from './modules/dom.js';
import { sanitizerInput } from './modules/validation.js';
import { kelvinToCelsius, getWeatherIcon } from './modules/utils.js';

const init = () => {
  const form = document.querySelector('#city-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userInput = document.querySelector('#city-input');
    const city = sanitizerInput(userInput.value);

    try {
      const rawData = await fetchWeatherData(city);
      const processedData = {
        name : city,
        temp: kelvinToCelsius(rawData.main.temp),
        description: rawData.weather[0].description,
        icon: getWeatherIcon(rawData.weather[0].main)
      };
      WeatherUI.updateWeatherDisplay(processedData);
    } catch (error) {
      WeatherUI.showError(error.message)
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  init();
})