import { useLanguage } from './i18n/LanguageContext.jsx';

function App() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFB] text-[#1A1625]">
      <div className="text-center">
        <h1 className="font-display text-2xl font-bold">{t('appName')}</h1>
        <p className="mt-2 text-sm text-gray-500">App shell coming up next.</p>
      </div>
    </div>
  );
}

export default App;
