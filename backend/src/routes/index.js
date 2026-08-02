const router = require('express').Router();

router.get('/health', (req, res) => res.json({ status: 'ok' }));

router.use('/schemes', require('./schemes'));
router.use('/crops', require('./crops'));
router.use('/languages', require('./languages'));
router.use('/prices', require('./prices'));
router.use('/weather', require('./weather'));
router.use('/chat', require('./chat'));

module.exports = router;
