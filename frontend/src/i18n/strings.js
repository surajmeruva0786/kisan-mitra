// UI copy for the 3 fully-translated languages (English, Telugu, Hindi — matching the
// languages the backend data is localized in). The other 9 languages in LANGUAGES get
// their nav labels from NAV_FALLBACK below and fall back to English for everything else.
export const UI = {
  en: {
    appName: 'Kisan-Mitra', tagline: 'Your Farming Companion', govtLine: 'A joint initiative with the AP & Telangana Departments of Agriculture',
    navChat: 'Chat', navSchemes: 'Schemes', navCalendar: 'Calendar', navPrices: 'Prices', navWeather: 'Weather', navSettings: 'Settings',
    getStarted: 'Get Started', next: 'Next', back: 'Back', skip: 'Skip', finishSetup: 'Finish Setup',
    selectLanguageTitle: 'Select Your Language', selectLanguageSub: "Choose the language you're most comfortable with",
    selectStateTitle: 'Select Your State', selectStateSub: 'This helps us show the right schemes and mandi prices', stateAP: 'Andhra Pradesh', stateTS: 'Telangana', otherStateLabel: 'Other State', districtLabel: 'District', districtPlaceholder: 'e.g., Guntur',
    profileTitle: 'Tell Us About Your Farm', profileSub: 'This helps us personalize your advice', nameLabel: 'Your Name', namePlaceholder: 'e.g., Ramesh Kumar', cropsLabel: 'Your Main Crops', landSizeLabel: 'Land Size', land1: 'Under 1 acre', land2: '1–5 acres', land3: '5+ acres',
    accessTitle: 'Make It Comfortable to Read', accessSub: 'You can always change these later in Settings', textSizeLabel: 'Text Size', textNormal: 'Normal', textLarge: 'Large', textXLarge: 'Extra Large', sampleText: "Today's cotton price is ₹7,150 per quintal.", highContrastLabel: 'High Contrast', highContrastSub: 'Bolder text and stronger borders', voiceAssistLabel: 'Voice Assistance', voiceAssistSub: 'Ask questions using your voice',
    chatSubGreeting: 'Ask me anything about farming', typeMessage: 'Type your message...', listening: 'Listening...', quickWeather: 'Weather Today', quickPrices: 'Market Prices', quickSchemes: 'Govt Schemes', quickCalendar: 'Crop Calendar', quickPest: 'Pest Help',
    schemesTitle: 'Scheme Explorer', filterAll: 'All', filterCentral: 'Central', filterAP: 'Andhra Pradesh', filterTS: 'Telangana', viewDetails: 'View Details', benefitLabel: 'Benefit', eligibilityLabel: 'Eligibility', howToApplyLabel: 'How to Apply', documentsLabel: 'Documents Needed', helplineLabel: 'Helpline', call: 'Call', backLabel: 'Back',
    calendarTitle: 'Crop Calendar', calendarSub: 'Season-wise stages for your crop',
    pricesTitle: 'Market Prices', searchPlaceholder: 'Search crop or market...', perQuintal: '/quintal', lastUpdated: 'Last updated: Today, 7:00 AM', nearbyMarkets: 'Nearby Markets',
    weatherTitle: 'Weather', humidityLabel: 'Humidity', windLabel: 'Wind', forecastTitle: '7-Day Forecast', advisoryTitle: 'Farming Advisory',
    settingsTitle: 'Settings', profileSection: 'Profile', languageSection: 'Language', accessibilitySection: 'Accessibility', notificationsSection: 'Notifications', helpSection: 'Help & Support', aboutSection: 'About', editProfile: 'Edit Profile', weatherAlerts: 'Weather Alerts', priceAlerts: 'Price Alerts', schemeUpdates: 'Scheme Updates', callHelpline: 'Call Helpline', replayOnboarding: 'Replay Onboarding Tour', poweredBy: 'Powered by Orbis Systems', version: 'Kisan-Mitra v1.0.0',
  },
  te: {
    appName: 'కిసాన్-మిత్ర', tagline: 'మీ వ్యవసాయ సహాయకుడు', govtLine: 'ఆంధ్రప్రదేశ్ & తెలంగాణ వ్యవసాయ శాఖల సంయుక్త కార్యక్రమం',
    navChat: 'చాట్', navSchemes: 'పథకాలు', navCalendar: 'క్యాలెండర్', navPrices: 'ధరలు', navWeather: 'వాతావరణం', navSettings: 'సెట్టింగ్‌లు',
    getStarted: 'ప్రారంభించండి', next: 'తదుపరి', back: 'వెనుకకు', skip: 'దాటవేయి', finishSetup: 'పూర్తి చేయండి',
    selectLanguageTitle: 'మీ భాష ఎంచుకోండి', selectLanguageSub: 'మీకు నచ్చిన భాషను ఎంచుకోండి',
    selectStateTitle: 'మీ రాష్ట్రం ఎంచుకోండి', selectStateSub: 'సరైన పథకాలు, మార్కెట్ ధరలు చూపడానికి ఇది సహాయపడుతుంది', stateAP: 'ఆంధ్రప్రదేశ్', stateTS: 'తెలంగాణ', otherStateLabel: 'ఇతర రాష్ట్రం', districtLabel: 'జిల్లా', districtPlaceholder: 'ఉదా., గుంటూరు',
    profileTitle: 'మీ వ్యవసాయం గురించి చెప్పండి', profileSub: 'ఇది మీకు తగిన సలహా ఇవ్వడానికి సహాయపడుతుంది', nameLabel: 'మీ పేరు', namePlaceholder: 'ఉదా., రమేష్ కుమార్', cropsLabel: 'మీ ప్రధాన పంటలు', landSizeLabel: 'భూమి విస్తీర్ణం', land1: '1 ఎకరం లోపు', land2: '1–5 ఎకరాలు', land3: '5+ ఎకరాలు',
    accessTitle: 'చదవడానికి సౌకర్యంగా చేసుకోండి', accessSub: 'వీటిని తర్వాత సెట్టింగ్‌లలో మార్చుకోవచ్చు', textSizeLabel: 'అక్షర పరిమాణం', textNormal: 'సాధారణ', textLarge: 'పెద్దది', textXLarge: 'మరింత పెద్దది', sampleText: 'ఈరోజు పత్తి ధర క్వింటాల్‌కు ₹7,150.', highContrastLabel: 'అధిక కాంట్రాస్ట్', highContrastSub: 'మందమైన అక్షరాలు, బలమైన అంచులు', voiceAssistLabel: 'వాయిస్ సహాయం', voiceAssistSub: 'మీ స్వరంతో ప్రశ్నలు అడగండి',
    chatSubGreeting: 'వ్యవసాయం గురించి ఏదైనా అడగండి', typeMessage: 'మీ సందేశం టైప్ చేయండి...', listening: 'వింటున్నాను...', quickWeather: 'ఈరోజు వాతావరణం', quickPrices: 'మార్కెట్ ధరలు', quickSchemes: 'ప్రభుత్వ పథకాలు', quickCalendar: 'పంట క్యాలెండర్', quickPest: 'పురుగుల సహాయం',
    schemesTitle: 'పథకాల అన్వేషణ', filterAll: 'అన్నీ', filterCentral: 'కేంద్రం', filterAP: 'ఆంధ్రప్రదేశ్', filterTS: 'తెలంగాణ', viewDetails: 'వివరాలు చూడండి', benefitLabel: 'ప్రయోజనం', eligibilityLabel: 'అర్హత', howToApplyLabel: 'ఎలా దరఖాస్తు చేయాలి', documentsLabel: 'అవసరమైన పత్రాలు', helplineLabel: 'హెల్ప్‌లైన్', call: 'కాల్ చేయండి', backLabel: 'వెనుకకు',
    calendarTitle: 'పంట క్యాలెండర్', calendarSub: 'మీ పంట కోసం సీజన్ వారీగా దశలు',
    pricesTitle: 'మార్కెట్ ధరలు', searchPlaceholder: 'పంట లేదా మార్కెట్ వెతకండి...', perQuintal: '/క్వింటాల్', lastUpdated: 'చివరిసారి నవీకరణ: ఈరోజు, 7:00 AM', nearbyMarkets: 'సమీప మార్కెట్లు',
    weatherTitle: 'వాతావరణం', humidityLabel: 'తేమ', windLabel: 'గాలి', forecastTitle: '7-రోజుల సూచన', advisoryTitle: 'వ్యవసాయ సలహా',
    settingsTitle: 'సెట్టింగ్‌లు', profileSection: 'ప్రొఫైల్', languageSection: 'భాష', accessibilitySection: 'యాక్సెసిబిలిటీ', notificationsSection: 'నోటిఫికేషన్‌లు', helpSection: 'సహాయం', aboutSection: 'గురించి', editProfile: 'ప్రొఫైల్ సవరించండి', weatherAlerts: 'వాతావరణ హెచ్చరికలు', priceAlerts: 'ధర హెచ్చరికలు', schemeUpdates: 'పథక నవీకరణలు', callHelpline: 'హెల్ప్‌లైన్‌కు కాల్ చేయండి', replayOnboarding: 'ఆన్‌బోర్డింగ్ మళ్లీ చూడండి', poweredBy: 'Orbis Systems సహకారంతో', version: 'కిసాన్-మిత్ర v1.0.0',
  },
  hi: {
    appName: 'किसान-मित्र', tagline: 'आपका कृषि सहायक', govtLine: 'आंध्र प्रदेश और तेलंगाना कृषि विभागों की संयुक्त पहल',
    navChat: 'चैट', navSchemes: 'योजनाएँ', navCalendar: 'कैलेंडर', navPrices: 'भाव', navWeather: 'मौसम', navSettings: 'सेटिंग्स',
    getStarted: 'शुरू करें', next: 'आगे', back: 'पीछे', skip: 'छोड़ें', finishSetup: 'पूर्ण करें',
    selectLanguageTitle: 'अपनी भाषा चुनें', selectLanguageSub: 'जिस भाषा में आप सहज हों उसे चुनें',
    selectStateTitle: 'अपना राज्य चुनें', selectStateSub: 'इससे सही योजनाएँ और मंडी भाव दिखाने में मदद मिलती है', stateAP: 'आंध्र प्रदेश', stateTS: 'तेलंगाना', otherStateLabel: 'अन्य राज्य', districtLabel: 'ज़िला', districtPlaceholder: 'जैसे, गुंटूर',
    profileTitle: 'अपने खेत के बारे में बताएँ', profileSub: 'इससे आपको सही सलाह देने में मदद मिलेगी', nameLabel: 'आपका नाम', namePlaceholder: 'जैसे, रमेश कुमार', cropsLabel: 'आपकी मुख्य फ़सलें', landSizeLabel: 'भूमि का आकार', land1: '1 एकड़ से कम', land2: '1–5 एकड़', land3: '5+ एकड़',
    accessTitle: 'पढ़ने में आसान बनाएँ', accessSub: 'इन्हें बाद में सेटिंग्स में बदला जा सकता है', textSizeLabel: 'टेक्स्ट साइज़', textNormal: 'सामान्य', textLarge: 'बड़ा', textXLarge: 'अतिरिक्त बड़ा', sampleText: 'आज कपास का भाव ₹7,150 प्रति क्विंटल है।', highContrastLabel: 'हाई कॉन्ट्रास्ट', highContrastSub: 'गहरे अक्षर, मज़बूत बॉर्डर', voiceAssistLabel: 'वॉइस सहायता', voiceAssistSub: 'अपनी आवाज़ से सवाल पूछें',
    chatSubGreeting: 'खेती के बारे में कुछ भी पूछें', typeMessage: 'अपना संदेश लिखें...', listening: 'सुन रहा है...', quickWeather: 'आज का मौसम', quickPrices: 'बाज़ार भाव', quickSchemes: 'सरकारी योजनाएँ', quickCalendar: 'फ़सल कैलेंडर', quickPest: 'कीट सहायता',
    schemesTitle: 'योजना खोजक', filterAll: 'सभी', filterCentral: 'केंद्रीय', filterAP: 'आंध्र प्रदेश', filterTS: 'तेलंगाना', viewDetails: 'विवरण देखें', benefitLabel: 'लाभ', eligibilityLabel: 'पात्रता', howToApplyLabel: 'आवेदन कैसे करें', documentsLabel: 'आवश्यक दस्तावेज़', helplineLabel: 'हेल्पलाइन', call: 'कॉल करें', backLabel: 'पीछे',
    calendarTitle: 'फ़सल कैलेंडर', calendarSub: 'आपकी फ़सल के लिए मौसम-वार चरण',
    pricesTitle: 'बाज़ार भाव', searchPlaceholder: 'फ़सल या मंडी खोजें...', perQuintal: '/क्विंटल', lastUpdated: 'अंतिम अपडेट: आज, 7:00 AM', nearbyMarkets: 'नज़दीकी मंडियाँ',
    weatherTitle: 'मौसम', humidityLabel: 'नमी', windLabel: 'हवा', forecastTitle: '7-दिन का पूर्वानुमान', advisoryTitle: 'कृषि सलाह',
    settingsTitle: 'सेटिंग्स', profileSection: 'प्रोफ़ाइल', languageSection: 'भाषा', accessibilitySection: 'सुगम्यता', notificationsSection: 'सूचनाएँ', helpSection: 'सहायता', aboutSection: 'ऐप के बारे में', editProfile: 'प्रोफ़ाइल संपादित करें', weatherAlerts: 'मौसम अलर्ट', priceAlerts: 'भाव अलर्ट', schemeUpdates: 'योजना अपडेट', callHelpline: 'हेल्पलाइन कॉल करें', replayOnboarding: 'ऑनबोर्डिंग फिर देखें', poweredBy: 'Orbis Systems द्वारा संचालित', version: 'किसान-मित्र v1.0.0',
  },
};

// Partial coverage (nav + entry point) for languages the backend data doesn't fully
// localize yet — falls back to English for everything else. Closing this gap for all
// 12 languages is tracked as future work (see CLAUDE.md gap table).
export const NAV_FALLBACK = {
  ta: { navChat: 'அரட்டை', navSchemes: 'திட்டங்கள்', navCalendar: 'நாட்காட்டி', navPrices: 'விலைகள்', navWeather: 'வானிலை', navSettings: 'அமைப்புகள்', getStarted: 'தொடங்குங்கள்' },
  kn: { navChat: 'ಚಾಟ್', navSchemes: 'ಯೋಜನೆಗಳು', navCalendar: 'ಕ್ಯಾಲೆಂಡರ್', navPrices: 'ಬೆಲೆಗಳು', navWeather: 'ಹವಾಮಾನ', navSettings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು', getStarted: 'ಪ್ರಾರಂಭಿಸಿ' },
  mr: { navChat: 'चॅट', navSchemes: 'योजना', navCalendar: 'दिनदर्शिका', navPrices: 'भाव', navWeather: 'हवामान', navSettings: 'सेटिंग्ज', getStarted: 'सुरू करा' },
  bn: { navChat: 'চ্যাট', navSchemes: 'প্রকল্প', navCalendar: 'ক্যালেন্ডার', navPrices: 'দাম', navWeather: 'আবহাওয়া', navSettings: 'সেটিংস', getStarted: 'শুরু করুন' },
  gu: { navChat: 'ચેટ', navSchemes: 'યોજનાઓ', navCalendar: 'કેલેન્ડર', navPrices: 'ભાવ', navWeather: 'હવામાન', navSettings: 'સેટિંગ્સ', getStarted: 'શરૂ કરો' },
  pa: { navChat: 'ਗੱਲਬਾਤ', navSchemes: 'ਯੋਜਨਾਵਾਂ', navCalendar: 'ਕੈਲੰਡਰ', navPrices: 'ਕੀਮਤਾਂ', navWeather: 'ਮੌਸਮ', navSettings: 'ਸੈਟਿੰਗਾਂ', getStarted: 'ਸ਼ੁਰੂ ਕਰੋ' },
  or: { navChat: 'ଚାଟ୍', navSchemes: 'ଯୋଜନା', navCalendar: 'କ୍ୟାଲେଣ୍ଡର୍', navPrices: 'ମୂଲ୍ୟ', navWeather: 'ପାଣିପାଗ', navSettings: 'ସେଟିଂସ୍', getStarted: 'ଆରମ୍ଭ କରନ୍ତୁ' },
  ml: { navChat: 'ചാറ്റ്', navSchemes: 'പദ്ധതികൾ', navCalendar: 'കലണ്ടർ', navPrices: 'വിലകൾ', navWeather: 'കാലാവസ്ഥ', navSettings: 'ക്രമീകരണങ്ങൾ', getStarted: 'ആരംഭിക്കുക' },
  ur: { navChat: 'چیٹ', navSchemes: 'اسکیمیں', navCalendar: 'کیلنڈر', navPrices: 'قیمتیں', navWeather: 'موسم', navSettings: 'ترتیبات', getStarted: 'شروع کریں' },
};
