const router = require('express').Router();

router.get('/health', (req, res) => res.json({ status: 'ok' }));

router.use('/schemes', require('./schemes'));
router.use('/crops', require('./crops'));
router.use('/languages', require('./languages'));

module.exports = router;
