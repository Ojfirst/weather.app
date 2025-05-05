import { fetchWeatherData } from './modules/api.js';
import { WeatherUI } from './modules/dom.js';
import { sanitizerInput , timeToString } from './modules/validation.js';
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
        countryCode: rawData.sys.country,
        temp: kelvinToCelsius(rawData.main.temp),
        description: rawData.weather[0].description,
        icon: getWeatherIcon(rawData.weather[0].main),
        windSpeed: `${rawData.wind.speed} m/s`,
        sunrise: timeToString(rawData.sys.sunrise),
        sunset: timeToString(rawData.sys.sunset)
      };
      console.log('sunrise:', processedData.sunrise);
      console.log('sunrise:', processedData.sunset);
      WeatherUI.updateWeatherDisplay(processedData);
    } catch (error) {
      WeatherUI.showError(error.message)
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  init();
})