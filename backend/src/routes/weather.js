const router = require('express').Router();
const { CURRENT, CONDITION_LABEL, FORECAST, WEATHER_ADVISORY, WEATHER_ALERT } = require('../data/weather');
const { localize } = require('../lib/localize');

// GET /api/weather?lang=en
router.get('/', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json({
    location: CURRENT.location,
    temp: CURRENT.temp,
    conditionLabel: localize(CONDITION_LABEL[CURRENT.condition], lang),
    humidity: CURRENT.humidity,
    wind: CURRENT.wind,
    hasAlert: true,
    alertText: localize(WEATHER_ALERT, lang),
    forecast: FORECAST.map((f) => ({ day: f.day, high: f.high, low: f.low, condition: f.cond })),
    advisories: WEATHER_ADVISORY.map((a) => ({ text: localize(a, lang) })),
  });
});

module.exports = router;
