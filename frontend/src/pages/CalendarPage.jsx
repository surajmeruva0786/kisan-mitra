import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useProfile } from '../context/ProfileContext.jsx';
import { api } from '../lib/api.js';
import Pill from '../components/ui/Pill.jsx';
import Card from '../components/ui/Card.jsx';

export default function CalendarPage() {
  const { t, language } = useLanguage();
  const { profile } = useProfile();
  const [crops, setCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(profile.crops[0] || null);
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getCrops(language).then((list) => {
      setCrops(list);
      setSelectedCrop((prev) => prev || list[0]?.id);
    });
  }, [language]);

  useEffect(() => {
    if (!selectedCrop) return;
    setLoading(true);
    api
      .getCropCalendar(selectedCrop, language)
      .then(setCalendar)
      .catch(() => setCalendar(null))
      .finally(() => setLoading(false));
  }, [selectedCrop, language]);

  return (
    <div className="p-4 md:p-6">
      <h2 className="font-display text-xl font-bold">{t('calendarTitle')}</h2>
      <p className="mt-1 text-sm text-gray-500">{t('calendarSub')}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {crops.map((c) => (
          <Pill key={c.id} active={selectedCrop === c.id} onClick={() => setSelectedCrop(c.id)}>
            {c.label}
          </Pill>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {loading && <p className="text-sm text-gray-400">…</p>}
        {!loading &&
          calendar?.stages.map((stage, i) => (
            <Card key={i} className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-600">{i + 1}</div>
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="font-display text-sm font-bold">{stage.name}</h3>
                  <span className="text-xs font-semibold text-gray-400">{stage.months}</span>
                </div>
                <p className="fs-scale mt-1 text-sm text-gray-600">{stage.tip}</p>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
