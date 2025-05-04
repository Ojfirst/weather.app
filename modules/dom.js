export const WeatherUI = {
  showError: (message, duration = 3000) => {
    const el = document.querySelector('#error-message');
    if (!el) return;
    el.textContent = message;
    el.classList.remove('hidden');

    setTimeout(() => el.classList.add('hidden'), duration);
  },

  updateWeatherDisplay: (data) => {
    document.querySelector('#city-name').textContent = data.name;
    document.querySelector('#temperature').textContent = `${data.temp}oC`;
    document.querySelector('#description').textContent = data.description;
    document.querySelector('#humidity').textContent = data.humidity;
    document.querySelector('#weather-display').classList.remove('hidden');
  }
}