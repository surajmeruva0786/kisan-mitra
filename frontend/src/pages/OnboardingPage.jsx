import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useProfile } from '../context/ProfileContext.jsx';
import { LANGUAGES } from '../i18n/languages.js';
import { api } from '../lib/api.js';
import Logo from '../components/Logo.jsx';
import Button from '../components/ui/Button.jsx';
import Pill from '../components/ui/Pill.jsx';
import Toggle from '../components/ui/Toggle.jsx';

const OTHER_STATES = ['Maharashtra', 'Punjab', 'Uttar Pradesh', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Madhya Pradesh', 'Bihar', 'Rajasthan', 'West Bengal'];
const STEP_COUNT = 5;

function Dots({ step }) {
  return (
    <div className="flex justify-center gap-1.5 pb-6">
      {Array.from({ length: STEP_COUNT }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i === step ? 'bg-brand-500' : i < step ? 'bg-brand-200' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  );
}

export default function OnboardingPage() {
  const { t, language, setLanguage } = useLanguage();
  const { profile, updateProfile } = useProfile();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    api.getCrops(language).then(setCrops).catch(() => setCrops([]));
  }, [language]);

  const next = () => setStep((s) => Math.min(STEP_COUNT - 1, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));
  const finish = () => {
    updateProfile({ onboardingComplete: true });
    navigate('/');
  };

  const toggleCrop = (id) => {
    const has = profile.crops.includes(id);
    updateProfile({ crops: has ? profile.crops.filter((c) => c !== id) : [...profile.crops, id] });
  };

  const canFinishStep3 = Boolean(profile.name) && profile.crops.length > 0 && Boolean(profile.landSize);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAFB] p-4">
      <div className="w-full max-w-md rounded-3xl border border-black/8 bg-white p-8 shadow-sm">
        {step > 0 && <Dots step={step} />}

        {step === 0 && (
          <div className="flex flex-col items-center gap-4 text-center">
            <Logo size={56} />
            <h1 className="font-display text-2xl font-bold">{t('appName')}</h1>
            <p className="text-sm text-gray-500">{t('tagline')}</p>
            <p className="text-xs text-gray-400">{t('govtLine')}</p>
            <Button className="mt-4 w-full" onClick={next}>
              {t('getStarted')}
            </Button>
          </div>
        )}

        {step === 1 && (
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-display text-lg font-bold">{t('selectLanguageTitle')}</h2>
              <p className="text-sm text-gray-500">{t('selectLanguageSub')}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code)}
                  className={`rounded-xl border px-3 py-2.5 text-left text-sm font-semibold cursor-pointer ${
                    l.code === language ? 'border-brand-500 bg-brand-50 text-brand-600' : 'border-gray-200 bg-white text-gray-700'
                  }`}
                >
                  <div>{l.native}</div>
                  <div className="text-xs font-normal text-gray-400">{l.en}</div>
                </button>
              ))}
            </div>
            <StepNav onBack={back} onNext={next} onSkip={finish} t={t} />
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-display text-lg font-bold">{t('selectStateTitle')}</h2>
              <p className="text-sm text-gray-500">{t('selectStateSub')}</p>
            </div>
            <div className="flex gap-2">
              <Pill active={profile.state === 'AP'} onClick={() => updateProfile({ state: 'AP' })} className="flex-1">
                {t('stateAP')}
              </Pill>
              <Pill active={profile.state === 'TS'} onClick={() => updateProfile({ state: 'TS' })} className="flex-1">
                {t('stateTS')}
              </Pill>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-500">{t('otherStateLabel')}</label>
              <select
                value={OTHER_STATES.includes(profile.state) ? profile.state : ''}
                onChange={(e) => updateProfile({ state: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
              >
                <option value="">{t('otherStateLabel')}</option>
                {OTHER_STATES.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-500">{t('districtLabel')}</label>
              <input
                value={profile.district}
                onChange={(e) => updateProfile({ district: e.target.value })}
                placeholder={t('districtPlaceholder')}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
              />
            </div>
            <StepNav onBack={back} onNext={next} onSkip={finish} t={t} />
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-display text-lg font-bold">{t('profileTitle')}</h2>
              <p className="text-sm text-gray-500">{t('profileSub')}</p>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-500">{t('nameLabel')}</label>
              <input
                value={profile.name}
                onChange={(e) => updateProfile({ name: e.target.value })}
                placeholder={t('namePlaceholder')}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-500">{t('cropsLabel')}</label>
              <div className="flex flex-wrap gap-2">
                {crops.map((c) => (
                  <Pill key={c.id} active={profile.crops.includes(c.id)} onClick={() => toggleCrop(c.id)}>
                    {c.label}
                  </Pill>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-500">{t('landSizeLabel')}</label>
              <div className="flex gap-2">
                {[
                  { key: '<1', label: t('land1') },
                  { key: '1-5', label: t('land2') },
                  { key: '5+', label: t('land3') },
                ].map((o) => (
                  <Pill key={o.key} active={profile.landSize === o.key} onClick={() => updateProfile({ landSize: o.key })} className="flex-1">
                    {o.label}
                  </Pill>
                ))}
              </div>
            </div>
            <StepNav onBack={back} onNext={next} onSkip={finish} t={t} nextDisabled={!canFinishStep3} />
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-display text-lg font-bold">{t('accessTitle')}</h2>
              <p className="text-sm text-gray-500">{t('accessSub')}</p>
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-gray-500">{t('textSizeLabel')}</label>
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
              <p className="fs-scale mt-2 rounded-xl bg-gray-50 p-3 text-sm text-gray-600">{t('sampleText')}</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">{t('highContrastLabel')}</div>
                <div className="text-xs text-gray-500">{t('highContrastSub')}</div>
              </div>
              <Toggle checked={profile.highContrast} onChange={(v) => updateProfile({ highContrast: v })} label={t('highContrastLabel')} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">{t('voiceAssistLabel')}</div>
                <div className="text-xs text-gray-500">{t('voiceAssistSub')}</div>
              </div>
              <Toggle checked={profile.voiceAssist} onChange={(v) => updateProfile({ voiceAssist: v })} label={t('voiceAssistLabel')} />
            </div>
            <div className="flex justify-between pt-2">
              <Button variant="ghost" onClick={back}>
                {t('back')}
              </Button>
              <Button onClick={finish}>{t('finishSetup')}</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StepNav({ onBack, onNext, onSkip, t, nextDisabled }) {
  return (
    <div className="flex items-center justify-between pt-2">
      <Button variant="ghost" onClick={onBack}>
        {t('back')}
      </Button>
      <div className="flex items-center gap-3">
        <button type="button" onClick={onSkip} className="text-sm font-semibold text-gray-400 cursor-pointer">
          {t('skip')}
        </button>
        <Button onClick={onNext} disabled={nextDisabled}>
          {t('next')}
        </Button>
      </div>
    </div>
  );
}
