'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const [isSticky, setIsSticky] = useState(false);
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const switchLanguage = (newLocale) => {
    if (newLocale === currentLocale) return;
    i18n.changeLanguage(newLocale);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex items-center">
      {currentLocale === 'en' ? (
        <button
          onClick={() => switchLanguage('ar')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
            isSticky 
              ? 'text-gray-700 hover:text-[var(--primary)] hover:bg-gray-100' 
              : 'text-white hover:text-[var(--text-link-hover)] hover:bg-[var(--secondary-light)]'
          }`}
          style={{
            borderRadius: 'var(--border-radius)',
          }}
        >
          العربية
        </button>
      ) : (
        <button
          onClick={() => switchLanguage('en')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
            isSticky 
              ? 'text-gray-700 hover:text-[var(--primary)] hover:bg-gray-100' 
              : 'text-white hover:text-[var(--text-link-hover)] hover:bg-[var(--secondary-light)]'
          }`}
          style={{
            borderRadius: 'var(--border-radius)',
          }}
        >
          English
        </button>
      )}
    </div>
  );
} 