'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n';

export default function TranslationProvider({ children }) {
  const params = useParams();
  const locale = params?.locale || 'en';

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  useEffect(() => {
    // Set document direction based on locale
    if (typeof document !== 'undefined') {
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 