import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { api } from '../lib/api.js';
import Card from '../components/ui/Card.jsx';
import Pill from '../components/ui/Pill.jsx';
import Button from '../components/ui/Button.jsx';

const FILTERS = [
  { key: 'all', labelKey: 'filterAll' },
  { key: 'central', labelKey: 'filterCentral' },
  { key: 'ap', labelKey: 'filterAP' },
  { key: 'ts', labelKey: 'filterTS' },
];

export default function SchemesPage() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .getSchemes(language, filter)
      .then(setSchemes)
      .catch(() => setSchemes([]))
      .finally(() => setLoading(false));
  }, [language, filter]);

  useEffect(() => {
    if (!selectedId) {
      setSelected(null);
      return;
    }
    setDetailLoading(true);
    api
      .getScheme(selectedId, language)
      .then(setSelected)
      .catch(() => setSelected(null))
      .finally(() => setDetailLoading(false));
  }, [selectedId, language]);

  if (selectedId) {
    return (
      <div className="p-4 md:p-6">
        <button type="button" onClick={() => setSelectedId(null)} className="mb-3 text-sm font-semibold text-brand-600 cursor-pointer">
          ← {t('backLabel')}
        </button>
        {detailLoading && <p className="text-sm text-gray-400">…</p>}
        {selected && (
          <Card className="max-w-xl">
            <div className="mb-1 inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-600">{selected.levelLabel}</div>
            <h2 className="font-display text-xl font-bold">{selected.name}</h2>

            <Section title={t('benefitLabel')}>{selected.benefit}</Section>

            <Section title={t('eligibilityLabel')}>
              <ul className="space-y-1">
                {selected.eligibility.map((e, i) => (
                  <li key={i} className="flex gap-1.5 text-sm text-gray-700">
                    <span>&bull;</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title={t('howToApplyLabel')}>
              <ol className="space-y-1.5">
                {selected.steps.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-600">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </Section>

            <Section title={t('documentsLabel')}>
              <div className="flex flex-wrap gap-1.5">
                {selected.documents.map((d, i) => (
                  <span key={i} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                    {d}
                  </span>
                ))}
              </div>
            </Section>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 p-3">
              <div>
                <div className="text-xs text-gray-500">{t('helplineLabel')}</div>
                <div className="text-sm font-bold">{selected.helpline}</div>
              </div>
              <a href={`tel:${selected.helpline}`}>
                <Button>{t('call')}</Button>
              </a>
            </div>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="font-display text-xl font-bold">{t('schemesTitle')}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <Pill key={f.key} active={filter === f.key} onClick={() => setFilter(f.key)}>
            {t(f.labelKey)}
          </Pill>
        ))}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {loading && <p className="text-sm text-gray-400">…</p>}
        {!loading && schemes.length === 0 && <p className="text-sm text-gray-400">—</p>}
        {schemes.map((s) => (
          <Card key={s.id} className="cursor-pointer hover:border-brand-300" onClick={() => setSelectedId(s.id)}>
            <div className="mb-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-600">{s.levelLabel}</div>
            <h3 className="font-display text-base font-bold">{s.name}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-gray-500">{s.benefit}</p>
            <span className="mt-2 inline-block text-xs font-semibold text-brand-600">{t('viewDetails')} →</span>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-4">
      <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wide text-gray-400">{title}</h4>
      <div className="fs-scale text-sm">{children}</div>
    </div>
  );
}
