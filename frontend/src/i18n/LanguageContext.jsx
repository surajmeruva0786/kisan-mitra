import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { UI, NAV_FALLBACK } from './strings';

export const SPEECH_LANG = {
  te: 'te-IN', hi: 'hi-IN', en: 'en-IN', ta: 'ta-IN', kn: 'kn-IN', mr: 'mr-IN',
  bn: 'bn-IN', gu: 'gu-IN', pa: 'pa-IN', or: 'or-IN', ml: 'ml-IN', ur: 'ur-IN',
};

const STORAGE_KEY = 'km_language';
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => localStorage.getItem(STORAGE_KEY) || 'en');

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const t = useCallback(
    (key) => (UI[language] && UI[language][key]) || (NAV_FALLBACK[language] && NAV_FALLBACK[language][key]) || UI.en[key] || '',
    [language]
  );

  /** Picks the right variant out of a { en, te, hi, ... } map, falling back to English. */
  const localize = useCallback((map) => (map ? map[language] || map.en : ''), [language]);

  const value = useMemo(() => ({ language, setLanguage, t, localize }), [language, setLanguage, t, localize]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
