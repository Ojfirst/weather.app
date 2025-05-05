export const kelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15)
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

// Time converter
export const timeToLocalTime = (data) => {
  if (typeof data !== 'number') return '';
  return new Date(data * 1000).toLocaleTimeString()
}

// Message sanitizer
export const addMessage =  (message) => {
  return message;
}
