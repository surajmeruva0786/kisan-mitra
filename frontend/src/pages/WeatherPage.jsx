import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { api } from '../lib/api.js';
import Card from '../components/ui/Card.jsx';

const CONDITION_EMOJI = { sunny: '☀️', cloudy: '☁️', rainy: '🌧️', partly: '⛅' };

export default function WeatherPage() {
  const { t, language } = useLanguage();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    api.getWeather(language).then(setWeather).catch(() => setWeather(null));
  }, [language]);

  if (!weather) return <div className="p-5 text-sm text-gray-400">…</div>;

  return (
    <div className="p-4 md:p-6">
      <h2 className="font-display text-xl font-bold">{t('weatherTitle')}</h2>

      <Card className="mt-3 max-w-sm bg-gradient-to-br from-indigo-500 to-brand-500 text-white">
        <p className="text-sm opacity-90">{weather.location}</p>
        <div className="mt-1 flex items-center gap-3">
          <span className="text-4xl">{CONDITION_EMOJI[weather.condition] ?? '⛅'}</span>
          <span className="font-display text-4xl font-bold">{weather.temp}°C</span>
        </div>
        <p className="text-sm opacity-90">{weather.conditionLabel}</p>
        <div className="mt-3 flex gap-4 text-sm opacity-90">
          <span>
            {t('humidityLabel')}: {weather.humidity}%
          </span>
          <span>
            {t('windLabel')}: {weather.wind} km/h
          </span>
        </div>
      </Card>

      {weather.hasAlert && (
        <Card className="mt-3 max-w-sm border-amber-300 bg-amber-50">
          <p className="fs-scale text-sm font-semibold text-amber-800">⚠️ {weather.alertText}</p>
        </Card>
      )}

      <h3 className="mt-5 text-sm font-bold text-gray-500">{t('forecastTitle')}</h3>
      <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
        {weather.forecast.map((f, i) => (
          <Card key={i} className="flex w-20 shrink-0 flex-col items-center gap-1 py-3">
            <span className="text-xs font-semibold text-gray-500">{f.day}</span>
            <span className="text-xl">{CONDITION_EMOJI[f.condition] ?? '⛅'}</span>
            <span className="text-xs">
              <span className="font-bold">{f.high}°</span> <span className="text-gray-400">{f.low}°</span>
            </span>
          </Card>
        ))}
      </div>

      <h3 className="mt-5 text-sm font-bold text-gray-500">{t('advisoryTitle')}</h3>
      <div className="mt-2 space-y-2">
        {weather.advisories.map((a, i) => (
          <Card key={i} className="fs-scale max-w-lg text-sm text-gray-700">
            {a.text}
          </Card>
        ))}
      </div>
    </div>
  );
}
