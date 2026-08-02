import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { api } from '../lib/api.js';
import Card from '../components/ui/Card.jsx';

const TREND_COLOR = { up: 'text-green-600', down: 'text-red-600', flat: 'text-gray-400' };

export default function PricesPage() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handle = setTimeout(() => {
      setLoading(true);
      api
        .getPrices(language, search)
        .then(setRows)
        .catch(() => setRows([]))
        .finally(() => setLoading(false));
    }, 250);
    return () => clearTimeout(handle);
  }, [language, search]);

  useEffect(() => {
    if (!selectedId) {
      setSelected(null);
      return;
    }
    api.getPrice(selectedId, language).then(setSelected).catch(() => setSelected(null));
  }, [selectedId, language]);

  if (selectedId) {
    return (
      <div className="p-4 md:p-6">
        <button type="button" onClick={() => setSelectedId(null)} className="mb-3 text-sm font-semibold text-brand-600 cursor-pointer">
          ← {t('backLabel')}
        </button>
        {selected && (
          <Card className="max-w-sm">
            <h2 className="font-display text-lg font-bold">{selected.crop}</h2>
            <p className="text-sm text-gray-500">{selected.market}</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold">₹{selected.price.toLocaleString('en-IN')}</span>
              <span className="text-sm text-gray-400">{t('perQuintal')}</span>
            </div>
            <span className={`text-sm font-semibold ${TREND_COLOR[selected.trend]}`}>{selected.changeLabel}</span>

            {selected.nearby.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wide text-gray-400">{t('nearbyMarkets')}</h4>
                <div className="space-y-1.5">
                  {selected.nearby.map((n, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-gray-600">{n.market}</span>
                      <span className="font-semibold">₹{n.price.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="font-display text-xl font-bold">{t('pricesTitle')}</h2>
      <p className="mt-1 text-xs text-gray-400">{t('lastUpdated')}</p>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={t('searchPlaceholder')}
        className="mt-3 w-full max-w-sm rounded-full border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400"
      />

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {loading && <p className="text-sm text-gray-400">…</p>}
        {!loading && rows.length === 0 && <p className="text-sm text-gray-400">—</p>}
        {rows.map((r) => (
          <Card key={r.id} className="flex cursor-pointer items-center justify-between hover:border-brand-300" onClick={() => setSelectedId(r.id)}>
            <div>
              <div className="text-sm font-bold">{r.crop}</div>
              <div className="text-xs text-gray-400">{r.market}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold">₹{r.price.toLocaleString('en-IN')}</div>
              <div className={`text-xs font-semibold ${TREND_COLOR[r.trend]}`}>{r.changeLabel}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
