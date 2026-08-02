// Thin wrapper around Google's Gemini API. Only used when GEMINI_API_KEY is set;
// callers must always have a rule-based grounded reply ready to fall back to.
const LANG_NAMES = {
  en: 'English', hi: 'Hindi', te: 'Telugu', ta: 'Tamil', kn: 'Kannada', mr: 'Marathi',
  bn: 'Bengali', gu: 'Gujarati', pa: 'Punjabi', or: 'Odia', ml: 'Malayalam', ur: 'Urdu',
};

function isConfigured() {
  return Boolean(process.env.GEMINI_API_KEY);
}

/**
 * Asks Gemini to phrase a natural reply, constrained to the grounded facts we already
 * computed (never letting it invent scheme amounts, prices, etc.).
 */
async function generateGroundedReply({ message, groundingContext, lang }) {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
  const langName = LANG_NAMES[lang] || 'English';

  const prompt = [
    'You are Kisan-Mitra, an assistant for Indian farmers.',
    `Reply in ${langName}, in 1-3 short sentences, in a warm and practical tone.`,
    'Use ONLY the facts given below — never invent scheme amounts, prices, or dates.',
    `Farmer's question: ${message}`,
    `Known facts: ${groundingContext}`,
  ].join('\n');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`Gemini API error: ${res.status}`);
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('Gemini API returned no text');
    return text.trim();
  } finally {
    clearTimeout(timeout);
  }
}

module.exports = { isConfigured, generateGroundedReply };
