// Thin fetch wrapper for the backend API. In dev, Vite proxies /api/* to the backend
// (see vite.config.js); in production set VITE_API_BASE_URL to the deployed API origin.
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

async function request(path, options) {
  const res = await fetch(`${BASE_URL}${path}`, options);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

export const api = {
  getLanguages: () => request('/api/languages'),
  getSchemes: (lang, level = 'all') => request(`/api/schemes?lang=${lang}&level=${level}`),
  getScheme: (id, lang) => request(`/api/schemes/${id}?lang=${lang}`),
  getCrops: (lang) => request(`/api/crops?lang=${lang}`),
  getCropCalendar: (cropId, lang) => request(`/api/crops/${cropId}/calendar?lang=${lang}`),
  getPrices: (lang, search = '') => request(`/api/prices?lang=${lang}&search=${encodeURIComponent(search)}`),
  getPrice: (id, lang) => request(`/api/prices/${id}?lang=${lang}`),
  getWeather: (lang) => request(`/api/weather?lang=${lang}`),
  postChat: (message, lang) =>
    request('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, lang }),
    }),
};
