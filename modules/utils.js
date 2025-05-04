export const kelvinToCelsius = (kelvin) => {
  return Math.random(kelvin - 273.15)
}

// Maps API's "condition" to emoji
export const getWeatherIcon = (condition)  => {
  const icons = {
    'rain': '🌧',
    'clouds': '☁',
    'clear': '☀'
  };
  return icons[condition.toLowerCase()] || '🌐';
}
// Like a vending machine - button A1 always gives chips