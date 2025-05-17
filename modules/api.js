const API_KEY = 'bd9d7d44f92d4f21f219a23eecee5e6a';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found');
      } else if (response.status === 401) {
        throw new Error('Invalid API key');
      } else {
        throw new Error(`HTTP error: ${response.status}`);
      }
    }
    return await response.json();

  } catch (error) {
    throw new Error(`Failed to fetch weather data: ${error.message}`);
  };
}