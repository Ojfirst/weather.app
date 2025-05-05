export const cityValidator = (city) => {
  if (!city) throw new Error('Please enter a city');
  if (/[0-9]/.test(city)) throw new Error('City name cannot contain numbers');
  return true;
}
