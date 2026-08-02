const router = require('express').Router();
const { SCHEMES } = require('../data/schemes');
const { localize } = require('../lib/localize');

// GET /api/schemes?lang=en&level=all|central|ap|ts
router.get('/', (req, res) => {
  const lang = req.query.lang || 'en';
  const level = req.query.level || 'all';
  const list = SCHEMES.filter((s) => level === 'all' || s.level === level).map((s) => ({
    id: s.id,
    level: s.level,
    levelLabel: s.levelLabel,
    name: localize(s.name, lang),
    benefit: localize(s.benefit, lang),
  }));
  res.json(list);
});

// GET /api/schemes/:id?lang=en
router.get('/:id', (req, res) => {
  const lang = req.query.lang || 'en';
  const scheme = SCHEMES.find((s) => s.id === req.params.id);
  if (!scheme) return res.status(404).json({ error: 'Scheme not found' });
  res.json({
    id: scheme.id,
    level: scheme.level,
    levelLabel: scheme.levelLabel,
    name: localize(scheme.name, lang),
    benefit: localize(scheme.benefit, lang),
    eligibility: scheme.eligibility,
    steps: scheme.steps,
    documents: scheme.documents,
    helpline: scheme.helpline,
  });
});

module.exports = router;
