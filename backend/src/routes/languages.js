const router = require('express').Router();
const { LANGUAGES } = require('../data/languages');

// GET /api/languages
router.get('/', (req, res) => {
  res.json(LANGUAGES);
});

module.exports = router;
