// Sanitiazer
export const sanitizerInput = (rawText) => {
  if (typeof rawText !== string) return '';
  return rawText.trim().replace(/[^a-zA-Z ]/g, '');
}