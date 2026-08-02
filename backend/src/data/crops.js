const CROPS = [
  { id: 'paddy', en: 'Paddy (Rice)', te: 'వరి', hi: 'धान' },
  { id: 'cotton', en: 'Cotton', te: 'పత్తి', hi: 'कपास' },
  { id: 'chilli', en: 'Chilli', te: 'మిర్చి', hi: 'मिर्च' },
  { id: 'maize', en: 'Maize', te: 'మొక్కజొన్న', hi: 'मक्का' },
  { id: 'groundnut', en: 'Groundnut', te: 'వేరుశనగ', hi: 'मूंगफली' },
  { id: 'sugarcane', en: 'Sugarcane', te: 'చెరకు', hi: 'गन्ना' },
  { id: 'turmeric', en: 'Turmeric', te: 'పసుపు', hi: 'हल्दी' },
];

const STAGE_NAMES = {
  en: ['Land Preparation', 'Sowing / Planting', 'Fertilizing', 'Pest & Disease Watch', 'Harvest'],
  te: ['భూమి తయారీ', 'విత్తడం / నాటడం', 'ఎరువులు వేయడం', 'పురుగు నివారణ', 'కోత'],
  hi: ['भूमि तैयारी', 'बुवाई / रोपाई', 'उर्वरक डालना', 'कीट निगरानी', 'कटाई'],
};

const CROP_CALENDARS = {
  paddy: [
    { months: 'May', tip: 'Plough the field 2–3 times and level it well for even water retention.' },
    { months: 'Jun', tip: 'Sow pre-germinated seeds in a raised nursery bed.' },
    { months: 'Jul–Aug', tip: 'Transplant 25–30 day seedlings; apply urea and DAP as per your soil health card.' },
    { months: 'Aug–Sep', tip: 'Watch for stem borer and brown plant hopper; scout weekly.' },
    { months: 'Oct–Nov', tip: 'Harvest once 80% of grains turn golden-yellow.' },
  ],
  cotton: [
    { months: 'Apr–May', tip: 'Deep plough and add farmyard manure before the first rains.' },
    { months: 'May–Jun', tip: 'Sow Bt cotton seed at 90×60cm spacing after the first good rain.' },
    { months: 'Jul–Aug', tip: 'Split-apply nitrogen in 3 doses through the vegetative stage.' },
    { months: 'Aug–Oct', tip: 'Monitor closely for pink bollworm; install pheromone traps.' },
    { months: 'Nov–Jan', tip: 'Pick in 3–4 rounds as bolls burst open; store in dry conditions.' },
  ],
  chilli: [
    { months: 'Jun–Jul', tip: 'Raise seedlings in a shaded nursery bed for 4–5 weeks.' },
    { months: 'Aug', tip: 'Transplant healthy seedlings at 60×45cm spacing.' },
    { months: 'Sep–Oct', tip: 'Apply potassium-rich fertilizer to support fruit development.' },
    { months: 'Oct–Dec', tip: 'Check leaf undersides weekly for thrips and mites.' },
    { months: 'Jan–Mar', tip: 'Pick pods in 5–6 rounds as they turn deep red.' },
  ],
  maize: [
    { months: 'May–Jun', tip: 'Plough and form ridges for good drainage.' },
    { months: 'Jun', tip: 'Sow seed at 60×20cm spacing after pre-monsoon showers.' },
    { months: 'Jul', tip: 'Top-dress with urea at the knee-high growth stage.' },
    { months: 'Jul–Aug', tip: 'Scout for fall armyworm in the whorl of young plants.' },
    { months: 'Sep–Oct', tip: 'Harvest when husks turn pale brown and kernels harden.' },
  ],
  groundnut: [
    { months: 'May–Jun', tip: 'Plough deep and apply gypsum before sowing.' },
    { months: 'Jun', tip: 'Sow treated seed at 30×10cm spacing at the onset of monsoon.' },
    { months: 'Jul', tip: 'Apply calcium at flowering for healthy pod formation.' },
    { months: 'Aug', tip: 'Watch for leaf miner and early leaf spot disease.' },
    { months: 'Sep–Oct', tip: 'Harvest when leaves start yellowing and pods mature.' },
  ],
  sugarcane: [
    { months: 'Jan–Feb', tip: 'Deep plough and prepare ridges and furrows.' },
    { months: 'Feb–Mar', tip: 'Plant healthy 2–3 budded setts treated with fungicide.' },
    { months: 'May–Jun', tip: 'Earth up soil around roots to prevent lodging.' },
    { months: 'Jul–Sep', tip: 'Monitor for early shoot borer and red rot disease.' },
    { months: 'Dec–Feb', tip: 'Harvest at 11–12 months when internodes are fully mature.' },
  ],
  turmeric: [
    { months: 'Apr', tip: 'Plough and form raised beds with organic manure.' },
    { months: 'May', tip: 'Plant healthy rhizomes at 30×25cm spacing.' },
    { months: 'Jul–Aug', tip: 'Apply potash and mulch to retain soil moisture.' },
    { months: 'Sep–Oct', tip: 'Watch for rhizome rot in waterlogged patches.' },
    { months: 'Jan–Feb', tip: 'Harvest 7–9 months after planting when leaves dry up.' },
  ],
};

module.exports = { CROPS, STAGE_NAMES, CROP_CALENDARS };
