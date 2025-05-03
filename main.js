// This script is used to handle the functionality of the web page
// It includes functions to handle the display of the form, the submission of the form, and the display of the results

// Pure function to handle DOM error display!
const showError = (message) => {
  const displayMsg = document.querySelector('#error-message');
  if (displayMsg) {
    displayMsg.textContent = message;
    displayMsg.classList.remove('hidden');

    setTimeout(() => {
      if (displayMsg) {
        displayMsg.classList.add('hidden')
      }
    }, 3000)
  }
}


// Takes raw input, returns safe string
const sanitizeInput = (rawText) => {
  return rawText.trim().replace(/[^a-zA-Z ]/g, '');
}
// Like filtering coffee grounds - keeps only liquid

// Kelvin to Celsius (pure calculation)
function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}
// Like converting USD to EUR - same amount, different format


// API key
const API_KEY = 'bd9d7d44f92d4f21f219a23eecee5e6a';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; 


// Maps API's "condition" to emoji
const getWeatherIcon = (condition) => {
  const icons = {
    'rain': '🌧',
    'clouds': '☁',
    'clear': '☀'
  };
  return icons[condition.toLowerCase()] || '🌐';
}
// Like a vending machine - button A1 always gives chips


const init = () => {
  console.log('WWeather App initialized')
  const form = document.querySelector('#city-form');
  if (!form) {
    showError('Form not found');
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityInput = document.querySelector('#city-input');
    if (cityInput) {
      const city = sanitizeInput(cityInput.value);
      console.log('City name entered:', city);
      cityInput.value = ''; // Rest input
    }

    showError('test')
    
  })
}



document.addEventListener('DOMContentLoaded', () => {
  init();
})

