const router = require('express').Router();
const { CROPS, CROP_CALENDARS, STAGE_NAMES } = require('../data/crops');
const { localize } = require('../lib/localize');

// GET /api/crops?lang=en
router.get('/', (req, res) => {
  const lang = req.query.lang || 'en';
  res.json(CROPS.map((c) => ({ id: c.id, label: localize(c, lang) })));
});

// GET /api/crops/:cropId/calendar?lang=en
router.get('/:cropId/calendar', (req, res) => {
  const lang = req.query.lang || 'en';
  const calendar = CROP_CALENDARS[req.params.cropId];
  if (!calendar) return res.status(404).json({ error: 'Unknown crop' });
  const stageNames = STAGE_NAMES[lang] || STAGE_NAMES.en;
  res.json({
    cropId: req.params.cropId,
    stages: calendar.map((stage, i) => ({ name: stageNames[i], months: stage.months, tip: stage.tip })),
  });
});

module.exports = router;
