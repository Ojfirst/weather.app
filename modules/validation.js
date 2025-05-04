// Sanitiazer
export const sanitizerInput = (rawText) => {
  if (typeof rawText !== 'string') return '';
  return rawText.trim().replace(/[^a-zA-Z ]/g, '');
}

export const sunrise = (data) => {
  if (typeof data !== 'number') return '';
  return new Date(data * 1000).toLocaleTimeString()
}