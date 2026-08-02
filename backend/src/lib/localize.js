/** Picks the string for `lang` out of a { en, te, hi, ... } map, falling back to English. */
function localize(map, lang) {
  if (!map) return '';
  return map[lang] || map.en || '';
}

module.exports = { localize };
