import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { LANGUAGES } from '../i18n/languages.js';
import Logo from '../components/Logo.jsx';
import { ChatIcon, SchemesIcon, CalendarIcon, PricesIcon, WeatherIcon, SettingsIcon } from './navIcons.jsx';

const NAV_ITEMS = [
  { key: 'chat', path: '/', labelKey: 'navChat', Icon: ChatIcon },
  { key: 'schemes', path: '/schemes', labelKey: 'navSchemes', Icon: SchemesIcon },
  { key: 'calendar', path: '/calendar', labelKey: 'navCalendar', Icon: CalendarIcon },
  { key: 'prices', path: '/prices', labelKey: 'navPrices', Icon: PricesIcon },
  { key: 'weather', path: '/weather', labelKey: 'navWeather', Icon: WeatherIcon },
  { key: 'settings', path: '/settings', labelKey: 'navSettings', Icon: SettingsIcon },
];

function NavButton({ item, mode }) {
  const { t } = useLanguage();
  const { Icon, labelKey, path } = item;

  if (mode === 'mobile') {
    return (
      <NavLink
        to={path}
        end={path === '/'}
        className={({ isActive }) =>
          `flex flex-1 flex-col items-center gap-1 py-2 text-[11px] font-semibold font-sans ${
            isActive ? 'text-brand-600' : 'text-gray-500'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Icon color={isActive ? '#7C3AED' : '#6B7280'} />
            <span>{t(labelKey)}</span>
          </>
        )}
      </NavLink>
    );
  }

  return (
    <NavLink
      to={path}
      end={path === '/'}
      className={({ isActive }) =>
        `flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold font-sans transition ${
          isActive ? 'bg-brand-50 text-brand-600' : 'text-gray-600 hover:bg-gray-50'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon color={isActive ? '#7C3AED' : '#4B5563'} />
          <span>{t(labelKey)}</span>
        </>
      )}
    </NavLink>
  );
}

export default function AppShell() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const currentLanguage = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#FAFAFB]">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-[236px] shrink-0 flex-col border-r border-gray-200 bg-white p-3.5">
        <div className="flex items-center gap-2.5 px-2 pb-5 pt-1.5">
          <Logo size={24} />
          <span className="font-display text-[15px] font-bold">{t('appName')}</span>
        </div>
        <nav className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => (
            <NavButton key={item.key} item={item} mode="desktop" />
          ))}
        </nav>
        <div className="flex-1" />
        <div className="flex flex-col items-center gap-1.5 border-t border-gray-100 pt-3.5 text-center">
          <span className="text-[10.5px] font-medium text-gray-400">{t('poweredBy')}</span>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:px-5">
          <h1 className="font-display text-[19px] font-bold">{t('appName')}</h1>
          <button
            type="button"
            onClick={() => navigate('/settings')}
            className="flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-600 cursor-pointer"
          >
            {currentLanguage.native}
          </button>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto pb-16 md:pb-0">
          <Outlet />
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-10 flex border-t border-gray-200 bg-white md:hidden">
        {NAV_ITEMS.map((item) => (
          <NavButton key={item.key} item={item} mode="mobile" />
        ))}
      </nav>
    </div>
  );
}
