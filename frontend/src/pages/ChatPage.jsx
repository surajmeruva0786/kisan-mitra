import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ChatPage() {
  const { t } = useLanguage();
  return <div className="p-5 text-sm text-gray-500">{t('chatSubGreeting')}… (built in the next step)</div>;
}
