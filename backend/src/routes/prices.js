const router = require('express').Router();
const { MARKET_ROWS } = require('../data/market');
const { CROPS } = require('../data/crops');
const { localize } = require('../lib/localize');

function cropLabel(row, lang) {
  const cropObj = CROPS.find((c) => c.id === row.cropId);
  if (!cropObj) return row.crop;
  const suffix = row.crop.includes('(') ? ' ' + row.crop.slice(row.crop.indexOf('(')) : '';
  return localize(cropObj, lang) + suffix;
}

function changeLabel(row) {
  const arrow = row.trend === 'up' ? '▲ ' : row.trend === 'down' ? '▼ ' : '— ';
  return arrow + Math.abs(row.change) + '%';
}

// GET /api/prices?lang=en&search=cotton
router.get('/', (req, res) => {
  const lang = req.query.lang || 'en';
  const search = (req.query.search || '').toLowerCase();
  const rows = MARKET_ROWS.filter(
    (r) => !search || r.crop.toLowerCase().includes(search) || r.market.toLowerCase().includes(search)
  ).map((r) => ({
    id: r.id,
    crop: cropLabel(r, lang),
    market: r.market,
    price: r.price,
    changeLabel: changeLabel(r),
    trend: r.trend,
  }));
  res.json(rows);
});

// GET /api/prices/:id?lang=en
router.get('/:id', (req, res) => {
  const lang = req.query.lang || 'en';
  const row = MARKET_ROWS.find((r) => r.id === req.params.id);
  if (!row) return res.status(404).json({ error: 'Market row not found' });
  const nearby = MARKET_ROWS.filter((r) => r.crop === row.crop && r.id !== row.id).map((r) => ({
    market: r.market,
    price: r.price,
  }));
  res.json({
    id: row.id,
    crop: cropLabel(row, lang),
    market: row.market,
    price: row.price,
    changeLabel: changeLabel(row),
    trend: row.trend,
    nearby,
  });
});

module.exports = router;
