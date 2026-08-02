// Structured government scheme data. This is the "schema-aware grounding" layer described
// in the research paper (govt scheme PDFs -> structured facts, fused into chat responses
// instead of relying on an LLM's un-grounded knowledge).
const SCHEMES = [
  {
    id: 'pmkisan', level: 'central', levelLabel: 'Central',
    name: { en: 'PM-KISAN', te: 'పీఎం-కిసాన్', hi: 'पीएम-किसान' },
    benefit: {
      en: '₹6,000/year direct income support, paid in 3 installments of ₹2,000 each.',
      te: 'ఏడాదికి ₹6,000 ప్రత్యక్ష ఆదాయ సహాయం, 3 వాయిదాలలో ₹2,000 చొప్పున.',
      hi: '₹6,000/वर्ष प्रत्यक्ष आय सहायता, ₹2,000 की 3 किस्तों में।',
    },
    eligibility: ['All landholding farmer families', 'Valid Aadhaar-linked bank account', "Land records in the farmer's name"],
    steps: ['Visit pmkisan.gov.in or your nearest Common Service Centre', 'Complete "New Farmer Registration" with Aadhaar', 'Submit land ownership documents for verification', 'Track status using your registration number'],
    documents: ['Aadhaar Card', 'Land Ownership Papers', 'Bank Passbook'],
    helpline: '155261',
  },
  {
    id: 'pmfby', level: 'central', levelLabel: 'Central',
    name: { en: 'Pradhan Mantri Fasal Bima Yojana', te: 'ప్రధాన మంత్రి ఫసల్ బీమా యోజన', hi: 'प्रधानमंत्री फसल बीमा योजना' },
    benefit: {
      en: 'Crop insurance at just 2% premium for Kharif and 1.5% for Rabi crops — covers drought, flood and pest losses.',
      te: 'ఖరీఫ్‌కు 2%, రబీకి 1.5% ప్రీమియంతో పంట బీమా — కరువు, వరద, పురుగుల నష్టాలకు కవరేజ్.',
      hi: 'खरीफ के लिए मात्र 2% और रबी के लिए 1.5% प्रीमियम पर फसल बीमा — सूखा, बाढ़ और कीट क्षति को कवर करता है।',
    },
    eligibility: ['Farmers growing notified crops', 'Both loanee and non-loanee farmers', 'Sharecroppers and tenant farmers included'],
    steps: ['Apply through your bank or nearest CSC before the season cut-off date', 'Declare the crop and area sown', 'Pay your share of the premium', 'Report crop loss within 72 hours of the event'],
    documents: ['Aadhaar Card', 'Land Records or Tenancy Agreement', 'Bank Account Details'],
    helpline: '14447',
  },
  {
    id: 'kcc', level: 'central', levelLabel: 'Central',
    name: { en: 'Kisan Credit Card (KCC)', te: 'కిసాన్ క్రెడిట్ కార్డ్', hi: 'किसान क्रेडिट कार्ड' },
    benefit: {
      en: 'Short-term credit up to ₹3 lakh at 4% interest per year with timely repayment.',
      te: 'సకాలంలో చెల్లిస్తే ఏటా 4% వడ్డీకి ₹3 లక్షల వరకు స్వల్పకాలిక రుణం.',
      hi: 'समय पर भुगतान करने पर ₹3 लाख तक अल्पकालिक ऋण, 4% वार्षिक ब्याज पर।',
    },
    eligibility: ['All farmers, tenant farmers and sharecroppers', 'Self-help group members involved in farming'],
    steps: ["Apply at any nearby bank branch or the bank's online portal", 'Submit land and identity documents', 'Receive your card within 2 weeks of approval'],
    documents: ['Aadhaar Card', 'Land Documents', 'Passport-size Photo'],
    helpline: '1800-180-1551',
  },
  {
    id: 'soilhealth', level: 'central', levelLabel: 'Central',
    name: { en: 'Soil Health Card Scheme', te: 'నేల ఆరోగ్య కార్డు పథకం', hi: 'मृदा स्वास्थ्य कार्ड योजना' },
    benefit: {
      en: 'Free soil testing every 2 years with crop-wise fertilizer and nutrient recommendations.',
      te: 'ప్రతి 2 సంవత్సరాలకు ఉచిత నేల పరీక్ష, పంట వారీగా ఎరువుల సిఫార్సులతో.',
      hi: 'हर 2 वर्ष में निःशुल्क मृदा परीक्षण, फसल-वार उर्वरक अनुशंसाओं के साथ।',
    },
    eligibility: ['Every farmer with cultivable land is eligible', 'No cost for sample collection or testing'],
    steps: ['Contact your local Agriculture Extension Officer', 'Provide a soil sample from your field', 'Receive your Soil Health Card within a few weeks'],
    documents: ['Land Details', 'Aadhaar Card'],
    helpline: '1800-180-1551',
  },
  {
    id: 'annadata', level: 'ap', levelLabel: 'Andhra Pradesh',
    name: { en: 'Annadata Sukhibhava', te: 'అన్నదాత సుఖీభవ', hi: 'अन्नदाता सुखीभव' },
    benefit: {
      en: '₹20,000 per farmer family every year (includes ₹6,000 from PM-KISAN), in 3 installments.',
      te: 'ఏటా ప్రతి రైతు కుటుంబానికి ₹20,000 (పీఎం-కిసాన్ ₹6,000తో సహా), 3 వాయిదాలలో.',
      hi: 'हर वर्ष प्रति किसान परिवार ₹20,000 (पीएम-किसान के ₹6,000 सहित), 3 किस्तों में।',
    },
    eligibility: ['Permanent resident of Andhra Pradesh', 'Small and marginal farmer families', 'Tenant and ROFR cultivators included'],
    steps: ['Visit your nearest Rythu Bharosa Kendra (RBK)', 'Complete e-KYC and land verification', 'Link Aadhaar to your bank account'],
    documents: ['Aadhaar Card', 'Land Records', 'Bank Passbook'],
    helpline: '1902',
  },
  {
    id: 'rythubharosats', level: 'ts', levelLabel: 'Telangana',
    name: { en: 'Rythu Bharosa', te: 'రైతు భరోసా', hi: 'रैतु भरोसा' },
    benefit: {
      en: '₹12,000 per acre every year, credited in two instalments before Kharif and Rabi.',
      te: 'ఏటా ఎకరాకు ₹12,000, ఖరీఫ్ మరియు రబీకి ముందు రెండు వాయిదాలలో జమ.',
      hi: 'हर वर्ष प्रति एकड़ ₹12,000, खरीफ और रबी से पहले दो किस्तों में जमा।',
    },
    eligibility: ['Permanent resident of Telangana', 'Owner of actively cultivated agricultural land', 'Registered tenant farmers with valid lease'],
    steps: ['Visit your nearest Praja Palana Centre or CSC', 'Verify land records on the Bhu Bharati portal', 'Link Aadhaar to your bank account for direct transfer'],
    documents: ['Aadhaar Card', 'Pattadar Passbook', 'Bank Passbook'],
    helpline: '040-2338-3520',
  },
];

module.exports = { SCHEMES };
