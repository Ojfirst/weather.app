// Sanitiazer
export const sanitizerInput = (rawText) => {
  if (typeof rawText !== 'string') return '';
  return rawText.trim().replace(/[^a-zA-Z ]/g, '');
}

// Kelvin to celsius converter
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

// Disable button
export const disableBtn = (btn) => {
  btn.disabled = true;
  btn.style.opacity = '0.5';
  btn.style.cursor = 'not allowed';
};

// Disable button
export const enableBtn = (btn) => {
  btn.disabled = false;
  btn.style.opacity = '1';
  btn.style.cursor = 'pointer';
};


