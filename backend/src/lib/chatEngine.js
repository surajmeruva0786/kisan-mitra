// Rule-based, data-grounded chat responder. This is the always-available fallback
// (and the sole responder when no LLM API key is configured) — every answer is built
// directly from backend/src/data/*, never invented, so it can't hallucinate scheme
// amounts or prices. When an LLM key IS configured (see lib/llm.js), the grounding
// context this module produces is handed to the model instead of raw internet knowledge,
// mirroring the paper's "schema-aware grounding" approach.
const { SCHEMES } = require('../data/schemes');
const { CROPS, CROP_CALENDARS, STAGE_NAMES } = require('../data/crops');
const { MARKET_ROWS } = require('../data/market');
const { CURRENT, CONDITION_LABEL, WEATHER_ALERT } = require('../data/weather');
const { localize } = require('./localize');

const INTENT_PATTERNS = [
  { intent: 'weather', re: /weather|rain|climate|forecast|వాతావర|मौसम|बारिश/i },
  { intent: 'prices', re: /price|rate|mandi|market|cotton|bhav|dhar|kapas|ధర|भाव|कीमत|मंडी/i },
  { intent: 'schemes', re: /scheme|yojana|kisan|eligib|subsidy|పథక|योजना|सब्सिडी/i },
  { intent: 'calendar', re: /sow|calendar|plant|harvest|bijai|fasal|పంట|कैलेंडर|बुवाई|कटाई/i },
  { intent: 'pest', re: /pest|disease|yellow|bug|insect|పురుగు|कीट|पीली|रोग/i },
];

const PEST_ADVICE = {
  en: 'That often signals a nutrient deficiency or an early pest/fungal issue. Check the undersides of leaves for insects, consider a neem-oil spray, and if it spreads visit your nearest Krishi Vigyan Kendra or Rythu Bharosa Kendra for a proper diagnosis.',
  te: 'ఇది సాధారణంగా పోషకాల లోపం లేదా ప్రారంభ పురుగు/శిలీంధ్ర సమస్యను సూచిస్తుంది. ఆకుల అడుగు భాగంలో పురుగుల కోసం చూడండి, వేప నూనె పిచికారీ చేయండి, ఎక్కువైతే సమీప రైతు భరోసా కేంద్రాన్ని సంప్రదించండి.',
  hi: 'यह अक्सर पोषक तत्वों की कमी या शुरुआती कीट/फफूंद समस्या का संकेत होता है। पत्तियों के नीचे कीड़े जांचें, नीम तेल का छिड़काव करें, और ज़्यादा फैलने पर नज़दीकी कृषि विज्ञान केंद्र से संपर्क करें।',
};

const FALLBACK = {
  en: 'I can help with weather, market prices, government schemes, crop calendar, and pest problems. Try one of the quick-action buttons, or ask me directly.',
  te: 'వాతావరణం, మార్కెట్ ధరలు, ప్రభుత్వ పథకాలు, పంట క్యాలెండర్, పురుగుల సమస్యలపై నేను సహాయం చేయగలను. పైన ఉన్న బటన్లలో ఒకటి నొక్కండి లేదా నేరుగా అడగండి.',
  hi: 'मैं मौसम, बाज़ार भाव, सरकारी योजनाओं, फसल कैलेंडर और कीट समस्याओं में मदद कर सकता हूँ। ऊपर दिए बटन आज़माएँ या सीधे पूछें।',
};

const GREETING_RE = /^(hi|hello|hey|namaste|namaskar|నమస్కారం|नमस्ते)\b/i;

function classifyIntent(message) {
  if (GREETING_RE.test(message.trim())) return 'greeting';
  for (const { intent, re } of INTENT_PATTERNS) {
    if (re.test(message)) return intent;
  }
  return 'fallback';
}

function findMentionedCrop(message) {
  const msg = message.toLowerCase();
  return CROPS.find((c) => msg.includes(c.id) || msg.includes(c.en.toLowerCase().split(' ')[0]));
}

function findMentionedScheme(message) {
  const msg = message.toLowerCase();
  return SCHEMES.find((s) => msg.includes(s.id) || msg.includes(s.name.en.toLowerCase()));
}

/** Builds a grounded reply + a plain-text "context" blob an LLM can be asked to phrase. */
function buildGroundedReply(message, lang) {
  const intent = classifyIntent(message);

  if (intent === 'greeting') {
    return { intent, reply: { type: 'text', text: FALLBACK[lang] || FALLBACK.en }, context: 'User greeted the assistant.' };
  }

  if (intent === 'weather') {
    const cond = localize(CONDITION_LABEL[CURRENT.condition], lang);
    const alert = localize(WEATHER_ALERT, lang);
    const text = `${CURRENT.location}: ${CURRENT.temp}°C, ${cond}. Humidity ${CURRENT.humidity}%, wind ${CURRENT.wind} km/h. ${alert}`;
    return { intent, reply: { type: 'text', text }, context: text };
  }

  if (intent === 'prices') {
    const crop = findMentionedCrop(message);
    const rows = (crop ? MARKET_ROWS.filter((r) => r.cropId === crop.id) : MARKET_ROWS.slice(0, 3));
    const items = rows.map((r) => {
      const cropObj = CROPS.find((c) => c.id === r.cropId);
      const name = cropObj ? localize(cropObj, lang) : r.crop;
      const arrow = r.trend === 'up' ? '▲' : r.trend === 'down' ? '▼' : '—';
      return `${name}: ₹${r.price.toLocaleString('en-IN')}/quintal (${arrow} ${Math.abs(r.change)}%)`;
    });
    const text = "Today's prices in " + (rows[0] ? rows[0].market : 'your market') + ':';
    return { intent, reply: { type: 'list', text, items }, context: `${text} ${items.join('; ')}` };
  }

  if (intent === 'schemes') {
    const scheme = findMentionedScheme(message) || SCHEMES[0];
    const name = localize(scheme.name, lang);
    const benefit = localize(scheme.benefit, lang);
    const text = `${name}: ${benefit} Eligibility: ${scheme.eligibility[0]}. Open Schemes → ${name} for full details and how to apply.`;
    return { intent, reply: { type: 'text', text }, context: text };
  }

  if (intent === 'calendar') {
    const crop = findMentionedCrop(message) || CROPS[0];
    const calendar = CROP_CALENDARS[crop.id];
    const stageNames = STAGE_NAMES[lang] || STAGE_NAMES.en;
    const sow = calendar[1];
    const harvest = calendar[4];
    const cropName = localize(crop, lang);
    const text = `For ${cropName}: ${stageNames[1]} in ${sow.months} (${sow.tip}) Expect ${stageNames[4].toLowerCase()} around ${harvest.months}.`;
    return { intent, reply: { type: 'text', text }, context: text };
  }

  if (intent === 'pest') {
    const text = PEST_ADVICE[lang] || PEST_ADVICE.en;
    return { intent, reply: { type: 'text', text }, context: text };
  }

  return { intent: 'fallback', reply: { type: 'text', text: FALLBACK[lang] || FALLBACK.en }, context: 'No specific topic matched; listed available capabilities.' };
}

module.exports = { classifyIntent, buildGroundedReply };
