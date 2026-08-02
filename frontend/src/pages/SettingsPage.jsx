import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useProfile } from '../context/ProfileContext.jsx';
import { LANGUAGES } from '../i18n/languages.js';
import { api } from '../lib/api.js';
import Card from '../components/ui/Card.jsx';
import Button from '../components/ui/Button.jsx';
import Pill from '../components/ui/Pill.jsx';
import Toggle from '../components/ui/Toggle.jsx';

const STATE_KEY_TO_LABEL = { AP: 'stateAP', TS: 'stateTS' };
const HELPLINE = '1800-180-1551';

export default function SettingsPage() {
  const { t, language, setLanguage } = useLanguage();
  const { profile, updateProfile } = useProfile();
  const navigate = useNavigate();
  const [cropLabels, setCropLabels] = useState({});

  useEffect(() => {
    api
      .getCrops(language)
      .then((list) => setCropLabels(Object.fromEntries(list.map((c) => [c.id, c.label]))))
      .catch(() => setCropLabels({}));
  }, [language]);

  const cropNames = profile.crops.map((id) => cropLabels[id]).filter(Boolean).join(', ') || '—';
  const stateLabel = STATE_KEY_TO_LABEL[profile.state] ? t(STATE_KEY_TO_LABEL[profile.state]) : profile.state || '—';
  const location = [profile.district, stateLabel].filter(Boolean).join(', ') || '—';

  const editProfile = () => navigate('/onboarding', { state: { step: 3, returnTo: '/settings' } });
  const replayOnboarding = () => navigate('/onboarding', { state: { step: 0, returnTo: '/settings' } });

  const toggleNotification = (key) =>
    updateProfile({ notifications: { ...profile.notifications, [key]: !profile.notifications[key] } });

  return (
    <div className="max-w-xl space-y-5 p-4 md:p-6">
      <h2 className="font-display text-xl font-bold">{t('settingsTitle')}</h2>

      <Section title={t('profileSection')}>
        <Card>
          <div className="flex items-start justify-between">
            <div className="space-y-0.5 text-sm">
              <div className="font-bold">{profile.name || '—'}</div>
              <div className="text-gray-500">{location}</div>
              <div className="text-gray-500">{cropNames}</div>
              <div className="text-gray-500">{profile.landSize || '—'}</div>
            </div>
            <button type="button" onClick={editProfile} className="text-sm font-semibold text-brand-600 cursor-pointer">
              {t('editProfile')}
            </button>
          </div>
        </Card>
      </Section>

      <Section title={t('languageSection')}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {LANGUAGES.map((l) => (
            <Pill key={l.code} active={l.code === language} onClick={() => setLanguage(l.code)}>
              {l.native}
            </Pill>
          ))}
        </div>
      </Section>

      <Section title={t('accessibilitySection')}>
        <Card className="space-y-4">
          <div>
            <div className="mb-1.5 text-sm font-semibold">{t('textSizeLabel')}</div>
            <div className="flex gap-2">
              {[
                { key: 'normal', label: t('textNormal') },
                { key: 'large', label: t('textLarge') },
                { key: 'xlarge', label: t('textXLarge') },
              ].map((o) => (
                <Pill key={o.key} active={profile.textSize === o.key} onClick={() => updateProfile({ textSize: o.key })} className="flex-1">
                  {o.label}
                </Pill>
              ))}
            </div>
          </div>
          <ToggleRow label={t('highContrastLabel')} sub={t('highContrastSub')} checked={profile.highContrast} onChange={(v) => updateProfile({ highContrast: v })} />
          <ToggleRow label={t('voiceAssistLabel')} sub={t('voiceAssistSub')} checked={profile.voiceAssist} onChange={(v) => updateProfile({ voiceAssist: v })} />
        </Card>
      </Section>

      <Section title={t('notificationsSection')}>
        <Card className="space-y-3">
          <ToggleRow label={t('weatherAlerts')} checked={profile.notifications.weather} onChange={() => toggleNotification('weather')} />
          <ToggleRow label={t('priceAlerts')} checked={profile.notifications.prices} onChange={() => toggleNotification('prices')} />
          <ToggleRow label={t('schemeUpdates')} checked={profile.notifications.schemes} onChange={() => toggleNotification('schemes')} />
        </Card>
      </Section>

      <Section title={t('helpSection')}>
        <Card className="flex items-center justify-between">
          <span className="text-sm font-semibold">{HELPLINE}</span>
          <a href={`tel:${HELPLINE}`}>
            <Button variant="secondary">{t('callHelpline')}</Button>
          </a>
        </Card>
      </Section>

      <Section title={t('aboutSection')}>
        <Card className="space-y-2">
          <button type="button" onClick={replayOnboarding} className="text-sm font-semibold text-brand-600 cursor-pointer">
            {t('replayOnboarding')}
          </button>
          <div className="text-xs text-gray-400">{t('poweredBy')}</div>
          <div className="text-xs text-gray-400">{t('version')}</div>
        </Card>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">{title}</h3>
      {children}
    </div>
  );
}

function ToggleRow({ label, sub, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm font-semibold">{label}</div>
        {sub && <div className="text-xs text-gray-500">{sub}</div>}
      </div>
      <Toggle checked={checked} onChange={onChange} label={label} />
    </div>
  );
}
