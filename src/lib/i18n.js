import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

// Always use a default language for SSR
const defaultLanguage = 'en';

i18n
  .use(initReactI18next)
  .use(resourcesToBackend((language, namespace) => import(`../../public/locales/${language}/${namespace}.json`)))
  .init({
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