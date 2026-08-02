const router = require('express').Router();
const { buildGroundedReply } = require('../lib/chatEngine');
const llm = require('../lib/llm');

// POST /api/chat { message: string, lang?: string }
router.post('/', async (req, res) => {
  const { message, lang = 'en' } = req.body || {};
  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'message is required' });
  }

  const { intent, reply, context } = buildGroundedReply(message, lang);

  if (!llm.isConfigured() || reply.type === 'list') {
    // List-shaped replies (e.g. price tables) render better as structured data than free text.
    return res.json({ reply, intent, source: 'rule' });
  }

  try {
    const text = await llm.generateGroundedReply({ message, groundingContext: context, lang });
    return res.json({ reply: { type: 'text', text }, intent, source: 'llm' });
  } catch (err) {
    console.error('LLM generation failed, falling back to rule-based reply:', err.message);
    return res.json({ reply, intent, source: 'rule-fallback' });
  }
});

module.exports = router;
