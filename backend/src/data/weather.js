const CURRENT = {
  location: 'Guntur, Andhra Pradesh',
  temp: 31,
  condition: 'partly',
  humidity: 68,
  wind: 12,
};

const CONDITION_LABEL = {
  sunny: { en: 'Sunny', te: 'ఎండ', hi: 'धूप' },
  cloudy: { en: 'Cloudy', te: 'మేఘావృతం', hi: 'बादल' },
  rainy: { en: 'Rainy', te: 'వర్షం', hi: 'बारिश' },
  partly: { en: 'Partly Cloudy', te: 'పాక్షిక మేఘావృతం', hi: 'आंशिक बादल' },
};

const FORECAST = [
  { day: 'Thu', high: 29, low: 23, cond: 'rainy' },
  { day: 'Fri', high: 28, low: 22, cond: 'rainy' },
  { day: 'Sat', high: 31, low: 24, cond: 'cloudy' },
  { day: 'Sun', high: 33, low: 25, cond: 'sunny' },
  { day: 'Mon', high: 33, low: 25, cond: 'sunny' },
  { day: 'Tue', high: 32, low: 24, cond: 'partly' },
  { day: 'Wed', high: 30, low: 23, cond: 'cloudy' },
];

const WEATHER_ADVISORY = [
  { en: 'Rain expected Thu–Fri. Delay any pesticide or fertilizer spraying until it clears.', te: 'గురు-శుక్రవారాల్లో వర్షం. తుఫాను తగ్గే వరకు పురుగుమందులు, ఎరువుల పిచికారీ వాయిదా వేయండి.', hi: 'गुरु–शुक्रवार बारिश की संभावना। कीटनाशक या उर्वरक छिड़काव मौसम साफ़ होने तक टालें।' },
  { en: 'Humidity staying above 65% this week — watch chilli and cotton for early fungal disease.', te: 'ఈ వారం తేమ 65% పైనే ఉంటుంది — మిర్చి, పత్తిలో శిలీంధ్ర వ్యాధుల కోసం గమనించండి.', hi: 'इस सप्ताह नमी 65% से ऊपर रहेगी — मिर्च और कपास में फफूंद रोग के लिए नज़र रखें।' },
  { en: 'Clear skies from Sunday — a good window to plan harvest or land preparation work.', te: 'ఆదివారం నుండి ఆకాశం నిర్మలంగా ఉంటుంది — కోత లేదా భూమి తయారీకి మంచి సమయం.', hi: 'रविवार से आसमान साफ़ — कटाई या भूमि तैयारी की योजना बनाने का अच्छा समय।' },
];

const WEATHER_ALERT = {
  en: 'Heavy rain expected Thursday and Friday — secure harvested stock and delay spraying.',
  te: 'గురు, శుక్రవారాల్లో భారీ వర్షం అవకాశం — నిల్వ ఉంచిన పంటను భద్రపరచండి, పిచికారీ వాయిదా వేయండి.',
  hi: 'गुरुवार-शुक्रवार भारी बारिश की संभावना — कटी फसल सुरक्षित रखें और छिड़काव टालें।',
};

module.exports = { CURRENT, CONDITION_LABEL, FORECAST, WEATHER_ADVISORY, WEATHER_ALERT };
