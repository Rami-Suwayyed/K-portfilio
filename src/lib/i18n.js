import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations directly instead of using dynamic imports
import enCommon from '../../public/locales/en/common.json';
import arCommon from '../../public/locales/ar/common.json';

// Always use a default language for SSR
const defaultLanguage = 'en';

const resources = {
  en: {
    common: enCommon,
  },
  ar: {
    common: arCommon,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    debug: false,
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Handle language changes only on client side
if (typeof window !== 'undefined') {
  // Set initial language from localStorage after hydration
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    i18n.changeLanguage(savedLanguage);
  }

  // Listen for language changes
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  });
}

export default i18n;