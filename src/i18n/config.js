import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Authentication
      login: 'Login',
      phoneNumber: 'Phone Number',
      enterPhone: 'Enter farmer phone number',
      sendOTP: 'Send OTP',
      verifyOTP: 'Verify OTP',
      enterOTP: 'Enter 6-digit OTP',
      invalidPhone: 'Please enter a valid phone number',
      invalidOTP: 'Please enter a valid OTP',
      
      // Navigation
      home: 'Home',
      dashboard: 'Dashboard',
      graphs: 'Graphs',
      cropAdvisory: 'Crop Advisory',
      knowledgeLibrary: 'Knowledge Library',
      logout: 'Logout',
      language: 'Language',
      
  // Dashboard
  dashboardSubtitle: 'Overview of farmer information and farm details',
  nextScheduledConsultation: 'Next scheduled consultation:',
  farmerProfile: 'Farmer Profile',
  location: 'Location',
  soilType: 'Soil Type',
  cropType: 'Crop Type',
  irrigationMethod: 'Irrigation Method',
  cropStage: 'Crop Stage',
  farmSize: 'Farm Size',
  nextCall: 'Next Call',
  acres: 'acres',

  // Graphs
  cropYieldTrends: 'Crop Yield Trends',
  rainfallPattern: 'Rainfall Pattern',
  incomeVsExpenses: 'Income vs Expenses',
  cropDistribution: 'Crop Distribution',
  farmAnalyticsSubtitle: 'Farm analytics and performance metrics',
  wheat: 'Wheat',
  cotton: 'Cotton',
  rice: 'Rice',
  others: 'Others',
      
  // Crop Advisory
  recommendations: 'Recommendations',
  basedOnProfile: 'Based on your soil type, crop stage, and irrigation method',
  irrigationAdvisory: 'Irrigation',
  soilAdvisory: 'Soil',
  pestAdvisory: 'Pest',
  weatherAdvisory: 'Weather',
  optimalIrrigation: 'Optimal irrigation schedule for {{crop}}',
  irrigationDesc: 'Based on your {{method}} system and current {{stage}} stage, water every 2-3 days with 1-2 inches per week.',
  soilManagement: 'Soil management for {{soil}}',
  soilDesc: 'Your {{soil}} soil requires specific nutrient management. Consider adding organic matter and phosphorus supplements.',
  pestControl: 'Pest control measures',
  pestDesc: 'Monitor for common pests during {{stage}} stage. Use integrated pest management approaches for sustainable control.',
  weatherDesc: 'Upcoming rainfall expected in 2-3 days. Adjust irrigation schedule accordingly and ensure proper drainage.',
  personalizedAdvice: 'Personalized advice for {{name}}\'s {{size}} acre farm growing {{crop}} using {{method}} on {{soil}} soil.',
  highPriority: 'High Priority',
  mediumPriority: 'Medium Priority',
  lowPriority: 'Low Priority',
      
  // Knowledge Library
  faqs: 'Frequently Asked Questions',
  videos: 'Educational Videos',
  downloads: 'Downloads',
  faq1Q: 'How often should I water my crops during flowering stage?',
  faq1A: 'During flowering stage, maintain consistent soil moisture. Water 2-3 times per week with 1-2 inches of water, depending on weather conditions and soil type.',
  faq2Q: 'What are the signs of pest infestation in crops?',
  faq2A: 'Look for yellowing leaves, holes in foliage, stunted growth, wilting, and visible insects or larvae on plants.',
  faq3Q: 'How do I improve soil fertility naturally?',
  faq3A: 'Use organic compost, crop rotation, cover crops, and avoid excessive chemical fertilizers. Add organic matter regularly.',
      
      // Common
      welcome: 'Welcome',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      save: 'Save',
    }
  },
  hi: {
    translation: {
      // Authentication
      login: 'लॉगिन',
      phoneNumber: 'फोन नंबर',
      enterPhone: 'किसान का फोन नंबर दर्ज करें',
      sendOTP: 'OTP भेजें',
      verifyOTP: 'OTP सत्यापित करें',
      enterOTP: '6 अंकीय OTP दर्ज करें',
      invalidPhone: 'कृपया एक वैध फोन नंबर दर्ज करें',
      invalidOTP: 'कृपया एक वैध OTP दर्ज करें',
      
      // Navigation
      home: 'घर',
      dashboard: 'डैशबोर्ड',
      graphs: 'ग्राफ',
      cropAdvisory: 'फसल सलाह',
      knowledgeLibrary: 'ज्ञान पुस्तकालय',
      logout: 'लॉग आउट',
      language: 'भाषा',
      
  // Dashboard
  dashboardSubtitle: 'किसान की जानकारी और खेत के विवरण का अवलोकन',
  nextScheduledConsultation: 'अगली निर्धारित परामर्श:',
  farmerProfile: 'किसान प्रोफाइल',
  location: 'स्थान',
  soilType: 'मिट्टी का प्रकार',
  cropType: 'फसल का प्रकार',
  irrigationMethod: 'सिंचाई विधि',
  cropStage: 'फसल चरण',
  farmSize: 'खेत का आकार',
  nextCall: 'अगली कॉल',
  acres: 'एकड़',

  // Graphs
  cropYieldTrends: 'फसल उपज प्रवृत्तियाँ',
  rainfallPattern: 'वर्षा पैटर्न',
  incomeVsExpenses: 'आय बनाम खर्च',
  cropDistribution: 'फसल वितरण',
  farmAnalyticsSubtitle: 'फार्म विश्लेषण और प्रदर्शन मेट्रिक्स',
  wheat: 'गेहूं',
  cotton: 'कपास',
  rice: 'चावल',
  others: 'अन्य',
      
  // Crop Advisory
  recommendations: 'सिफारिशें',
  basedOnProfile: 'आपकी मिट्टी के प्रकार, फसल चरण और सिंचाई विधि के आधार पर',
  irrigationAdvisory: 'सिंचाई',
  soilAdvisory: 'मिट्टी',
  pestAdvisory: 'कीट',
  weatherAdvisory: 'मौसम',
  optimalIrrigation: '{{crop}} के लिए आदर्श सिंचाई अनुसूची',
  irrigationDesc: 'आपकी {{method}} प्रणाली और वर्तमान {{stage}} चरण के आधार पर, हर 2-3 दिन में 1-2 इंच पानी दें।',
  soilManagement: '{{soil}} के लिए मिट्टी प्रबंधन',
  soilDesc: 'आपकी {{soil}} मिट्टी के लिए विशिष्ट पोषक तत्व प्रबंधन आवश्यक है। जैविक पदार्थ और फास्फोरस जोड़ने पर विचार करें।',
  pestControl: 'कीट नियंत्रण उपाय',
  pestDesc: 'सामान्य कीटों की निगरानी करें ({{stage}} चरण में)। सतत नियंत्रण के लिए एकीकृत कीट प्रबंधन अपनाएं।',
  weatherDesc: 'आगामी 2-3 दिनों में वर्षा की संभावना। सिंचाई अनुसूची समायोजित करें और उचित जल निकासी सुनिश्चित करें।',
  personalizedAdvice: '{{name}} के {{size}} एकड़ खेत के लिए व्यक्तिगत सलाह, जिसमें {{crop}} उगाई जा रही है, {{method}} का उपयोग हो रहा है और {{soil}} मिट्टी है।',
  highPriority: 'उच्च प्राथमिकता',
  mediumPriority: 'मध्यम प्राथमिकता',
  lowPriority: 'निम्न प्राथमिकता',
      
  // Knowledge Library
  faqs: 'अक्सर पूछे जाने वाले प्रश्न',
  videos: 'शैक्षिक वीडियो',
  downloads: 'डाउनलोड',
  faq1Q: 'फूल आने के दौरान मुझे अपनी फसल को कितनी बार पानी देना चाहिए?',
  faq1A: 'फूल आने के दौरान, मिट्टी में लगातार नमी बनाए रखें। मौसम की स्थिति और मिट्टी के प्रकार के आधार पर सप्ताह में 2-3 बार 1-2 इंच पानी दें।',
  faq2Q: 'फसलों में कीट संक्रमण के क्या लक्षण हैं?',
  faq2A: 'पत्तियों का पीला होना, पत्तियों में छेद, बौनी वृद्धि, मुरझाना, और पौधों पर दिखाई देने वाले कीड़े या लार्वा देखें।',
  faq3Q: 'मैं प्राकृतिक रूप से मिट्टी की उर्वरता कैसे बढ़ाऊं?',
  faq3A: 'जैविक खाद, फसल चक्र, आवरण फसलों का उपयोग करें, और अत्यधिक रासायनिक उर्वरकों से बचें। नियमित रूप से जैविक पदार्थ जोड़ें।',
      
      // Common
      welcome: 'स्वागत',
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि',
      success: 'सफलता',
      cancel: 'रद्द करें',
      save: 'सेव करें',
    }
  },
  mr: {
    translation: {
      // Authentication
      login: 'लॉगिन',
      phoneNumber: 'फोन नंबर',
      enterPhone: 'शेतकऱ्याचा फोन नंबर टाका',
      sendOTP: 'OTP पाठवा',
      verifyOTP: 'OTP सत्यापित करा',
      enterOTP: '6 अंकी OTP टाका',
      invalidPhone: 'कृपया वैध फोन नंबर टाका',
      invalidOTP: 'कृपया वैध OTP टाका',
      
      // Navigation
      home: 'घर',
      dashboard: 'डॅशबोर्ड',
      graphs: 'आलेख',
      cropAdvisory: 'पीक सल्ला',
      knowledgeLibrary: 'ज्ञान पुस्तकालय',
      logout: 'लॉग आउट',
      language: 'भाषा',
      
  // Dashboard
  dashboardSubtitle: 'शेतकरी माहिती आणि शेत तपशीलांचा आढावा',
  nextScheduledConsultation: 'पुढील नियोजित सल्लामसलत:',
  farmerProfile: 'शेतकरी प्रोफाइल',
  location: 'स्थान',
  soilType: 'मातीचा प्रकार',
  cropType: 'पिकाचा प्रकार',
  irrigationMethod: 'सिंचन पद्धत',
  cropStage: 'पीक अवस्था',
  farmSize: 'शेताचा आकार',
  nextCall: 'पुढील कॉल',
  acres: 'एकर',

  // Graphs
  cropYieldTrends: 'पीक उत्पादन प्रवृत्ती',
  rainfallPattern: 'पावसाचा नमुना',
  incomeVsExpenses: 'उत्पन्न वि खर्च',
  cropDistribution: 'पीक वितरण',
  farmAnalyticsSubtitle: 'शेती विश्लेषण आणि कार्यप्रदर्शन मेट्रिक्स',
  wheat: 'गहू',
  cotton: 'कापूस',
  rice: 'तांदूळ',
  others: 'इतर',
      
  // Crop Advisory
  recommendations: 'शिफारसी',
  basedOnProfile: 'तुमच्या मातीचा प्रकार, पीक अवस्था आणि सिंचन पद्धतीच्या आधारे',
  irrigationAdvisory: 'सिंचन',
  soilAdvisory: 'माती',
  pestAdvisory: 'कीड',
  weatherAdvisory: 'हवामान',
  optimalIrrigation: '{{crop}} साठी आदर्श सिंचन वेळापत्रक',
  irrigationDesc: 'तुमच्या {{method}} प्रणाली आणि सध्याच्या {{stage}} अवस्थेनुसार, दर 2-3 दिवसांनी 1-2 इंच पाणी द्या.',
  soilManagement: '{{soil}} साठी माती व्यवस्थापन',
  soilDesc: 'तुमच्या {{soil}} मातीसाठी विशिष्ट पोषक व्यवस्थापन आवश्यक आहे. सेंद्रिय पदार्थ आणि फॉस्फरस घालण्याचा विचार करा.',
  pestControl: 'कीड नियंत्रण उपाय',
  pestDesc: '{{stage}} अवस्थेत सामान्य कीडांसाठी देखरेख करा. शाश्वत नियंत्रणासाठी एकत्रित कीड व्यवस्थापन वापरा.',
  weatherDesc: 'पुढील 2-3 दिवसांत पावसाची शक्यता. सिंचन वेळापत्रक समायोजित करा आणि योग्य निचरा सुनिश्चित करा.',
  personalizedAdvice: '{{name}} यांच्या {{size}} एकर शेतासाठी वैयक्तिक सल्ला, ज्यामध्ये {{crop}} घेतले जात आहे, {{method}} वापरले जात आहे आणि {{soil}} माती आहे.',
  highPriority: 'उच्च प्राधान्य',
  mediumPriority: 'मध्यम प्राधान्य',
  lowPriority: 'कमी प्राधान्य',
      
  // Knowledge Library
  faqs: 'वारंवार विचारले जाणारे प्रश्न',
  videos: 'शैक्षणिक व्हिडिओ',
  downloads: 'डाउनलोड',
  faq1Q: 'फुलांच्या काळात मी माझ्या पिकांना किती वेळा पाणी द्यावे?',
  faq1A: 'फुलांच्या काळात मातीत सातत्याने ओलावा ठेवा. हवामान परिस्थिती आणि मातीच्या प्रकारावर अवलंबून आठवड्यातून 2-3 वेळा 1-2 इंच पाणी द्या.',
  faq2Q: 'पिकांमध्ये किडींच्या संक्रमणाची लक्षणे काय आहेत?',
  faq2A: 'पानांचे पिवळे होणे, पानांमध्ये छिद्रे, बटू वाढ, कोमेजणे आणि झाडांवर दिसणारे किडे किंवा अळ्या पहा.',
  faq3Q: 'मी नैसर्गिकरित्या मातीची सुपीकता कशी वाढवू?',
  faq3A: 'सेंद्रिय खत, पीक फिरवणी, आच्छादन पिकांचा वापर करा आणि जास्त रासायनिक खतांचा वापर टाळा. नियमितपणे सेंद्रिय पदार्थ जोडा.',
      
      // Common
      welcome: 'स्वागत',
      loading: 'लोड होत आहे...',
      error: 'त्रुटी',
      success: 'यश',
      cancel: 'रद्द करा',
      save: 'सेव्ह करा',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;