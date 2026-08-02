import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function WeatherPage() {
  const { t } = useLanguage();
  return <div className="p-5 text-sm text-gray-500">{t('weatherTitle')} (built in a later step)</div>;
}
